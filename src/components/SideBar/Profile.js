import styled from "styled-components";
import ss from "../../images/photo.jpg";
import { LogOutIcon } from "./Icons";
import { hoverLink } from "../../animates";

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  transition: padding 0.4s ease;
  ${(props) =>
    props.hide &&
    `
      padding: 0px 10px;
  `}

  ${LogOutIcon} {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: right 0.4s ease-out, transform 0.2s ease-out;
    ${(props) =>
      props.hide &&
      `
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%);
    `}
  }
`;

const User = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  height: 68px;
  background-color: #2f3640;
  transition: height 0.4s ease;
  ${(props) =>
    props.hide &&
    `
    cursor: pointer;
    height: 45px;
    border-radius: 12px;
    ${hoverLink}
  `}
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  max-width: 133px;
  overflow: hidden;
  transition: max-width 0.4s ease;
  ${(props) =>
    props.hide &&
    `
    max-width: 0px;
  `}
`;

const DetailR = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 1rem;
`;

const Intro = styled.div`
  font-size: 0.7rem;
`;

const Photo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 12px;
`;

const Profile = ({ hide }) => {
  return (
    <Container hide={hide}>
      <User hide={hide}>
        <Detail hide={hide}>
          <Photo src={ss} />
          <DetailR>
            <Name>AAAAAA</Name>
            <Intro>ccccc</Intro>
          </DetailR>
          <LogOutIcon />
        </Detail>
      </User>
    </Container>
  );
};

export default Profile;
