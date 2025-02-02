'use server'
 
export async function getCategories() {
    const data = await fetch(process.env.API_HOST+'categories')
    const categories = await data.json()
    return categories;
}

export async function getNote(id: number) {
    const data = await fetch(process.env.API_HOST+'notes')
    const notes = await data.json()
    return notes;
}

export async function updateNote(id: number, title: string, nBody: string, categoryId: string) {
    var noteFormData = new FormData();
    noteFormData.append('title', title);
    noteFormData.append('body', nBody);
    noteFormData.append('categoryId', categoryId);
    const response = await fetch(process.env.API_HOST+'notes?id='+id, {
        method: 'PUT',
        body: noteFormData
    });
    const updatedNote = await response.json();
    return updatedNote;
}
    
export async function createNote(title: string, nBody: string, categoryId: string) {
    var noteFormData = new FormData();
    noteFormData.append('title', title);
    noteFormData.append('body', nBody);
    noteFormData.append('categoryId', categoryId);
    const response = await fetch(process.env.API_HOST+'notes', {
        method: 'POST',
        body: noteFormData
    });
    const createdNote = await response.json();
    return createdNote;
}
    