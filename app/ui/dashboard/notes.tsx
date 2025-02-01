import Link from 'next/link'

export default async function NoteWrapper({ notes }: any) {
  return (
    <div className="p-4 col-span-8 grid grid-cols-3 gap-4">
      {notes.map((note: any) => {
        return (
          <Note id={note.id} title={note.title} text={note.body} category={note.categoryId} categoryName={note.categoryName} date={formatDate(note.updated)} />
        );
      })}
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
  const backgrounds = ["", "border-[color:var(--category-1)] category-1-b", "border-[color:var(--category-2)] category-2-b", "border-[color:var(--category-3)] category-3-b", "border-[color:var(--category-4)] category-4-b"];
  return (
    <div key={id}>
    <Link href={`/editNote/${id}`}>
      <div className={`h-64 rounded-xl p-4 shadow-md border-2 ${backgrounds[category]}`}>
        <div className="flex text-xs mb-2"><h1 className="font-bold mr-2">{date}</h1><h1>{categoryName}</h1></div>
        <div className="flex font-bold mb-2">
          <h1>{title}</h1>
        </div>
        <p className="truncate text-xs">{text} </p>
      </div>
    </Link>
    </div>
  );
}

function formatDate(date: string) {
  var MMDD = new Date(date)
  MMDD.setHours(0, 0, 0, 0)
  var strDate = MMDD.toLocaleString('en', { month: 'long' }) + " " + MMDD.getDate() 

  var today = new Date();
  today.setHours(0, 0, 0, 0)

  var yesterday = new Date();
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(yesterday.getDate() - 1)

  if (today.getTime() == MMDD.getTime()) {
      strDate = "today";
  } else if (yesterday.getTime() == MMDD.getTime()) {
      strDate = "yesterday";
  }
  
  return strDate;
}


