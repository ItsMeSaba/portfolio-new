import { scrollToSection } from "@/base/utils/scroll-to-section";
import { navLinks } from "./data";

export function Navigation() {
  return (
    <nav className="hidden md:block transperancy bg-gray-900/10 py-4 border-white/10 border-2 px-10 rounded-full w-fit mx-auto">
      <ul className="flex items-center justify-center gap-10 font-semibold">
        {navLinks.map(({ href, label, align }) => (
          <li key={href}>
            <button onClick={() => scrollToSection(href, align)}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
