import styled from "styled-components";

import CropBox from "./CropBox";

const Container = styled.form`
  display: flex;
  position: fixed;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10vh auto;
  width: 450px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  background: #333;
  border-radius: 6px;
  z-index: 10;
  border: 1px solid #30363d;
`;

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: #161b22;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #ccc;
  border-bottom: 1px solid #30363d;
`;

const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 16px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 4px;
  :after,
  :before {
    content: "";
    position: absolute;
    width: 1px;
    height: 13px;
    background: #ccc;
    top: 50%;
    left: 50%;
  }
  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  :hover {
    :after,
    :before {
      background: #0065ff;
    }
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  max-height: 400px;
  overflow: auto;
  user-select: none;
  padding: 16px;
  border-bottom: 1px solid #30363d;
`;

const Photo = styled.img`
  box-sizing: border-box;
  position: relative;
  object-fit: cover;
  max-width: 100%;
  max-height: 560px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  background: #1d5c4d;
  font-size: 1.2rem;
  border: 0;
  color: white;
  letter-spacing: 1rem;
  text-indent: 1rem;
  cursor: pointer;
  :hover {
    background: #1c6553;
  }
`;

const Footer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background: #242424;
`;

const PhotoCrop = ({
  photoRef,
  photo,
  cropBox,
  setCropBox,
  handleSubmitPhoto,
  handleClose,
}) => {
  return (
    <Container onSubmit={handleSubmitPhoto}>
      <Header>
        裁切圖片
        <Close onClick={handleClose} />
      </Header>
      <PhotoWrap>
        <Photo ref={photoRef} src={photo} />
        <CropBox
          cropBox={cropBox}
          setCropBox={setCropBox}
          photoRef={photoRef}
          photo={photo}
        />
      </PhotoWrap>
      <Footer>
        <Button>儲存照片</Button>
      </Footer>
    </Container>
  );
};

export default PhotoCrop;
