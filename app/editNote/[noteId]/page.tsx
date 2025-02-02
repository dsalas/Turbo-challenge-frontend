
import { createNote, getCategories } from "@/app/actions";
import NoteForm from "@/app/ui/editNote/noteForm";

export default async function Page({params}: {params: Promise<{noteId: string}>}) {
    const noteId = (await params).noteId
    const categories = getCategories()
    var currentNote = {}    
    if (noteId === 'new') {
        currentNote = await createNote("", "", "1")
        console.log(currentNote)
    } else {
        const currentNoteResponse = await fetch(process.env.API_HOST+'notes?id='+noteId)
        currentNote = await currentNoteResponse.json()
    }
    return (
        <NoteForm categories={categories} note={currentNote} />
    );
}