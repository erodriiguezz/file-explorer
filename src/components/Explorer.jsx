import { FolderIcon, DocumentIcon, PlusIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

const Explorer = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-[1fr_0.5fr_0.25fr_0.25fr] items-center px-4 py-2 text-sm text-black-500 ">
        <div className="flex items-center gap-2">
          <p>Name</p>
        </div>

        <div>Last Modified</div>

        <div>Size</div>

        <div>Kind</div>
      </div>

      <div className="grid grid-cols-[1fr_0.5fr_0.25fr_0.25fr] items-center hover:bg-slate-200 cursor-pointer px-4 py-2 text-sm text-gray-500 ">
        <div className="flex items-center gap-2">
          <FolderIcon className="h-5 w-5 text-gray-500" />
          <p>untitled folder</p>
        </div>

        <div>Mar 19, 2025 at 12:47</div>

        <div>--</div>

        <div>Folder</div>
      </div>

      <div className="grid grid-cols-[1fr_0.5fr_0.25fr_0.25fr] items-center hover:bg-slate-200 cursor-pointer px-4 py-2 text-sm text-gray-500 ">
        <div className="flex items-center gap-2">
          <FolderIcon className="h-5 w-5 text-gray-500" />
          <p>Projects</p>
        </div>

        <div>Mar 19, 2025 at 12:47</div>

        <div>--</div>

        <div>Folder</div>
      </div>
    </div>
  );
};

export default Explorer;
