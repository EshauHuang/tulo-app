export const checkFile = (file) => {
  const parts = file.name.split(".");
  const ext = parts[parts.length - 1];
  switch (ext.toLowerCase()) {
    case "jpg":
    case "jpeg":
    case "jfif":
    case "png":
    case "gif":
      return true;
    default:
      return false;
  }
};

export const setNewFiles = (files, itemId) => {
  let ErrorItemsName = [];
  const newOrder = [];
  const newItems = Object.keys(files).reduce((obj, index) => {
    const file = files[index];

    if (!checkFile(file)) {
      ErrorItemsName.push(file.name);
    }
    itemId.current++;
    obj[itemId.current] = {
      url: URL.createObjectURL(files[index]),
      file: files[index],
    };
    newOrder.push(itemId.current);
    return obj;
  }, {});
  if (ErrorItemsName.length !== 0) {
    throw Error(`${ErrorItemsName.join()}: 不支援此格式，請上傳:JPEG/PNG/GIF`);
  }
  return [newItems, newOrder];
};
