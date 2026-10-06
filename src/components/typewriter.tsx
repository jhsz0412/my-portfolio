import { useEffect, useState } from "react"

type TypewriterProps = {
  text: string
  speed?: number
  className?: string
}

export function Typewriter({ text, speed = 100, className }: TypewriterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= text.length) return
    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [count, text, speed])

  return (
    <span className={`relative inline-block ${className ?? ""}`} aria-label={text}>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute left-0 top-0 whitespace-nowrap text-left" aria-hidden="true">
        {text.slice(0, count)}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  )
}