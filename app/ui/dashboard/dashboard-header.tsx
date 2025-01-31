import { PlusIcon } from '@heroicons/react/24/solid'

export default function DasboardHeader() {
    return (
        <header className="flex flex-row-reverse sticky items-center top-0 z-50 px-4 py-2 bg-[color:var(--background)]">
            <a  href="editNote" className="flex items-center border border-[color:var(--foreground)] bg-transparent hover:bg-transparent font-bold py-2 px-4 rounded-full ">
            <PlusIcon className="h-5 w-5 mr-2"/>New Note
            </a>
        </header>
    );
  }
