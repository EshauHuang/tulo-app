import styled from "styled-components";
import { Link } from "react-router-dom";
import { SortableElement } from "react-sortable-hoc";

import { Edit } from "@styled-icons/entypo";

const Remove = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 3px;
  width: 10px;
  height: 10px;
  background: #bdc3c7;
  cursor: pointer;
  z-index: 10;
  display: none;
  border-radius: 4px;
  :after,
  :before {
    content: "";
    position: absolute;
    width: 1px;
    height: 13px;
    background: black;
    top: 50%;
    left: 50%;
  }
  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  :hover {
    background: #d3d3d3;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    ${Remove} {
      display: block;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: #333;
  :hover {
    :before {
      ${(props) =>
        props.mode.pathName !== "newWork" &&
        `
      content: "";
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
  `}
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.div`
  box-sizing: border-box;
  color: white;
  width: 100%;
  min-height: 35px;
  min-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  padding: 5px;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Goto = styled(Link)``;

const EditIcon = styled(Edit)`
  box-sizing: border-box;
  width: 25px;
  position: absolute;
  padding: 5px;
  background: #0747a6;
  z-index: 20;
  top: 0;
  right: 0;
  color: white;
  font-size: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Picture = SortableElement(({ item, handleRemove, mode }) => {
  const [id] = Object.keys(item);
  const {
    url,
    file: { title, type },
  } = item[id];
  const linkOptions =
    mode.pathName === "newWork"
      ? { as: "div" }
      : {
          to: `/work/${id}/${type}`,
        };
  return (
    <Container>
      {mode.active === "edit" && (
        <Remove onClick={() => handleRemove(Number(id))} />
      )}
      {mode.active === "view" && <EditIcon />}
      <Goto {...linkOptions}>
        <ImageWrap mode={mode}>
          <Image mode={mode} src={url} />
        </ImageWrap>
        {mode.pathName === "works" && <Title title={title}>{title}</Title>}
      </Goto>
    </Container>
  );
});

export default Picture;
