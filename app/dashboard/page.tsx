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

export default function Page() {
    const hasNotes = false;
    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <DasboardHeader />
            <main className="grid grid-cols-10 text-black">
                <CategoryLinks />
                {hasNotes ? <NoteWrapper /> : <NoNotes />}
            </main>
        </div>
    );
}

