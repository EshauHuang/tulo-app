import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListIcons } from "./Icons";
import { hoverLink } from "../../global/animations";

const Container = styled(Link)`
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
  white-space: nowrap;
  transition: max-width 0.4s ease;
  max-width: ${(props) => (props.hide ? 0 : 120)}px;
  font-size: 1.8rem;
`;

const Wrap = styled.div`
  display: flex;
`;

const SiteLink = ({ item, hide }) => {
  return (
    <Container hide={hide} to={`/${item.nameEn.toLowerCase()}`}>
      <Wrap>
        <ListIcons name={item.nameEn} />
        <SiteName hide={hide}>{item.nameCh}</SiteName>
      </Wrap>
    </Container>
  );
};

export default SiteLink;
