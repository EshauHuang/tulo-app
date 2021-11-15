import styled from "styled-components";
import { useRef, useEffect } from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 20px;
  padding-top: 40px;
  background: #222;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 10px 0px;
  height: 40px;
  width: 100%;
  padding: 10px;
  outline: none;
  background: transparent;
  border-radius: 4px;
  border: 2px solid rgb(187, 187, 187, 0.2);
  color: white;
  font-size: 1.3rem;
  ::placeholder {
    color: #bbb;
    font-size: 1.2rem;
  }
`;

const Select = styled.select`
  box-sizing: border-box;
  margin: 10px 0px;
  height: 40px;
  width: 100%;
  padding: 0px 8px;
  outline: none;
  border-radius: 4px;
  border: 2px solid rgb(187, 187, 187, 0.2);
  background: transparent;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  font-size: 1.2rem;
`;

const Option = styled.option`
  background: #333;
  color: white;
  font-size: 1.2rem;
`;

const WorkIntro = styled.textarea`
  box-sizing: border-box;
  margin: 10px 0px;
  width: 100%;
  padding: 10px;
  outline: none;
  background: transparent;
  border-radius: 4px;
  border: 2px solid rgb(187, 187, 187, 0.2);
  color: white;
  height: 160px;
  resize: none;
  font-size: 1.3rem;
  ::placeholder {
    color: #bbb;
    font-size: 1.2rem;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;

const Button = styled.button`
  box-sizing: border-box;
  padding: 10px;
  width: 60px;
  background: #333;
  font-size: 1.3rem;
  border: 0;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
`;

const Header = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 0px 22px;
  background: #172b4d;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Item = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-size: 1.2rem;
  height: 100%;
  padding: 5px;
  color: white;
  font-weight: bold;
  border-bottom: 2px solid white;
`;

const InputWorkDetail = ({
  mode,
  handleChangeValue,
  workDetail,
  workDetailHeader,
}) => {
  const { title, type, intro, error } = workDetail;
  const selectRef = useRef(null);
  useEffect(() => {
    if (!selectRef.current) return;
    const { children } = selectRef.current;
    const target = Object.keys(children).filter(
      (index) => children[index].value === type
    )[0];
    selectRef.current.selectedIndex = target;
  }, [type]);

  return (
    <Container type={mode.active}>
      <Header>
        {workDetailHeader.map((header, index) => (
          <Item key={index}>{header.name}</Item>
        ))}
      </Header>
      <Input
        name="title"
        value={title}
        placeholder="請輸入作品標題"
        onChange={handleChangeValue}
      />
      <Select
        onChange={handleChangeValue}
        ref={selectRef}
        color={type ? "white" : "#bbb"}
        name="type"
      >
        <Option value="">請選擇作品類型</Option>
        <Option value="art">繪圖</Option>
        <Option value="comic">漫畫</Option>
      </Select>
      <WorkIntro
        placeholder="介紹你的作品..."
        value={intro}
        name="intro"
        onChange={handleChangeValue}
        maxLength="400"
      />
      <ErrorMessage>{error}</ErrorMessage>
      <ButtonWrap>
        <Button type="submit">送出</Button>
      </ButtonWrap>
    </Container>
  );
};

export default InputWorkDetail;
