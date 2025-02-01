export default async function CategoryLinks() {
  const data = await fetch(process.env.API_HOST+'categories')
  const categories = await data.json()
  return (
    <div className="col-span-2">
      <a key="All Categories" href="/dashboard" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-xs font-medium md:flex-none md:justify-start md:p-2 md:px-3 ">
        <p className="font-bold">All Categories</p>
      </a>
      {categories.map((category: any) => {
        return (
          <a
            key={category.id}
            href={`/dashboard/category${category.id}`}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-xs font-medium md:flex-none md:justify-start md:p-2 md:px-3 "
          >
            <div
              className={`w-2 h-2 rounded-full ${getCategoryColor(category.id)}`}></div>
            <p>{category.name}</p>
            <p className="">{category.num_notes}</p>
          </a>
        );
      })}
    </div>
  );
}

function getCategoryColor(categoryId:number) {
  const colors = ["",
    "bg-[var(--category-1)]",
    "bg-[var(--category-2)]",
    "bg-[var(--category-3)]",
    "bg-[var(--category-4)]",
  ];
  return colors[categoryId];
}