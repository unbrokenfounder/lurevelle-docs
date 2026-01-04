import { Paths } from "../lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Lurevelle Digital",
    title: "Начало работы",
    href: "/intro",
  },
  {
    title: "Руководство разработчика",
    href: "/developer",
    items: [
      {
        title: "Термины",
        href: "/glossary",
      },
    ],
  },

  {
    spacer: true,
  },
]
