import styled from "styled-components";
import pic1 from "../../images/pic1.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const SiteImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const SiteHeader = () => {
  return (
    <Container>
      <SiteImage src={pic1} />
    </Container>
  );
};

export default SiteHeader;
