import Image from "next/image"
import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">
        Lurevelle Dev Docs
      </h1>

      <p className="mb-8 max-w-[600px] text-foreground sm:text-base">
        A simple open-source product documentation platform. That&apos;s simple
        to use and easy to customize.
      </p>

      <Link
        href={`/docs${PageRoutes[0].href}`}
        className={buttonVariants({ size: "lg", className: "px-6" })}
      >
        Get Started
      </Link>
    </section>
  )
}
