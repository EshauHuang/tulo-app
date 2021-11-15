import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { signIn, getMe, getPictureURL, getUser } from "../global/webAPI";
import SignIn from "../components/SignIn";
import { UserContext } from "../global/contexts";

const Container = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
`;

export const SignInPage = () => {
  const { setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChangeValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = inputValue;
      if (!username || !password) {
        return setError("帳號或密碼不可空白");
      }
      let data = await signIn(inputValue);
      if (data.ok === 0) {
        return setError("帳號或密碼錯誤");
      }
      data = await getMe();
      if (data.ok === 0) {
        return setError("不可預期錯誤，請稍後再試");
      }
      data = await getUser(data.user.UserId);
      if (data.ok === 1) {
        const {
          user: { id, photo, nickname, intro, username },
        } = data;
        const pictureURL = await getPictureURL(photo);
        setUser({
          UserId: id,
          username,
          nickname,
          intro,
          photo: pictureURL,
        });
      }
      history.push("/");
    } catch (err) {
      return setError("不可預期錯誤，請稍後再試");
    }
  };
  useEffect(() => {
    return () => setError("");
  }, []);
  return (
    <Container>
      <SignIn
        events={{ handleSignIn, handleChangeValue }}
        value={inputValue}
        error={error}
      />
    </Container>
  );
};

export default SignInPage;
