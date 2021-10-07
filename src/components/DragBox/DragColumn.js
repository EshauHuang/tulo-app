import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
`;

const Picture = ({ picture, index }) => {
  return (
    <Draggable draggableId={picture.id} index={index}>
      {(provided) => (
        <Image
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          src={picture.path}
          alt={picture.id}
        />
      )}
    </Draggable>
  );
};

const PictureList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DragColumn = ({ column, pictures }) => {
  console.log(column, pictures);
  return (
    <Container>
      <Title>{column.id}</Title>
      <Droppable droppableId={column.id} direction="horizontal">
        {(provided) => (
          <PictureList {...provided.droppableProps} ref={provided.innerRef}>
            {pictures.map((picture, index) => (
              <Picture key={picture.id} picture={picture} index={index} />
            ))}
          </PictureList>
        )}
      </Droppable>
    </Container>
  );
};

export default DragColumn;
