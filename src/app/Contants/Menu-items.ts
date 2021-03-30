import { MenuItem } from 'src/app/interface/menu-item';

export const MENUITEMS: MenuItem[] = [
    { id: 1, icon: "home", name: "Home", href: "/"},
    { id: 2, icon: "search", name: "Search", href: "/search"},
    { id: 3, icon: "schedule", name: "Recent", href: "/recent"},
    { id: 4, icon: "list", name: "My list", href: "/anime/:id"},
    { id: 5, icon: "Quiz", name: "quiz", href: "/quiz"},
]