
import { getCategories, updateNote } from "@/app/actions";
import NoteForm from "@/app/ui/editNote/noteForm";

export default async function Page({params}: {params: Promise<{noteId: string}>}) {
    const noteId = (await params).noteId
    const categories = getCategories()
    var currentNote = {}    
    if (noteId === 'new') {
        const newNoteData = {"title":"", "body":"", "categoryId":1}
        const newNoteResponse = await fetch(process.env.API_HOST+'notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNoteData)
        });
        currentNote = await newNoteResponse.json();
    } else {
        const currentNoteResponse = await fetch(process.env.API_HOST+'notes?id='+noteId)
        console.log("getting current note")
        currentNote = await currentNoteResponse.json()
    }
    return (
        <NoteForm categories={categories} note={currentNote} />
    );
}