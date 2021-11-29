import styled from "styled-components";
import { Link } from "react-router-dom";

import { SignOutIcon, SignInIcon } from "./Icons";
import { User as UserIcon } from "@styled-icons/feather";

import { hoverLink } from "../../global/animations";

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  padding: 10px;
  left: 0;
  bottom: 0;
  transition: background-color 0.4s ease;
  background-color: ${(props) => (props.hide ? "#222" : "#333")};
  ${SignOutIcon} {
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
  ${SignInIcon} {
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
  ${(props) =>
    props.hide &&
    `
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: #;
    cursor: pointer;
    border-radius: 12px;
    ${hoverLink}
  `}
`;

const Detail = styled.div`
  max-width: 170px;
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
  font-size: 1.3rem;
  max-width: 100px;
  min-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Intro = styled.div`
  font-size: 1rem;
  max-width: 100px;
  min-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoSignIn = styled.div`
  font-size: 1.3rem;
  min-width: 64px;
  color: white;
  :hover {
    color: white;
  }
`;

const Photo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 12px;
`;

const StyledUserIcon = styled(UserIcon)`
  box-sizing: border-box;
  padding: 10px;
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 12px;
  background: #485460;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Profile = ({ hide, user, onClick }) => {
  console.log(user);
  return (
    <Container hide={hide}>
      <User hide={hide}>
        <Detail hide={hide}>
          <StyledLink to={user ? (hide ? "/signOut" : "/user") : "/signIn"}>
            {user ? (
              user.photo ? (
                <Photo src={user.photo} />
              ) : (
                <StyledUserIcon />
              )
            ) : (
              <StyledUserIcon />
            )}
            <DetailR>
              {user ? (
                <>
                  <Name>{user.nickname}</Name>
                  <Intro>{user.intro}</Intro>
                </>
              ) : (
                <NoSignIn>尚未登入</NoSignIn>
              )}
            </DetailR>
          </StyledLink>
          <Link to={user ? "/#" : "/signIn"}>
            {user ? <SignOutIcon onClick={onClick} /> : <SignInIcon />}
          </Link>
        </Detail>
      </User>
    </Container>
  );
};

export default Profile;
