import styled from "styled-components";
import { Link } from "react-router-dom";
import { SortableContainer } from "react-sortable-hoc";

import Picture from "./Picture";
import Upload from "./Upload";

const Container = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 100%;
  border-radius: 6px;
  background: #222;
  padding: 20px;
  padding-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ShowMoreButton = styled.div`
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 12px;
  background: #0747a6;
  color: white;
  border-radius: 6px;
  z-index: 10;
  cursor: pointer;
`;

const PictureEditor = SortableContainer(
  ({
    pictures,
    mode,
    isShowMore,
    handleRemove,
    handleUploadFiles,
    handleShowMore,
  }) => {
    return (
      <Container isShowMore={isShowMore}>
        {pictures.order.map((workId, index) => (
          <Picture
            key={`item-${index}`}
            item={{ [workId]: pictures.items[workId] }}
            handleRemove={handleRemove}
            index={index}
            disabled={mode.active === "view" ? true : false}
            mode={mode}
          />
        ))}
        {mode.pathName === "works" ? (
          mode.active === "view" ? (
            <Link to="/newWork" title="新增作品">
              <Upload mode={mode} />
            </Link>
          ) : (
            <Upload mode={mode} />
          )
        ) : (
          mode.active === "edit" && (
            <Upload mode={mode} handleUploadFiles={handleUploadFiles} />
          )
        )}
        {isShowMore && (
          <ShowMoreButton onClick={handleShowMore}>載入更多</ShowMoreButton>
        )}
      </Container>
    );
  }
);

export default PictureEditor;
