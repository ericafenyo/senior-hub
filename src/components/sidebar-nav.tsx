import { SidebarNavItem } from "./sidebar-nav-item";

type Props = {
  teamId: string;
}

const items: any[] = [
  {
    href: "reminders",
    icon: "calendar",
    title: "Reminders"
  },
  {
    href: "medications",
    icon: "pill",
    title: "Medications"
  },
  {
    href: "tasks",
    icon: "clipboard-list",
    title: "Tasks"
  },
  {
    href: "notes",
    icon: "notebook-pen",
    title: "Notes"
  },
  {
    href: "members",
    icon: "users",
    title: "Members"
  }
];

export const SidebarNav = ({ teamId }: Props) => {
  return (
    <aside className="w-[240px] border-r h-full bg-white flex-shrink-0">
      <nav className="h-full">
        <ul className="px-2 space-y-2 text-sm font-medium">
          {items.map((item, index) => (
            <li key={index}>
              <SidebarNavItem
                key={index}
                href={`/teams/${teamId}/${item.href}`}
                name={item.icon}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
