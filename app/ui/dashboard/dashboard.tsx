'use client'

import CategoryLinks from "@/app/ui/dashboard/category-links";
import NoteWrapper from "@/app/ui/dashboard/notes";
import Image from "next/image";
import { use, useState } from "react";

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

export default function Dashboard(props: any) {
    const allCategories: any = use(props.categories)
    const [notes, setNotes] = useState(props.notes)
    
    function handleCategoryFilter(event:any) {
        const clickedCategory = event.currentTarget.getAttribute("data-index")
        setNotes(() =>{
            const filtered = props.notes.filter((note:any) => {    
                return ""+note.categoryId === clickedCategory 
            })
            return filtered
        }) 
        event.preventDefault()
    }

    return (
        <>
            <CategoryLinks categories = {allCategories} onCategoryClick={handleCategoryFilter} />
            {props.hasNotes ? <NoteWrapper notes={notes} /> : <NoNotes />}
        </>
    )
}