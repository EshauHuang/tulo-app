import { Fragment, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #333;
  padding: 1rem;
  margin-top: 1rem;
`;

const Container = () => {
  return (
    <StyledContainer
      onDragOver={() => {
        console.log("drag over");
      }}
    ></StyledContainer>
  );
};
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

const Draggable = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  return (
    <StyledDraggable
      dragging={dragging}
      draggable="true"
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
    >
      {children}
    </StyledDraggable>
  );
};

function App() {
  return (
    <>
      <Container>
        <Draggable>1</Draggable>
        <Draggable>2</Draggable>
      </Container>
      <Container>
        <Draggable>3</Draggable>
        <Draggable>4</Draggable>
      </Container>
    </>
  );
}

export default App;
