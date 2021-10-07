import styled from "styled-components";
import { SearchIcon } from "./Icons";

const StyledInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  padding-right: 20px;
  padding-left: 40px;
  font-size: ${(props) => props.theme.fs * 1.5};
  ::placeholder {
    color: #718093;
  }

  ${(props) =>
    props.hide
      ? `
      opacity: 0;
      visibility: hidden;
      padding-left: 0px;
      pointer-events: none;
      opacity: 1;
    `
      : `
      background-color: ${props.theme.searchBg};
    `}
`;

const Input = ({ hide }) => {
  return (
    <StyledInput
      hide={hide}
      type="text"
      placeholder={hide ? "" : "Searching..."}
      className="hide"
    />
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 45px;
  width: 100%;
  margin-top: 40px;
  padding: 0px 12px;
  border-radius: 12px;
  transition: background-color 0.3s ease;
  ${(props) =>
    props.hide &&
    `
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: ${props.theme.fc};
        cursor: pointer;
        * {
          color: black;
        }
      }
    `}
`;

const Search = ({ hide, handleShowBar }) => {
  return (
    <Container hide={hide} onClick={hide ? handleShowBar : null}>
      <SearchIcon hide={hide} />
      <Input hide={hide} />
    </Container>
  );
};

export default Search;
