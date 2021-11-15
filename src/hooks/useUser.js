import { useState, useEffect, useCallback } from "react";
import { getMe, getUser, getPictureURL } from "../global/webAPI";

const useUser = (paramsData) => {
  const [user, setUser] = useState(null);
  const fetchMyData = useCallback(async () => {
    try {
      let data = await getMe();
      if (data.ok === 1) {
        data = await getUser(data.user.UserId);
        if (data.ok === 1) {
          const {
            user: { id, photo, nickname, intro, username },
          } = data;
          const pictureURL = await getPictureURL(photo);
          setUser({
            UserId: id,
            username,
            nickname,
            intro,
            photo: pictureURL,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchMyData();
  }, [fetchMyData]);

  return [user, setUser];
};

export default useUser;
