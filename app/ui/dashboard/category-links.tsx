  const links = [
    { name: 'All Categories', href: '/dashboard', color: "hidden" , style: "font-bold" },
    { name: 'Random', href: '/dashboard/category1', color:"bg-[var(--category-1)]"  },
    { name: 'School', href: '/dashboard/category2', color: "bg-[var(--category-2)]" },
    { name: 'Personal', href: '/dashboard/category4', color: "bg-[var(--category-4)]" },
  ];
  
  export default function CategoryLinks() {
    return (
      <div className="col-span-2">
        {links.map((link) => {
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-xs font-medium md:flex-none md:justify-start md:p-2 md:px-3 "
            >
                <div
                    className={`w-2 h-2 rounded-full ${link.color}`}></div>
              <p className={`${link.style}`}>{link.name}</p>
            </a>
          );
        })}
      </div>
    );
  }