import EditNoteHeader from "@/app/ui/editNote/editNote-header";
import NoteEditor from "@/app/ui/editNote/noteEditor";

export default async function Page({params}: {params: Promise<{noteId: string}>}) {
    const noteId = (await params).noteId
    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <EditNoteHeader/>
            <main className="flex justify-center text-black w-full">
                <NoteEditor/>
            </main>  
        </div>
    );
}