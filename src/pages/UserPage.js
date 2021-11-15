import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";

import PhotoCrop from "../components/PhotoCrop";
import UserDetail from "../components/UserDetail";

import useParams from "../hooks/useParams";
import useCropBox from "../hooks/useCropBox";
import useUserDetail from "../hooks/useUserDetail";
import { UserContext } from "../global/contexts";
import { postUserPhoto, getPictureURL, editUserDetail } from "../global/webAPI";
import { compressImage, dataURLtoBlob } from "../global/compressImage";

const Container = styled.div`
  padding-top: 100px;
  width: 100%;

  :before {
    ${(props) =>
      props.photo &&
      `
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.1);
    z-index: 5;
  `}
  }
`;

const InputFile = styled.input`
  display: none;
`;

const UserPage = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const { params } = useParams();
  const fileRef = useRef(null);
  const photoRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [userDetail, setUserDetail] = useUserDetail(user.UserId);
  const [photo, setPhoto] = useState(null);
  const [cropBox, setCropBox] = useCropBox(photoRef, photo);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { input } = userDetail;
    const data = await editUserDetail(input);
    if (data.ok === 0) {
      alert("伺服器錯誤，請稍後再試！");
    }
    history.go(0);
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    const img = photoRef.current;
    const { width, height } = photoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = cropBox.size;
    canvas.height = cropBox.size;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      img,
      -cropBox.currentLeft,
      -cropBox.currentTop,
      width,
      height
    );
    const dataURL = canvas.toDataURL("image/jpeg");
    const formData = new FormData();
    const type = "user-photo";
    formData.append("type", type);
    const blob = dataURLtoBlob(dataURL);
    const newFile = new File([blob], `0.jpg`, {
      type: "image/jpeg",
    });
    formData.append("photo", newFile);
    const data = await postUserPhoto(formData);
    if (data.ok === 1) {
      const { photo } = data;
      const pictureURL = getPictureURL(photo);
      setUser((previous) => ({
        ...previous,
        photo: pictureURL,
      }));
    }
    history.go(0);
  };
  const handleClose = () => {
    setPhoto(null);
  };

  const handleChangeFiles = async (e) => {
    const { files } = e.target;
    if (files.length === 0) return;
    const data = await compressImage(files[0], 1000, 1);
    setPhoto(data);
  };

  const handleChangePhoto = () => {
    fileRef.current.click();
  };

  const handleChangeValue = (e) => {
    setUserDetail((previous) => ({
      ...previous,
      input: {
        ...previous.input,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleRecoverValue = () => {
    setEdit(!edit);
    setUserDetail((previous) => ({
      ...previous,
      input: {
        ...previous.origin,
      },
    }));
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }, [params, photo]);
  return (
    <Container photo={photo}>
      <InputFile
        type="file"
        name="picture"
        accept="image/png, image/jpeg, image/gif"
        ref={fileRef}
        onChange={handleChangeFiles}
      />
      {photo && (
        <PhotoCrop
          photoRef={photoRef}
          photo={photo}
          cropBox={cropBox}
          setCropBox={setCropBox}
          handleSubmitPhoto={handleSubmitPhoto}
          handleClose={handleClose}
        />
      )}
      {userDetail && (
        <UserDetail
          userDetail={userDetail}
          handleChangePhoto={handleChangePhoto}
          handleChangeValue={handleChangeValue}
          handleRecoverValue={handleRecoverValue}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
          edit={edit}
        />
      )}
    </Container>
  );
};

export default UserPage;
