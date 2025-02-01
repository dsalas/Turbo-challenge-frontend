import CategoryLinks from "../ui/dashboard/category-links";
import DasboardHeader from "../ui/dashboard/dashboard-header";
import NoteWrapper from "../ui/dashboard/notes";
import Image from "next/image";

function NoNotes() {
    return (
        <div className="col-span-8 flex-cols items-center justify-content h-[80vh]">
            <div className="flex items-center justify-center">
                <Image
                    src="/no-notes-cup.png"
                    alt="Yay, You're Back!"
                    width={200}
                    height={200}
                    layout="fixed"
                />
            </div>
            <p className="text-2xl text-[color:var(--foreground)] text-center">I’m just here waiting for your charming notes...</p>
        </div>
    );
}

export default async function Page() {
    const data = await fetch(process.env.API_HOST + 'notes')
    const notes = await data.json()
    const hasNotes = notes.length > 0;
    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <DasboardHeader />
            <main className="grid grid-cols-10 text-black">
                <CategoryLinks />
                {hasNotes ? <NoteWrapper  notes={notes} /> : <NoNotes />}
            </main>
        </div>
    );
}

