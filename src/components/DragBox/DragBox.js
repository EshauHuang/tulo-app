import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import DragColumn from "./DragColumn";

const initialData = {
  pictures: {
    "picture-1": { id: "picture-1", path: pic1 },
    "picture-2": { id: "picture-2", path: pic2 },
    "picture-3": { id: "picture-3", path: pic3 },
    "picture-4": { id: "picture-4", path: pic4 },
    "picture-5": { id: "picture-5", path: pic5 },
  },
  columns: {
    "pictures-box": {
      id: "pictures-box",
      title: "移動圖片",
      pictureIds: [
        "picture-1",
        "picture-2",
        "picture-3",
        "picture-4",
        "picture-5",
      ],
    },
  },
  columnOrder: ["pictures-box"],
};

const DragBox = () => {
  const [state, setState] = useState(initialData);

  return (
    <DragDropContext>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const pictures = column.pictureIds.map(
          (pictureId) => state.pictures[pictureId]
        );
        return (
          <DragColumn key={column.id} column={column} pictures={pictures} />
        );
      })}
    </DragDropContext>
  );
};

export default DragBox;
