import { ButtonWithAnimatedBorder } from "@/components/elements/buttons/button-with-animated-border";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-[9999] w-full bg-black py-4 px-10 rounded-full transparency-darker">
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center justify-center mx-auto w-full max-w-[1000px]">
        <p className="font-semibold text-3xl">S</p>

        <nav className="hidden md:block transperancy bg-gray-900/10 py-4 border-white/5 border-2 px-10 rounded-full w-fit mx-auto">
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
          <ButtonWithAnimatedBorder label="Contact Me" />
        </a>
      </div>
    </header>
  );
}
