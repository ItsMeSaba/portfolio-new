export function scrollToSection(href: string, align: ScrollLogicalPosition) {
  document.getElementById(href)?.scrollIntoView({
    behavior: "smooth",
    block: align,
  });
}
