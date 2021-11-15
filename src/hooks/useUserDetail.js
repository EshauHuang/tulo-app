import { useState, useEffect, useCallback } from "react";
import { getUser, getPictureURL } from "../global/webAPI";

const useUserDetail = (userId) => {
  const [userDetail, setUserDetail] = useState(null);

  const fetchUserData = useCallback(async () => {
    const data = await getUser(userId);
    if (!data.ok) return;
    const {
      user: { username, nickname, intro, photo },
    } = data;
    const pictureURL = getPictureURL(photo);
    setUserDetail({
      origin: {
        username,
        nickname,
        intro,
        photo: pictureURL,
      },
      input: {
        nickname,
        intro,
      },
    });
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return [userDetail, setUserDetail];
};

export default useUserDetail;
