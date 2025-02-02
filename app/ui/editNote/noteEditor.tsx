
export default function NoteEditor(props: any) {
    const title = props.note.title
    const body = props.note.body
    return (
        <div className={`w-11/12 p-4 px-8 flex flex-col gap-4 border-2 rounded-xl border-[color:var(--category-1)] category-1-b ${getCategoryColor(props.note.categoryId)}`}>
            <div className="flow-root">
                <h1 className="text-xs float-right">Last edited: {formatDate(props.note.updated)}</h1>
            </div>
            <input className="bg-transparent placeholder-black" value={title || ""} type="text" onChange={props.handleTitleChange} placeholder="Note Title"/>
            <textarea className="bg-transparent placeholder-black h-96 text-xs" value={body || ""} onChange={props.handleBodyChange} name="" placeholder="Pour your hearth out..." id=""></textarea>
        </div>
    );
  }

  function getCategoryColor(categoryId:number) {
    const colors = ["","border-[color:var(--category-1)] category-1-b","border-[color:var(--category-2)] category-2-b","border-[color:var(--category-3)] category-3-b","border-[color:var(--category-4)] category-4-b"]
    return colors[categoryId];
  }

  function formatDate(date: string) {
    var formatedDate = new Date(date)
    return formatedDate.toLocaleString('en', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true 
      })
  }