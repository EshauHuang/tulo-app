import InputWorkDetail from "./InputWorkDetail";
import ViewWorkDetail from "./ViewWorkDetail";

import { headerData } from "../../global/staticData";

const WorkDetail = ({ workDetail, handleChangeValue, mode, page, setPage }) => {
  const { workDetailHeader } = headerData(mode.pathName);
  return (
    <>
      {mode.active === "edit" ? (
        <InputWorkDetail
          mode={mode}
          handleChangeValue={handleChangeValue}
          workDetail={workDetail}
          workDetailHeader={workDetailHeader}
        />
      ) : (
        <ViewWorkDetail
          workDetail={workDetail}
          workDetailHeader={workDetailHeader}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default WorkDetail;
