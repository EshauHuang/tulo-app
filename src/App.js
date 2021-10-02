import { useState, useRef, forwardRef, createRef } from "react";
import styled from "styled-components";

const StyledDraggable = styled.div`
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  cursor: move;
  & + & {
    margin-top: 1rem;
  }
  ${(props) =>
    props.dragging &&
    `
    opacity: .5;
  `}
`;

const Draggable = ({ children, item, handleDragging, handleDragEnd }) => {
  return (
    <StyledDraggable
      dragging={item.dragging}
      draggable="true"
      onDragStart={() => handleDragging(item)}
      onDragEnd={handleDragEnd}
    >
      {children}
    </StyledDraggable>
  );
};

const Container = styled.div`
  background-color: #333;
  padding: 1rem;
  margin-top: 1rem;
`;

const DragBox = ({
  items,
  type,
  handleDragging,
  handleDragEnd,
  handleDragOver,
  addToRefs,
}) => {
  return (
    <Container ref={addToRefs} onDragOver={(e) => handleDragOver(e, type)}>
      {type === "finished" &&
        items.map(
          (item) =>
            item.finished && (
              <Draggable
                handleDragEnd={handleDragEnd}
                handleDragging={handleDragging}
                key={item.value}
                item={item}
              >
                {item.value}
              </Draggable>
            )
        )}
      {type === "unfinished" &&
        items.map(
          (item) =>
            !item.finished && (
              <Draggable
                handleDragEnd={handleDragEnd}
                handleDragging={handleDragging}
                key={item.value}
                item={item}
              >
                {item.value}
              </Draggable>
            )
        )}
    </Container>
  );
};

function App() {
  const [dragBox, setDragBox] = useState([
    { value: 1, finished: true, dragging: false },
    { value: 2, finished: true, dragging: false },
    { value: 3, finished: false, dragging: false },
    { value: 4, finished: false, dragging: false },
  ]);
  let boxType = useRef(null);
  const boxRef = useRef([]);
  const addToRefs = (el) => {
    if (el && !boxRef.current.includes(el)) {
      boxRef.current.push(el);
    }
  };
  const handleDragging = (target) => {
    setDragBox(
      dragBox.map((item) => {
        if (item.value !== target.value) return item;
        return {
          ...item,
          dragging: true,
        };
      })
    );
  };

  const handleDragEnd = () => {
    setDragBox(
      dragBox.map((item) => {
        return {
          ...item,
          dragging: false,
        };
      })
    );
    boxType.current = null;
  };
  const handleDragOver = (e, type) => {
    e.preventDefault();
    if (boxType.current !== type) {
      boxType.current = type;
      setDragBox(
        dragBox.map((item) => {
          if (item.dragging !== true) return item;
          return {
            ...item,
            finished: type === "finished" ? true : false,
          };
        })
      );
    }
    if (type === "finished") getDragAfterElement(boxRef.current[0], e.clientY);
    if (type === "unfinished")
      getDragAfterElement(boxRef.current[1], e.clientY);
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [...dragBox.filter((item) => !item.dragging)];
    console.log(container);
    // draggableElements.reduce(
    //   (closest, child) => {
    //     const box = child.getBoundingClientRec();
    //     console.log(box);
    //   },
    //   {
    //     offset: Number.POSITIVE_INFINITY,
    //   }
    // );
  };
  console.log(boxRef.current);
  return (
    <>
      {["finished", "unfinished"].map((type, i) => (
        <DragBox
          key={i}
          addToRefs={addToRefs}
          handleDragging={handleDragging}
          handleDragEnd={handleDragEnd}
          handleDragOver={handleDragOver}
          type={type}
          items={dragBox}
        />
      ))}
    </>
  );
}

export default App;
