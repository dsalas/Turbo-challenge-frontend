import Link from 'next/link'

export default async function NoteWrapper() {
    return (
      <div className="p-4 col-span-8 grid grid-cols-3 gap-4">
        <Note id={1} title="Note 1" text="text for note 1" category={1} categoryName="Random" date="today"/>
        <Note id={2} title="Note 2" text="text for note 2" category={2} categoryName="School" date="yesterday"/>
        <Note id={3}title="Note 3" text="text for note 3" category={2} categoryName="School" date="July 16"/>
        <Note id={4} title="Note 4" text="text for note 4" category={3} categoryName="Personal" date="June 10"/>
      </div>
    );
  }
  
  export function Note({
    id,
    title,
    text,
    category,
    categoryName,
    date
  }: {
    id: number;
    title: string;
    text: string;
    category: number;
    categoryName: string;
    date: string;
  }) {
    const backgrounds = ["","bg-[var(--category-1)]","bg-[var(--category-2)]","bg-[var(--category-3)]","bg-[var(--category-4)]"];
    return (
        <Link href={`/editNote/${id}`}>
        <div className={`h-64 rounded-xl p-4 shadow-md ${backgrounds[category]}`}>
            <div className="flex text-xs mb-2"><h1 className="font-bold mr-2">{date}</h1><h1>{categoryName}</h1></div>
            <div className="flex font-bold mb-2">
            <h1>{title}</h1>
            </div>
            <p className="truncate text-xs">{text} </p>
        </div>
        </Link>
    );
  }