import { useState, useEffect, useCallback } from "react";
import { getWorkDirectory, getFilesName } from "../global/webAPI";
import { getUserWorks, getPictureURL } from "../global/webAPI";

const initialData = {
  items: {},
  order: [],
};

const usePictures = (paramsData, user, workPage) => {
  const { params, search } = paramsData;
  const [pictures, setPictures] = useState(initialData);
  const fetchWorkPictures = useCallback(async () => {
    try {
      const [pathName, workId, type] = params;
      if (pathName === "work" && type && workId) {
        let data = await getWorkDirectory(workId, type);
        if (data.ok === 0) return;
        const { directory } = data[type];
        data = await getFilesName(directory);
        if (data.ok === 0) return;
        let { files } = data;
        const newItems = files.reduce((obj, name) => {
          const index = Number(name.split(".")[0]);
          const pictureURL = getPictureURL(directory, index);
          obj[index] = {
            file: {},
            url: pictureURL,
          };
          return obj;
        }, {});
        setPictures({
          items: newItems,
          order: files.map((name) => Number(name.split(".")[0])),
        });
      }
    } catch {
      setPictures(initialData);
    }
  }, [params]);

  const fetchWorks = useCallback(async () => {
    try {
      const [pathName] = params;
      if (
        workPage === 1 &&
        user &&
        pathName === "works" &&
        params.length === 1
      ) {
        const data = await getUserWorks(user.UserId, search);
        if (data.ok === 0) return;
        const {
          count,
          user: { works },
        } = data;
        if (works.length === 0) return;
        const order = works.map((work) => work.id);
        const items = works.reduce((obj, work) => {
          const { type } = work;
          const { directory } = work[type.replace(/^./, type[0].toUpperCase())];
          const pictureURL = getPictureURL(directory);
          const { id, ...file } = work;
          obj[id] = {
            file,
            url: pictureURL,
          };
          return obj;
        }, {});
        setPictures({
          items,
          order,
          total: count,
        });
      }
    } catch (err) {
      setPictures(initialData);
    }
  }, [user, params, search, workPage]);

  const fetchMoreWorks = useCallback(async () => {
    try {
      const { items, order } = pictures;
      const [pathName] = params;
      if (workPage > 1 && user && pathName === "works" && params.length === 1) {
        const data = await getUserWorks(user.UserId, search, workPage);
        if (data.ok === 0) return;
        const {
          count,
          user: { works },
        } = data;
        if (works.length === 0) return;
        const files = works.map((work) => work.id);
        const newOrder = order.concat(files);
        let newItems = works.reduce((obj, work) => {
          const { type } = work;
          const { directory } = work[type.replace(/^./, type[0].toUpperCase())];
          const pictureURL = getPictureURL(directory);
          const { id, ...file } = work;
          obj[id] = {
            file,
            url: pictureURL,
          };
          return obj;
        }, {});
        newItems = Object.assign(items, newItems);
        setPictures(() => ({
          items: newItems,
          order: newOrder,
          total: count,
        }));
      }
    } catch (err) {
      setPictures(initialData);
    }
  }, [user, workPage, search, params]);
  useEffect(() => {
    fetchWorkPictures();
    fetchWorks();
    fetchMoreWorks();
    return setPictures(initialData);
  }, [fetchWorkPictures, fetchWorks, fetchMoreWorks]);

  return [pictures, setPictures];
};

export default usePictures;
