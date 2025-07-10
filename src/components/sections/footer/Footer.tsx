import clsx from "clsx";
import { Socials } from "./socials/Socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8">
      <div
        className={clsx(
          "container max-w-screen-xl gap-6 justify-between",
          "items-start md:items-center"
        )}
      >
        <div className="flex flex-col gap-4">
          <p>© {currentYear} Saba Silagadze. All rights reserved.</p>
          <p>Made with ❤️ | Next.js | Vercel</p>
        </div>

        <Socials />
      </div>
    </footer>
  );
}
