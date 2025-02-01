import { XMarkIcon } from '@heroicons/react/24/solid'
import CategorySelect from '@/app/ui/editNote/category-select';

export default function EditNoteHeader() {
    return (
        <header className="flow-root sticky items-center top-0 z-50 px-4 py-2 bg-[color:var(--background)]">
            <a  href="../dashboard" className="float-right items-center bg-transparent hover:bg-transparent font-bold py-2 px-4 rounded-full ">
            <XMarkIcon className="h-5 w-5"/>
            </a>
            <CategorySelect/>
        </header>
    );
  }
