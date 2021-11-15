import styled from "styled-components";
import { useEffect, useState } from "react";
import pic5 from "../../images/pic5.jpg";
import pic4 from "../../images/pic4.jpg";
import pic3 from "../../images/pic3.jpg";
import pic2 from "../../images/pic2.jpg";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: #333;
  transition: margin-left 2s;
  &:first-child {
    margin-left: ${(props) => props.pos * -100}%;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 400px;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
`;

const RadioSection = styled.div`
  display: none;
`;

const LabelSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Label = styled.label`
  border: 2px solid #34495e;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => (props.checked ? "#34495E" : "transparent")};
  transition: background 0.5s;
  & + & {
    margin-left: 30px;
  }
  :hover {
    background: #34495e;
  }
`;

const Input = styled.input`
  &:checked {
  }
`;

const bannerData = [
  {
    picture: pic2,
  },
  {
    picture: pic3,
  },
  {
    picture: pic4,
  },
  {
    picture: pic5,
  },
];

const SiteBanner = () => {
  const [radio, setRadio] = useState(0);

  const debounce = (fn, delay = 5000) => {
    let timer = null;
    return (radio) => {
      clearInterval(timer);
      return new Promise((resolve) =>
        resolve(
          (timer = setInterval(() => {
            radio++;
            if (radio >= 4) {
              radio = 0;
            }
            fn(radio);
          }, delay))
        )
      );
    };
  };
  const changeRadio = debounce(setRadio);
  useEffect(() => {
    const timerId = changeRadio(radio);
    return () => {
      timerId.then((id) => {
        clearInterval(id);
      });
    };
  }, [radio, changeRadio]);
  return (
    <Container>
      <LabelSection>
        {bannerData.map((banner, index) => (
          <Label
            key={`label-${index}`}
            checked={radio === index ? 1 : 0}
            htmlFor={`radio-${index}`}
          />
        ))}
      </LabelSection>
      <RadioSection>
        {bannerData.map((banner, index) => (
          <Input
            key={`radio-${index}`}
            name="radio"
            type="radio"
            checked={index === radio}
            onChange={() => setRadio(index)}
            id={`radio-${index}`}
          />
        ))}
      </RadioSection>
      <ImageWrap>
        {bannerData.map((banner, index) => (
          <Image
            key={`img-${index}`}
            pos={index === 0 && radio}
            src={banner.picture}
          />
        ))}
      </ImageWrap>
    </Container>
  );
};

export default SiteBanner;
