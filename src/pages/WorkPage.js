import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useRef, useContext, useEffect, useState } from "react";

import WorkDetail from "../components/WorkDetail";
import PictureEditor from "../components/PictureEditor";
import PictureReader from "../components/PictureReader";
import AuthorDetail from "../components/AuthorDetail";

import usePictures from "../hooks/usePictures";
import useWorkDetail from "../hooks/useWorkDetail";
import useParams from "../hooks/useParams";
import { UserContext } from "../global/contexts";
import { newWork } from "../global/webAPI";
import { setNewFiles } from "../global/setNewFiles";
import { compressImage, dataURLtoBlob } from "../global/compressImage";

const Container = styled.div`
  position: relative;
  padding: 20px 20px 100px 20px;
  margin: 0 auto;
  width: 890px;
  min-width: 890px;
`;

const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
`;
const InputFile = styled.input`
  display: none;
`;

const SplitLine = styled.div`
  width: 100%;
  height: 40px;
  background: #222;
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
  z-index: 9;
`;

const Item = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  font-size: 1.2rem;
  height: 100%;
  padding: 5px;
  color: white;
  font-weight: bold;
  border-bottom: ${(props) => props.pagenow && "2px solid white"};
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
`;

const controlMode = (paramsData) => {
  const {
    params: [pathName],
  } = paramsData;
  if (pathName === "newWork") {
    return {
      pathName,
      active: "edit",
      headers: [{ name: "新增圖片", options: { as: "div" } }],
    };
  }
  if (pathName === "works") {
    return {
      pathName,
      active: "view",
      headers: [
        { name: "我的作品", options: { to: "/works" } },
        { name: "繪圖", options: { to: "?art" } },
        { name: "漫畫", options: { to: "?comic" } },
      ],
    };
  }
  if (pathName === "work") {
    return {
      pathName,
      active: "view",
      headers: [
        { name: "作品資訊", options: { as: "div" } },
        { name: "作者資訊", options: { as: "div" } },
        { name: "作品圖片", options: { as: "div" } },
      ],
    };
  }
};

