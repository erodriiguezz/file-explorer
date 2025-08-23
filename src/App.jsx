// icons
import { FolderIcon, DocumentIcon, PlusIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

const App = () => {
  return (
    // <div className="w-screen h-screen grid place-items-center">
    <div className="p-6">
      {/* <div className="w-full max-w-[786px] h-full max-h-[400px] border border-gray-200 rounded"> */}
      <div className="">
        <div className="flex items-center gap-2 hover:bg-slate-200 cursor-pointer p-2">
          <FolderIcon className="h-6 w-6 text-gray-500" />
          <p className="text-gray-500">Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default App;
