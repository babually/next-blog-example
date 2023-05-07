"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { Testimonial } from "@/components/testimonial"
import { OurTeam } from "@/components/teams"

export default function IndexPage() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
      <div className="w-full text-center lg:w-8/12">
        <h1 className="leading-2 my-4 text-6xl font-semibold ">
          Hey, We are Tausi. See our thoghts, stories and ideas.
        </h1>
        <p className="mb-8 text-base">
          Tausi is a minimum multipurpose blog. A beautifull way to share stories with your growing audience.
        </p>
      </div>
      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div> */}
      <Hero/>
      <Testimonial/>
      <OurTeam/>
    </section>
  )
}
