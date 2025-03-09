interface NavLink {
  href: string;
  label: string;
  align: ScrollLogicalPosition;
}

export const navLinks: NavLink[] = [
  { href: "about", label: "About", align: "center" },
  { href: "experience", label: "Experience", align: "start" },
  { href: "projects", label: "Projects", align: "center" },
];


