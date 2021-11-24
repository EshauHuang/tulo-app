import { Link } from "react-router-dom";
import styled from "styled-components";

import Input from "../Input";

import { HeadIcon } from "./Icons";

const Container = styled.form`
  position: relative;
  box-sizing: border-box;
  width: 420px;
  height: 370px;
  padding: 40px 50px;
  margin: 0 auto;
  border: 0;
  background: #222;
  border-radius: 45px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #0747a6;
  border: 0;
  border-radius: 50%;
`;

const LoginBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0;
  width: 100%;
  height: 100%;
`;

const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  position: relative;
  top: 40px;
  width: 100%;
  height: 60px;
  background: rgb(34, 34, 34);
  background: linear-gradient(
    0deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(34, 34, 34, 0.6450418653434882) 72%,
    rgba(34, 34, 34, 0.3936452172987954) 86%,
    rgba(34, 34, 34, 0.10593572009209151) 96%
  );
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 0;
  :hover {
    cursor: pointer;
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 85%;
  font-size: 1rem;
  color: red;
  white-space: nowrap;
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Message = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 95%;
  font-size: 1rem;
  color: #9e9e9e;
`;

const SignUp = ({ events, value, error }) => {
  const { handleSubmit, handleChangeValue } = events;
  const { username, password, nickname } = value;

  return (
    <Container onSubmit={handleSubmit}>
      <Header>
        <HeadIcon />
      </Header>
      <LoginBody>
        <Input onChange={handleChangeValue} value={nickname} name="nickname" />
        <Input onChange={handleChangeValue} value={username} name="username" />
        <Input onChange={handleChangeValue} value={password} name="password" />
        <ErrorMessage>{error}</ErrorMessage>
        <Message>
          已經有帳號了？
          <Link to="signIn">我要登入</Link>
        </Message>
      </LoginBody>
      <SignUpButton type="submit">Sign Up</SignUpButton>
    </Container>
  );
};

export default SignUp;
