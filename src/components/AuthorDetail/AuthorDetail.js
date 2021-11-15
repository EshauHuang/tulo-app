import styled from "styled-components";
import { User as UserIcon } from "@styled-icons/feather";

const Container = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 890px;
  max-width: 890px;
  padding: 40px 40px 15px 40px;
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
  margin-top: 20px;
  width: 120px;
  height: 120px;
  background: #333;
`;

const DetailWrap = styled.div`
  position: relative;
  flex: 1;
  margin-top: 20px;
  margin-left: 40px;
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
  font-size: 1.6rem;
  color: #666666;
  margin-top: 10px;
`;

const Intro = styled.div`
  font-size: 1.4rem;
  color: #ccc;
  margin-top: 10px;
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

const AuthorDetail = ({ workDetail }) => {
  const { user } = workDetail;
  const { photo, nickname, intro } = user ? user : {};
  return (
    <Container>
      <PhotoWrap>
        {photo ? <Photo src={photo} /> : <StyledUserIcon />}
      </PhotoWrap>
      <DetailWrap>
        <FollowingButton>跟隨</FollowingButton>
        <Nickname>{nickname}</Nickname>
        <Following>123 跟隨者</Following>
        <Intro>{intro}</Intro>
      </DetailWrap>
    </Container>
  );
};

export default AuthorDetail;
