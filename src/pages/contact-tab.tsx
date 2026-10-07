import { useRef, useState, type FormEvent } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha" // NEW
import {
  Button, Input, Label, Textarea,
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/index"

type Status = "idle" | "sending" | "success" | "error"

const COOLDOWN_MS = 60_000

export function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [honeypot, setHoneypot] = useState("")
  const [token, setToken] = useState("") // NEW
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const captchaRef = useRef<HCaptcha>(null) // NEW

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 1. Honeypot: real users never fill this. Pretend success for bots.
    if (honeypot) {
      setStatus("success")
      return
    }

    // NEW: captcha must be solved
    if (!token) {
      setStatus("error")
      setError("Please complete the captcha.")
      return
    }

    // 2. Cooldown: block rapid re-sends from the same browser
    const last = Number(localStorage.getItem("contact_last_sent") ?? 0)
    if (Date.now() - last < COOLDOWN_MS) {
      setStatus("error")
      setError("Please wait a minute before sending another message.")
      return
    }

    setStatus("sending")
    setError("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          message: form.message,
          "h-captcha-response": token, // NEW
        }),
      })
      const data = await res.json()

      if (data.success) {
        localStorage.setItem("contact_last_sent", String(Date.now()))
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        throw new Error(data.message || "Something went wrong.")
      }
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      // NEW: captcha tokens are single-use, so reset after every attempt
      captchaRef.current?.resetCaptcha()
      setToken("")
    }
  }

  return (
    <Card className="animate-in fade-in duration-600">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>Send me a message and I'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot: hidden from humans and screen readers */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name" required maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email" type="email" required maxLength={150}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message" required rows={8} minLength={10} maxLength={2000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message..."
            />
          </div>

          {/* NEW: hCaptcha widget */}
          <HCaptcha
            ref={captchaRef}
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={setToken}
            onExpire={() => setToken("")}
          />

          <Button
            type="submit"
            disabled={status === "sending" || !token} // NEW: !token
            className="w-full sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-600">Thanks! Your message was sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}