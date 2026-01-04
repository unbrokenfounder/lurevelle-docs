import Image from "next/image"
import { Link } from "lib/transition"

import { Settings } from "@/types/settings"

export function Logo() {
  return (
    <Link
      href="/"
      title={`${Settings.title} main logo`}
      aria-label={`${Settings.title} main logo`}
      className="text-foregroundflex items-center gap-2.5 text-xl font-bold"
    >
      <span className="text-md font-semibold">{Settings.title}</span>
    </Link>
  )
}
