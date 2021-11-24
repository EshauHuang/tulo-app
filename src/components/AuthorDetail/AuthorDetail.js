import styled from "styled-components";
import { useState } from "react";

import { User as UserIcon } from "@styled-icons/feather";

const Container = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 890px;
  max-width: 890px;
  padding: 25px;
  padding-top: 40px;
  margin: 0 auto;
  border: 0;
  background: #222;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const PhotoWrap = styled.div`
  border-radius: 12px;
  margin-top: 20px;
  width: 120px;
  height: 120px;
  background: #333;
`;

const DetailWrap = styled.div`
  position: relative;
  flex: 1;
  margin-top: 20px;
  margin-left: 35px;
  padding-bottom: 45px;
`;

const StyledUserIcon = styled(UserIcon)`
  box-sizing: border-box;
  padding: 10px;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  background: #485460;
  color: white;
  border-radius: 12px;
`;

const Nickname = styled.div`
  font-size: 2rem;
  color: white;
`;

const Following = styled.div`
  font-size: 1.4rem;
  color: #ccc;
  margin-top: 5px;
`;

const Intro = styled.div`
  font-size: 1.4rem;
  color: white;
  width: 100%;
  margin-top: 15px;
  white-space: pre-line;
  word-break: break-word;
  overflow: hidden;
  max-height: ${(props) => (props.showMore ? "auto" : "235px")};
`;

const FollowingButton = styled.div`
  position: absolute;
  background: white;
  right: 0;
  top: 0;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 14px;
  background: #0747a6;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
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

const AuthorDetail = ({ workDetail }) => {
  const [showMore, setShowMoreMore] = useState(false);
  const { user } = workDetail;
  const { photo, nickname, intro } = user ? user : {};
  const isShowMore = intro.split("\n").length > 10;
  const handleShowMore = () => {
    setShowMoreMore(!showMore);
  };
  return (
    <Container>
      <PhotoWrap>
        {photo ? <Photo src={photo} /> : <StyledUserIcon />}
      </PhotoWrap>
      <DetailWrap>
        <FollowingButton>跟隨</FollowingButton>
        <Nickname>{nickname}</Nickname>
        <Following>123 跟隨者</Following>
        <Intro showMore={showMore}>{intro}</Intro>
        {isShowMore && (
          <ShowMore onClick={handleShowMore}>
            {showMore ? "顯示部分" : "顯示全部"}
          </ShowMore>
        )}
      </DetailWrap>
    </Container>
  );
};

export default AuthorDetail;
