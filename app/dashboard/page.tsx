import DasboardHeader from "@/app/ui/dashboard/dashboard-header";
import Dashboard from "@/app//ui/dashboard/dashboard";
import { getCategories } from "@/app//actions";

export default async function Page() {
    const notesData = await fetch(process.env.API_HOST + 'notes')
    const categories = getCategories()
    const notes = await notesData.json()
    const hasNotes = notes.length > 0;

    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <DasboardHeader  />
            <main className="grid grid-cols-10 text-black">
                <Dashboard hasNotes = { hasNotes } notes = {notes} categories = {categories} ></Dashboard>
            </main>
        </div>
    );
}

