import CategoryLinks from "../ui/dashboard/category-links";
import DasboardHeader from "../ui/dashboard/dashboard-header";
import NoteWrapper from "../ui/dashboard/notes";

export default function Page() {
    return (
        <div className="font-[family-name:var(--font-turbo-inter)]">
            <DasboardHeader/>
            <main className="grid grid-cols-10 text-black">
                <CategoryLinks/>
                <NoteWrapper></NoteWrapper> 
            </main>  
        </div>
    );
}

