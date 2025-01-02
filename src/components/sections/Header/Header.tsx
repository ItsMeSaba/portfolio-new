import { LampContainer } from "@/components/aceternity-ui/lamp/Lamp"
import Me from "./me.jpg"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-[9999] w-full bg-black py-8 px-10 rounded-full transparency-darker">
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center justify-center mx-auto w-full max-w-[1000px]">
        <p className="font-semibold text-3xl">S</p>

        <nav className="hidden md:block transperancy bg-[rgb(10,10,10,.4)] py-4 border-[rgb(40,40,40)] border-2 px-10 rounded-full w-fit mx-auto">
          <ul className="flex items-center justify-center gap-10 font-semibold">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>
            
            <li>
              <a href="#about">Projects</a>
            </li>
          </ul>
        </nav>

        <a href="#contact">
          <button className="relative flex h-12 overflow-hidden rounded-full p-[2.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-auto">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </button>
        </a>
      </div>
    </header>
  )
}