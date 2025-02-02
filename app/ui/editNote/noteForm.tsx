'use client'
import { use, useCallback, useEffect, useState } from "react";
import EditNoteHeader from "./editNote-header";
import NoteEditor from "./noteEditor";
import { updateNote } from "@/app/actions";

export default function NoteForm(props:any) {
    const allCategories: any = use(props.categories)
    const [note, setNote] = useState(props.note)

    useEffect(() => {
        updateNote(note.id, note.title, note.body, note.categoryId);
    }, [note]);

    function handleCategoryChange(event: any) {
        setNote((prevNote: any) => { 
            return {
            ...prevNote,
            'categoryId': event.target.value,
            'updated': Date.now()
            }
        })
    }

    function handleTitleChange(event: any) {
        setNote((prevNote: any) => ({
            ...prevNote,
            'title': event.target.value,
            'updated': Date.now()
        }))    
    }

    function handleBodyChange(event: any) {
        setNote((prevNote: any) => ({
            ...prevNote,
            'body': event.target.value,
            'updated': Date.now()
        }))    
    }

    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <EditNoteHeader categories={allCategories} handleChange={handleCategoryChange} currentCategory={note.categoryId} />
            <main className="flex justify-center text-black w-full">
                <NoteEditor note = {note} handleTitleChange={handleTitleChange} handleBodyChange={handleBodyChange} />
            </main>  
        </div>
    );
}



