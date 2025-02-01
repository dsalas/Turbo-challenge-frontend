const options = [
    { id:"1", name: 'Random', href: '/dashboard/category1', color: "bg-[var(--category-1)]" },
    { id:"2", name: 'School', href: '/dashboard/category2', color: "bg-[var(--category-2)]" },
    { id:"3", name: 'Personal', href: '/dashboard/category4', color: "bg-[var(--category-4)]" },
];

export default function CategorySelect() {
    return (
        <select className="pl-2 py-2 text-xs bg-transparent border  border-[color:var(--foreground)] rounded-md w-32" name="categories">
            {options.map((option) => {
                return (
                    <option className="text-xs border-transparent bg-[color:var(--background)]" key={option.id} value={option.id}>
                        &#11044; {option.name}
                    </option>
                );
            })}
        </select>
    );
}
