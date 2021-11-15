import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { signUp } from "../global/webAPI";
import SignUp from "../components/SignUp";
import { UserContext } from "../global/contexts";

const Container = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
`;

const SignUpPage = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    nickname: "",
  });

  const [error, setError] = useState("");
  const handleChangeValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, nickname, password } = inputValue;
      if (!username || !password || !nickname) {
        return setError("帳號、密碼及暱稱不可空白");
      }
      const data = await signUp(inputValue);
      if (data.ok === 0) {
        return setError("帳號重複，請換一組帳號");
      }
      setUser({ ...data.user });
      history.push("/");
    } catch (err) {
      console.log(err);
      return setError("不可預期錯誤，請稍後再試");
    }
  };
  useEffect(() => {
    return () => setError("");
  }, []);

  return (
    <Container>
      <SignUp
        events={{ handleSubmit, handleChangeValue }}
        value={inputValue}
        error={error}
      />
    </Container>
  );
};

export default SignUpPage;
