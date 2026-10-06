import { Link, Outlet } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <nav className="flex gap-4 text-sm">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <ModeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}