import styled from "styled-components";
import { PlusLg } from "@styled-icons/bootstrap";

const UploadContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: ${(props) => (props.mode.pathName === "works" ? "185px" : "150px")};
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledPlusLg = styled(PlusLg)`
  width: 45px;
  color: white;
`;

const Upload = ({ handleUploadFiles, mode }) => {
  return (
    <UploadContainer mode={mode} onClick={handleUploadFiles}>
      <StyledPlusLg />
    </UploadContainer>
  );
};

export default Upload;
