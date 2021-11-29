import styled from "styled-components";
import { Link } from "react-router-dom";

import { User as UserIcon } from "@styled-icons/feather";

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  & {
    margin-top: 20px;
  }
  &:not(:nth-child(5n - 4)) {
    margin-left: 30px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  :hover {
    :before {
      content: "";
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #333;
  border-radius: 4px;
`;

const WorkDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 52px;
  background: transparent;
  box-sizing: border-box;
  font-size: 1.3rem;
  color: ${(props) => props.theme.fc};
`;

const WorkTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  max-width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const AuthorDetail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const AuthorPhoto = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #222;
  object-fit: cover;
`;

const AuthorName = styled.div`
  margin-left: 5px;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StyledUserIcon = styled(UserIcon)`
  box-sizing: border-box;
  padding: 3px;
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 12px;
  background: #485460;
  color: white;
  border-radius: 12px;
`;

const Work = ({ work }) => {
  const { title, nickname, photo, cover } = work;
  return (
    <Container to={`/work/${work.id}/${work.type}`}>
      <ImageWrap>
        <Image src={cover} />
      </ImageWrap>
      <WorkDetail>
        <WorkTitle>{title}</WorkTitle>
        <AuthorDetail>
          {photo ? <AuthorPhoto src={photo} /> : <StyledUserIcon />}
          <AuthorName>{nickname}</AuthorName>
        </AuthorDetail>
      </WorkDetail>
    </Container>
  );
};

export default Work;
