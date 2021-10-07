import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListIcons } from "./Icons";
import { hoverLink } from "../../animates";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0px 12px;
  width: 100%;
  min-height: 45px;
  border-radius: 12px;
  box-shadow: ${(props) => props.hide && `0 5px 10px rgba(0, 0, 0, 0.2)`};
  ${hoverLink}
`;
const SiteName = styled.div`
  margin-left: 10px;
  overflow: hidden;
  font-size: ${(props) => props.theme.fs}rem;
  transition: max-width 0.4s ease;
  max-width: ${(props) => (props.hide ? 0 : 120)}px;
`;

const LinkWrap = styled(Link)`
  display: flex;
`;

const LinkSite = ({ name, hide }) => {
  return (
    <Container hide={hide}>
      <LinkWrap to={`${name}`}>
        <ListIcons name={name} />
        <SiteName hide={hide}>{name}</SiteName>
      </LinkWrap>
    </Container>
  );
};

export default LinkSite;
