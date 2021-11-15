import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 30px;
  padding-top: 40px;
  width: 890px;
  max-width: 890px;
  background: #222;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageWrap = styled.div`
  box-sizing: border-box;
  padding: 40px 10px;
  overflow: hidden;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 600px;
  background: #333;
  & + & {
    margin-top: 40px;
  }
`;

const ShowMore = styled.div`
  position: absolute;
  color: white;
  padding: 10px 20px;
  border-radius: 14px;
  background: #0747a6;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const PictureReader = ({ pictures }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const { order, items } = pictures;
  return (
    <Container>
      <ImageWrap>
        {order.slice(0, 1).map((pictureId) => (
          <Image key={`img-${pictureId}`} src={items[pictureId].url} />
        ))}
        {showMore &&
          order
            .slice(1, order.length)
            .map((pictureId) => (
              <Image key={`img-${pictureId}`} src={items[pictureId].url} />
            ))}
      </ImageWrap>
      <ShowMore onClick={handleShowMore}>
        {showMore ? "顯示部分" : "顯示全部"}
      </ShowMore>
    </Container>
  );
};

export default PictureReader;
