export const dataURLtoBlob = (dataURL) => {
  const [, mimeTypeString, byteString] = dataURL.match(
    /^data:(.*);base64,(.*)/
  );
  const buf = Buffer.from(byteString, "base64");
  const blob = new Blob([buf], { type: mimeTypeString });
  return blob;
};

export const compressImage = (file, size = 1, quality = 1) => {
  const img = new Image();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  img.src = URL.createObjectURL(file);
  return new Promise(
    (resolve) =>
      (img.onload = () => {
        const AspectRatio = img.naturalWidth / img.naturalHeight;
        if (
          size > 1 &&
          (img.naturalWidth >= 1000 || img.naturalHeight >= 1000)
        ) {
          if (AspectRatio < 1) {
            const ratio = size / img.naturalHeight;
            canvas.height = size;
            canvas.width = img.naturalWidth * ratio;
          } else {
            const ratio = size / img.naturalWidth;
            canvas.width = size;
            canvas.height = img.naturalHeight * ratio;
          }
        } else {
          if (size > 1) {
            size = 1;
          }
          canvas.width = img.naturalWidth * size;
          canvas.height = img.naturalHeight * size;
        }

        ctx.drawImage(
          img,
          0,
          0,
          img.naturalWidth,
          img.naturalHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const dataURL = canvas.toDataURL("image/jpeg", quality);
        URL.revokeObjectURL(file);
        resolve(dataURL);
      })
  );
};
