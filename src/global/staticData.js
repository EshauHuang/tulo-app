export const headerData = (pathName) => {
  switch (pathName) {
    case "works":
      return {
        pictureListHeader: [
          {
            name: "所有作品",
            state: "all",
          },
          {
            name: "插圖",
            state: "art",
          },
          {
            name: "漫畫",
            state: "comic",
          },
        ],
      };
    case "work":
      return {
        pictureListHeader: [
          {
            name: "作品圖片",
          },
        ],
        workDetailHeader: [
          {
            name: "作品資訊",
          },
        ],
      };
    case "newWork":
      return {
        pictureListHeader: [
          {
            name: "新增圖片",
          },
        ],
        workDetailHeader: [
          {
            name: "作品資訊",
          },
        ],
      };
    case "user":
      return {
        userHeader: [
          {
            name: "個人資料",
          },
        ],
      };
    default:
  }
};

export const typeNameData = {
  art: "繪圖",
  comic: "漫畫",
};
