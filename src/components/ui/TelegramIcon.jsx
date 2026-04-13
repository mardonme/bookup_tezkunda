// Inline Telegram glyph so we don't need a brand icon dependency.
export default function TelegramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.94 4.6 18.7 20.02c-.24 1.08-.88 1.34-1.78.84l-4.92-3.62-2.37 2.28c-.26.26-.48.48-.98.48l.35-4.96 9.04-8.17c.4-.35-.08-.55-.62-.2l-11.18 7.04L1.4 12.2c-1.06-.33-1.08-1.05.22-1.56L20.6 3.34c.88-.32 1.66.21 1.34 1.26z" />
    </svg>
  )
}
