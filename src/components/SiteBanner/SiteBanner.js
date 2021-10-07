import styled from "styled-components";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";

const Image3 = styled.img``;

const Image4 = styled.img``;

const Image5 = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 400px;
`;

const Input = styled.input``;

const SiteBanner = () => {
  return (
    <Container>
      <Input type="radio" name="radio-btn" id="radio1" />
      <Input type="radio" name="radio-btn" id="radio2" />
      <Input type="radio" name="radio-btn" id="radio3" />
      <Input type="radio" name="radio-btn" id="radio4" />
      {/* <ImageWrap>
        <Image3 src={pic3} />
      </ImageWrap>
      <ImageWrap>
        <Image4 src={pic4} />
      </ImageWrap> */}
      <ImageWrap>
        <Image5 src={pic5} />
      </ImageWrap>
    </Container>
  );
};

export default SiteBanner;
