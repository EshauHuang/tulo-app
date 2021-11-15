import { useState, useEffect } from "react";

const initialData = {
  currentTop: 0,
  currentLeft: 0,
  size: 0,
};

const useCropBox = (photoRef, photo) => {
  const [cropBox, setCropBox] = useState(initialData);

  useEffect(() => {
    if (!photoRef.current) return;
    const width = photoRef.current.width;
    const height = photoRef.current.height;
    if (height < width) {
      setCropBox((previous) => ({
        ...previous,
        size: height,
        direction: "WE",
        maxLeft: width - height,
      }));
    } else {
      setCropBox((previous) => ({
        ...previous,
        size: width,
        direction: "NS",
        maxTop: height - width,
      }));
    }
    return () => setCropBox(initialData);
  }, [photoRef, photo]);

  return [cropBox, setCropBox];
};

export default useCropBox;
