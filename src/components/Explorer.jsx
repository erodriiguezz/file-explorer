import { FolderIcon, DocumentIcon, PlusIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

const Explorer = () => {
  const data = [
    {
      type: "folder",
      name: "untitled folder",
      owner: "Ernesto Rodriguez",
      size: "--",
      created: "Mar 19, 2025 at 12:47",
      modified: "Mar 19, 2025 at 12:47",
    },
    {
      type: "folder",
      name: "Projects",
      owner: "Ernesto Rodriguez",
      size: "--",
      created: "Mar 19, 2025 at 12:47",
      modified: "Mar 19, 2025 at 12:47",
    },
    {
      type: "file",
      name: "index.html",
      owner: "Ernesto Rodriguez",
      size: "--",
      created: "Mar 19, 2025 at 12:47",
      modified: "Mar 19, 2025 at 12:47",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-[1fr_0.5fr_0.25fr_0.25fr] items-center px-4 py-2 text-sm text-black-500 ">
        <div className="flex items-center gap-2">
          <p>Name</p>
        </div>

        <div>Owner</div>

        <div>Last Modified</div>

        <div>Size</div>
      </div>

      {data.map((item, key) => (
        <div className="grid grid-cols-[1fr_0.5fr_0.25fr_0.25fr] items-center hover:bg-slate-200 cursor-pointer px-4 py-2 text-sm text-gray-500" key={item.name}>
          <div className="flex items-center gap-2">
            {item.type == "folder" && <FolderIcon className="h-5 w-5 text-gray-500" />}
            {item.type == "file" && <DocumentIcon className="h-5 w-5 text-gray-500" />}
            <p>{item.name}</p>
          </div>

          <div>{item.owner}</div>

          <div>{item.size}</div>

          <div>{item.type}</div>
        </div>
      ))}
    </div>
  );
};

export default Explorer;
