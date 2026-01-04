import Image from "next/image"
import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function HelpPage() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Lurevelle Help</h1>

      <p className="mb-8 max-w-[600px] text-foreground sm:text-base">
        Need help? Our team is always ready to assist you with any product
        questions.
      </p>

      <Link
        href="https://www.lurevelle.digital/contact"
        className={buttonVariants({ size: "lg", className: "mb-10 px-6" })}
      >
        Contact support
      </Link>
    </section>
  )
}
