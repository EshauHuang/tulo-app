import { useState, useEffect, useCallback } from "react";
import { getWorkDetail, getPictureURL } from "../global/webAPI";

const initialData = {
  title: "",
  type: "",
  intro: "",
  error: "",
};

const useWorkDetail = (paramsData) => {
  const { params } = paramsData;
  const [workDetail, setWorkDetail] = useState(initialData);
  const fetchWorkData = useCallback(async () => {
    const [pathName, workId, workType] = params;
    if (pathName === "work") {
      try {
        const data = await getWorkDetail(workId, workType);
        if (data.ok === 0) return;
        const { work } = data;
        const {
          title,
          intro,
          type,
          User,
          User: { photo },
        } = work;
        const { directory } = work[type.replace(/^./, type[0].toUpperCase())];
        const pictureURL = getPictureURL(directory);
        const photoURL = getPictureURL(photo);
        setWorkDetail((previous) => ({
          ...previous,
          title,
          type,
          intro,
          cover: pictureURL,
          user: {
            ...User,
            photo: photoURL,
          },
        }));
      } catch (err) {
        console.log(err);
      }
    }
  }, [params]);
  useEffect(() => {
    fetchWorkData();
    return () => setWorkDetail(initialData);
  }, [fetchWorkData]);

  return [workDetail, setWorkDetail];
};

export default useWorkDetail;
