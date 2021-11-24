import { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import { typeNameData } from "../../global/staticData";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  border-radius: 6px;
  padding: 25px;
  padding-top: 40px;
  background: #222;
  width: 890px;
  max-width: 890px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BodyWrap = styled.div`
  flex: 1;
  margin-top: 20px;
  margin-left: 10px;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding-bottom: 45px;
  & > div + div {
    margin-top: 10px;
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 2rem;
  border-radius: 4px;
  font-weight: bold;
`;
const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  color: #bbb;
  font-size: 1.2rem;
  border-radius: 4px;
`;

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const CoverWrap = styled.div`
  border-radius: 12px;
  width: 180px;
  height: 200px;
  margin-top: 20px;
  background: #333;
`;

const ShowMore = styled.div`
  position: absolute;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 14px;
  background: #0747a6;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const Intro = styled.div`
  box-sizing: border-box;
  color: white;
  font-size: 1.4rem;
  white-space: pre-line;
  word-break: break-word;
  border-radius: 4px;
  overflow: hidden;
  max-height: ${(props) => (props.showMore ? "auto" : "235px")};
`;

const ViewWorkDetail = ({ workDetail }) => {
  const [showMore, setShowMoreMore] = useState(false);
  const { title, type, intro, cover } = workDetail;
  const typeName = typeNameData[type];
  const isShowMore = intro.split("\n").length > 10;
  const handleShowMore = () => {
    setShowMoreMore(!showMore);
  };
  return (
    <Container>
      <CoverWrap>{cover && <Cover src={cover} />}</CoverWrap>
      <BodyWrap>
        <Body>
          <Title>{title}</Title>
          <Info>作品類型：{typeName}</Info>
          <Intro showMore={showMore}>{intro}</Intro>
          {isShowMore && (
            <ShowMore onClick={handleShowMore}>
              {showMore ? "顯示部分" : "顯示全部"}
            </ShowMore>
          )}
        </Body>
      </BodyWrap>
    </Container>
  );
};

export default ViewWorkDetail;
