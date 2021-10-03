import { useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const Container = styled.div`
  display: flex;
`;

const Navbar = () => {
  const [state, setState] = useState(initialData);
  let columns = [],
    tasks;

  state.columnOrder.map(async (columnId) => {
    columns = [...columns, state.columns[columnId]];
    tasks = columns.map((column) =>
      column.taskIds.map((taskId) => state.tasks[taskId])
    );
  });
  const handleDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";

    const { destination, source, draggableId } = result;
    console.log("destination", destination);
    console.log("source", source);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = state.columns[source.droppableId];
    const finish = state.columns[source.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      console.log("newTaskIds", newTaskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
    }
    console.log("asd");
    // const startTaskIds = Array.from(start.taskIds);
    // startTaskIds.splice(source.index, 1);
    // const newStart = {
    //   ...start,
    //   taskIds: startTaskIds,
    // };

    // const finishTaskIds = Array.from(finish.taskIds)
    // finishTaskIds.splice(destination.index, 0, draggableId)
  };

  const handleDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };

  const handleDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity}`;
  };

  return (
    <>
      <DragDropContext
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
        onDragEnd={handleDragEnd}
      >
        <Container>
          {columns.map((column, index) => (
            <Column key={column.id} column={column} tasks={tasks[index]} />
          ))}
        </Container>
      </DragDropContext>
    </>
  );
};

export default Navbar;
