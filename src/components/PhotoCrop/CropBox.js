import styled from "styled-components";
import { useRef, useEffect } from "react";

const Box = styled.div`
  position: absolute;
  box-sizing: border-box;
  background: white;
  cursor: move;
  margin-left: 16px;
  margin-top: 16px;
  top: ${(props) => props.cropBox.currentTop}px;
  left: ${(props) => props.cropBox.currentLeft}px;
  width: ${(props) => props.cropBox.size}px;
  height: ${(props) => props.cropBox.size}px;
  background: transparent;
  border-radius: 50%;
  border: 1px dashed white;
  z-index: 100;
  box-shadow: 0 0 0 4000px rgb(0 0 0 / 30%);
`;

const CropBox = ({ cropBox, setCropBox }) => {
  const mouseStart = useRef(null);
  const handleCropBoxStart = (e) => {
    mouseStart.current = {
      startX: e.pageX,
      startY: e.pageY,
    };
  };

  const handleCropBoxStop = () => {
    mouseStart.current = null;
  };

  const getPosition = (cropBox, moveLeft, moveTop) => {
    if (cropBox.direction === "NS") {
      const updatePosition = cropBox.currentTop + moveTop;
      if (updatePosition <= 0) return [0, 0];
      if (updatePosition >= cropBox.maxTop) return [0, 0];
      if (updatePosition > 0) return [0, updatePosition];
    }
    if (cropBox.direction === "WE") {
      const updatePosition = cropBox.currentLeft + moveLeft;
      if (updatePosition <= 0) return [0, 0];
      if (updatePosition >= cropBox.maxLeft) return [0, 0];
      if (updatePosition > 0) return [updatePosition, 0];
    }
  };

  const handleCropBoxMove = (e) => {
    if (!mouseStart.current) return;
    const { startX, startY } = mouseStart.current;
    mouseStart.current = {
      startX: e.pageX,
      startY: e.pageY,
    };
    const moveLeft = e.pageX - startX;
    const moveTop = e.pageY - startY;
    const [currentLeft, currentTop] = getPosition(cropBox, moveLeft, moveTop);
    if (currentLeft === 0 && currentTop === 0) return;
    setCropBox((previous) => ({
      ...previous,
      currentLeft,
      currentTop,
    }));
  };
  useEffect(() => {}, []);
  return (
    <Box
      cropBox={cropBox}
      onMouseDown={handleCropBoxStart}
      onMouseMove={handleCropBoxMove}
      onMouseUp={handleCropBoxStop}
      onMouseLeave={handleCropBoxStop}
    />
  );
};

export default CropBox;