const WorkPage = () => {
  const history = useHistory();
  const paramsData = useParams();
  const mode = controlMode(paramsData);
  const { user } = useContext(UserContext);
  const [workPage, setWorkPage] = useState(1);
  const [pictures, setPictures] = usePictures(paramsData, user, workPage);
  const [workDetail, setWorkDetail] = useWorkDetail(paramsData);
  const [page, setPage] = useState(0);
  const fileRef = useRef(null);
  const formRef = useRef(null);
  const itemId = useRef(0);
  const isShowMore = pictures.total > pictures.order.length;
  const handleSortStart = () => {
    document.body.style.cursor = "grabbing";
  };
  const handleSortEnd = ({ oldIndex, newIndex }) => {
    document.body.style.cursor = "default";
    setPictures(({ order, items }) => {
      const tmp = order[oldIndex];
      const newOrder = Array.from(order);
      newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, tmp);
      return {
        items: { ...items },
        order: newOrder,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, type, intro } = workDetail;
    if (!title || !type || !intro) {
      return setWorkDetail((previous) => ({
        ...previous,
        error: "輸入內容不可為空",
      }));
    }
    if (pictures.order.length === 0 || Object.keys(pictures.items).length === 0)
      return setWorkDetail((previous) => ({
        ...previous,
        error: "請放入圖片至少一張圖片",
      }));
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("intro", intro);
    await Promise.all(
      pictures.order.map(async (pictureId, index) => {
        const { file } = pictures.items[pictureId];
        const dataURL = await compressImage(file, 0.8, 0.8);
        const blob = dataURLtoBlob(dataURL);
        const newFile = new File([blob], `${index}.jpg`, {
          type: "image/jpeg",
        });
        formData.append("pictures", newFile);
        return newFile;
      })
    );

    const data = await newWork(formData);
    if (data.ok === 0) {
      alert("伺服器錯誤，請稍後再試！");
    }
    history.push("/");
  };

  const handleChangeFiles = (e) => {
    const { files } = e.target;
    if (files.length === 0) return;
    let newItems, newOrder;
    try {
      [newItems, newOrder] = setNewFiles(files, itemId);
      setPictures(({ items, order }) => ({
        items: { ...items, ...newItems },
        order: [...order, ...newOrder],
      }));
    } catch (err) {
      return alert(err);
    }
  };

  const handleRemove = (id) => {
    setPictures(({ items, order }) => {
      const newItems = Object.assign({}, items);
      delete newItems[id];
      const newOrder = Array.from(order).filter(
        (pictureId) => pictureId !== id
      );
      return {
        items: newItems,
        order: newOrder,
      };
    });
  };
  const handleUploadFiles = () => {
    fileRef.current.click();
  };

  const handleChangeValue = (e) => {
    setWorkDetail((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };
  const handleShowMore = async () => {
    if (isShowMore) {
      setWorkPage((previous) => previous + 1);
    }
  };
  useEffect(() => {
    return () => setPage(0);
  }, [paramsData.params]);
  useEffect(() => {
    return () => setWorkPage(1);
  }, [paramsData.params, paramsData.search]);
  useEffect(() => {
    itemId.current = pictures.order.length;
    fileRef.current.value = "";
  }, [pictures, paramsData.params]);
  return (
    <Container>
      <Form ref={formRef} encType="multipart/form-data" onSubmit={handleSubmit}>
        <InputFile
          type="file"
          name="pictures"
          accept="image/png, image/jpeg, image/gif"
          ref={fileRef}
          onChange={handleChangeFiles}
          multiple
        />
        {mode.pathName === "newWork" && (
          <>
            {user && (
              <>
                <Header>
                  {mode.headers.map((header, index) => (
                    <Item
                      key={index}
                      pagenow={page === index ? 1 : 0}
                      onClick={() => setPage(index)}
                      {...header.options}
                    >
                      {header.name}
                    </Item>
                  ))}
                </Header>
                <PictureEditor
                  pictures={pictures}
                  handleRemove={handleRemove}
                  handleUploadFiles={handleUploadFiles}
                  onSortStart={handleSortStart}
                  onSortEnd={handleSortEnd}
                  handleShowMore={handleShowMore}
                  distance={1}
                  mode={mode}
                  axis="xy"
                  page={page}
                />
                <SplitLine />
                <WorkDetail
                  mode={mode}
                  workDetail={workDetail}
                  handleChangeValue={handleChangeValue}
                  page={page}
                  setPage={setPage}
                />
              </>
            )}
          </>
        )}
        {mode.pathName === "work" && (
          <>
            <Header>
              {mode.headers.map((header, index) => (
                <Item
                  key={index}
                  pagenow={page === index ? 1 : 0}
                  onClick={() => setPage(index)}
                  {...header.options}
                >
                  {header.name}
                </Item>
              ))}
            </Header>
            {page === 0 && (
              <WorkDetail
                mode={mode}
                workDetail={workDetail}
                handleChangeValue={handleChangeValue}
                page={page}
                setPage={setPage}
              />
            )}
            {page === 1 && <AuthorDetail workDetail={workDetail} />}
            {page === 2 && (
              <PictureReader
                pictures={pictures}
                workDetail={workDetail}
                setWorkDetail={setWorkDetail}
                setPage={setPage}
              />
            )}
          </>
        )}
        {mode.pathName === "works" && (
          <>
            {user && (
              <>
                <Header>
                  {mode.headers.map((header, index) => (
                    <Item
                      key={index}
                      pagenow={page === index ? 1 : 0}
                      onClick={() => setPage(index)}
                      {...header.options}
                    >
                      {header.name}
                    </Item>
                  ))}
                </Header>
                <PictureEditor
                  pictures={pictures}
                  handleRemove={handleRemove}
                  handleUploadFiles={handleUploadFiles}
                  onSortStart={handleSortStart}
                  onSortEnd={handleSortEnd}
                  handleShowMore={handleShowMore}
                  isShowMore={isShowMore}
                  distance={1}
                  mode={mode}
                  axis="xy"
                  page={page}
                />
              </>
            )}
          </>
        )}
      </Form>
    </Container>
  );
};

export default WorkPage;
