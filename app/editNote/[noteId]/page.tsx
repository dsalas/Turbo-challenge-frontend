export default async function Page({params}: {params: Promise<{noteId: string}>}) {
    const noteId = (await params).noteId
    return (
        
        <div className="font-[family-name:var(--font-turbo-inter)]">
            Edit Note Page {noteId}
        </div>
    );
}