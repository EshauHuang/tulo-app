import styled from "styled-components";
import { UsernameIcon, PasswordIcon, DropletIcon } from "./Icons";

const inputData = {
  username: {
    type: "text",
    placeholder: "Email ID",
    name: "username",
    icon: <UsernameIcon />,
  },
  password: {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <PasswordIcon />,
  },
  nickname: {
    type: "text",
    placeholder: "Nickname",
    name: "nickname",
    icon: <DropletIcon />,
  },
};

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  background: #333;
  border: 0;
  & + & {
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  flex: 1;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
  padding: 0px 15px;
  background: #66666699;
  border: 0;
  outline: none;
  ::placeholder {
    color: #c9c9c9;
    letter-spacing: 2.2px;
  }
`;

const Input = ({ name, value, onChange }) => {
  const inputDetail = inputData[name];
  const { placeholder, type, icon } = inputDetail;
  return (
    <InputWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <StyledInput
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </InputWrapper>
  );
};

export default Input;
