export interface NavLink {
  label: string;
  href: string;
}

/**
 * Site-wide navigation links — single source of truth.
 * Order is LOCKED per DESIGN.md §18.7: Experience → About → Skills → Projects → Contact
 * (Experience before Projects, per the constitution §9.2).
 */
export const navLinks: NavLink[] = [
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
