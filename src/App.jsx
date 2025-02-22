import "./styles.css";
import { explorer } from "./dataFolder";
import { useState } from "react";
import { FaFolder, FaFile } from "react-icons/fa";

const insertNode = (id, expand, name, data) => {
  return (
    data?.map((d) => {
      const clone = {
        ...d,
        items: (() => {
          if (d.id === id) {
            return [
              {
                id: new Date(),
                isFolder: expand === 1,
                name,
              },
              ...(d.items ?? []),
            ];
          } else {
            const items = d.items;
            return insertNode(id, expand, name, items);
          }
        })(),
      };
      return clone;
    }) ?? []
  );
};
const showChildrenNode = (data, id, value) => {
  return data?.map((d) => {
    const clone = {
      ...d,
      showChildren: d.id === id ? value : d.showChildren,
      items: showChildrenNode(d.items, id, value),
    };
    return clone;
  });
};
const File = ({ name, padding }) => {
  return (
    <div
      style={{
        paddingLeft: `${padding}px`,
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {" "}
      <FaFile style={{ marginRight: "5px" }} />
      {name}
    </div>
  );
};
const Folder = ({ name, padding, id, data, setOrignalData, showChildren }) => {
  const [value, setValue] = useState("");
  const [expand, setExpand] = useState(null);
  return (
    <>
      <div
        style={{
          paddingLeft: `${padding}px`,
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={(e) => {
          setOrignalData(showChildrenNode(data, id, !showChildren));
          e?.stopPropagation();
        }}
      >
        <FaFolder style={{ marginRight: "5px" }} />
        {name}
        <button
          style={{ marginRight: "5px", height: "20px", marginLeft: "5px" }}
          onClick={(e) => {
            setExpand((x) => (x ? null : 1));
            setOrignalData(showChildrenNode(data, id, true));
            e?.stopPropagation();
          }}
        >
          {" "}
          + Add Folder{" "}
        </button>
        <button
          style={{ height: "20px" }}
          onClick={(e) => {
            setExpand((x) => (x ? null : 2));
            setOrignalData(showChildrenNode(data, id, true));
            e?.stopPropagation();
          }}
        >
          {" "}
          + Add File{" "}
        </button>
      </div>
      {!!expand && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {expand === 1 ? <FaFolder style={{ marginRight: "5px", marginLeft: `${padding + 10}px` }} /> : <FaFile style={{ marginRight: "5px", marginLeft: `${padding + 10}px` }} />}
          <input
            style={{
              height: "15px",
              marginBottom: "5px",
            }}
            autoFocus
            onBlur={() => setExpand(null)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const rem = insertNode(id, expand, value, data);
                setOrignalData(rem);
                setExpand(null);
                setValue("");
              }
            }}
          />
        </div>
      )}
    </>
  );
};
const ShowNested = ({ orignalData, data, padding, opened, setOpened, setOrignalData }) => {
  return data?.map((d) => {
    console.log(opened, "finale");
    return (
      <>
        {d.isFolder ? (
          <div>
            <Folder name={d.name} setOpened={setOpened} padding={padding} opened={opened} id={d.id} data={orignalData} setOrignalData={setOrignalData} showChildren={d.showChildren} />
          </div>
        ) : (
          <File name={d.name} padding={padding} />
        )}

        {d.showChildren && <ShowNested orignalData={orignalData} setOrignalData={setOrignalData} data={d.items} setOpened={setOpened} opened={opened} padding={padding + 10} />}
      </>
    );
  });
};
export default function App() {
  const [opened, setOpened] = useState(new Set([]));
  const [orignalData, setOrignalData] = useState([explorer]);
  console.log(orignalData);
  return (
    <div className="App">
      <ShowNested orignalData={orignalData} data={orignalData} padding={10} opened={opened} setOrignalData={setOrignalData} setOpened={setOpened} />
    </div>
  );
}
