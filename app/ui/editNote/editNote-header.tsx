'use client'

import { use } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import CategorySelect from '@/app/ui/editNote/category-select';

export default function EditNoteHeader(props: any) {
    return (
        <header className="flow-root sticky items-center top-0 z-50 px-4 py-2 bg-[color:var(--background)]">
            <a  href="../dashboard" className="float-right items-center bg-transparent hover:bg-transparent font-bold py-2 px-4 rounded-full ">
            <XMarkIcon className="h-5 w-5"/>
            </a>
            <select onChange={props.handleChange} value={props.currentCategory} className="pl-2 py-2 text-xs bg-transparent border  border-[color:var(--foreground)] rounded-md w-40" name="categories">
            {props.categories.map((category: any) => {
                return (
                    <option className="text-xs border-transparent bg-[color:var(--background)]" key={category.id} value={category.id}>
                        &#11044; {category.name}
                    </option>
                );
            })}
        </select>
        </header>
    );
  }
