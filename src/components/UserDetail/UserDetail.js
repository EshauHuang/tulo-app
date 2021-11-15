import styled from "styled-components";
import { User as UserIcon } from "@styled-icons/feather";
import { AddToPhotos as AddToPhotosIcon } from "@styled-icons/material-sharp";

const Container = styled.form`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 800px;
  padding: 40px 40px 15px 40px;
  margin: 0 auto;
  border: 0;
  background: #222;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: flex-end;
  min-height: 42px;
  padding: 10px;
  background: #333;
  color: white;
  font-size: 1.3rem;
  border-radius: 4px;
  margin-left: 20px;
`;

const InputContent = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 42px;
  padding: 0px 10px;
  color: white;
  background: #333;
  font-size: 1.3rem;
  border-radius: 4px;
  margin-left: 20px;
  border: 0;
  outline: none;
  :hover,
  :focus {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const InputIntro = styled.textarea`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px;
  background: #333;
  border-radius: 4px;
  color: white;
  height: 110px;
  font-size: 1.3rem;
  word-break: break-word;
  margin-left: 20px;
  outline: none;
  border: 0;
  resize: none;
  border-radius: 4px;
  ::placeholder {
    font-size: 1.2rem;
  }
  :hover,
  :focus {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Intro = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px;
  background: #333;
  border-radius: 4px;
  color: white;
  height: 110px;
  font-size: 1.3rem;
  word-break: break-word;
  margin-left: 20px;
  border-radius: 4px;
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

const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  background: #282f34;
  padding: 0px 5px;
  border-radius: 4px;
`;

const ContentWrap = styled.div`
  display: flex;
  & + & {
    margin-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  height: 40px;
  background: #333;
  padding: 0px 10px;
  border: 0;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
  & + & {
    margin-left: 10px;
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 12px;
`;

const PhotoWrap = styled.div`
  margin-top: 20px;
  position: relative;
  height: 120px;
  cursor: pointer;
`;

const DetailWrap = styled.div`
  flex: 1;
  margin-top: 20px;
  margin-left: 40px;
`;

const StyledUserIcon = styled(UserIcon)`
  box-sizing: border-box;
  padding: 10px;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  background: #485460;
  color: white;
  border-radius: 12px;
`;

const StyledAddToPhotosIcon = styled(AddToPhotosIcon)`
  box-sizing: border-box;
  padding: 8px;
  width: 35px;
  position: absolute;
  bottom: 0;
  background: #0747a6;
  color: white;
  border-radius: 50%;
  transform: translate(-25%, 25%);
  cursor: pointer;
`;

const UserDetail = ({
  userDetail,
  handleChangePhoto,
  handleChangeValue,
  handleSubmit,
  handleRecoverValue,
  handleEdit,
  edit,
}) => {
  const { origin: originDetail, input: inputDetail } = userDetail;

  return (
    <Container onSubmit={handleSubmit}>
      <Header>
        <Item>個人資料</Item>
      </Header>
      <PhotoWrap onClick={handleChangePhoto}>
        <StyledAddToPhotosIcon />
        {originDetail.photo ? (
          <Photo src={originDetail.photo} />
        ) : (
          <StyledUserIcon />
        )}
      </PhotoWrap>
      <DetailWrap>
        <ContentWrap>
          <Title>帳號</Title>
          <Content>{originDetail.username}</Content>
        </ContentWrap>
        <ContentWrap>
          <Title>暱稱</Title>
          {edit ? (
            <InputContent
              name="nickname"
              value={inputDetail.nickname}
              onChange={handleChangeValue}
            />
          ) : (
            <Content>{originDetail.nickname}</Content>
          )}
        </ContentWrap>
        <ContentWrap>
          <Title>自介</Title>
          {edit ? (
            <InputIntro
              name="intro"
              onChange={handleChangeValue}
              value={!inputDetail.intro ? "" : inputDetail.intro}
              placeholder="輸入自我介紹..."
            />
          ) : (
            <Intro>{originDetail.intro}</Intro>
          )}
        </ContentWrap>
        <ButtonWrap>
          {edit ? (
            <>
              <Button onClick={handleRecoverValue} type="button">
                取消
              </Button>
              <Button type="submit">儲存</Button>
            </>
          ) : (
            <Button onClick={handleEdit} type="button">
              編輯
            </Button>
          )}
        </ButtonWrap>
      </DetailWrap>
    </Container>
  );
};

export default UserDetail;
