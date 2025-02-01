
export default async function CategorySelect(props: any) {
    const categories = props.categories;
    console.log(props)
    return (
        <select onChange={props.onChange} className="pl-2 py-2 text-xs bg-transparent border  border-[color:var(--foreground)] rounded-md w-40" name="categories">
            {categories.map((category: any) => {
                return (
                    <option className="text-xs border-transparent bg-[color:var(--background)]" key={category.id} value={category.id}>
                        &#11044; {category.name}
                    </option>
                );
            })}
        </select>
    );
}

