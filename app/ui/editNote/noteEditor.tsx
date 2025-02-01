
export default function NoteEditor() {
    return (
        <div className="w-11/12 p-4 px-8 flex flex-col gap-4 border-2 border-[color:var(--category-1)] category-1-b rounded-xl">
            <div className="flow-root">
                <h1 className="text-xs float-right">Last edited: July 12, 2024 at 8:30pm</h1>
            </div>
            <input className="bg-transparent placeholder-black" type="text" placeholder="Note Title"/>
            <textarea className="bg-transparent placeholder-black h-96 text-xs" name="" placeholder="Pour your hearth out..." id=""></textarea>
        </div>
    );
  }
