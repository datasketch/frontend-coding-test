//import mui component
import { DatePicker } from "./DatePicker";

//import icons
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

export const Accordion = ({
  dateValue,
  setDateValue,
  setAccordion,
  accordion,
}) => {
  return (
    <div className="accordion">
      {accordion ? (
        <button onClick={() => setAccordion(false)}>
          <BsArrowUpCircleFill style={{ color: "#ff5630" }} /> No add end date
        </button>
      ) : (
        <button onClick={() => setAccordion(true)}>
          <BsArrowDownCircleFill style={{ color: "#00ab55" }} /> Add end date
        </button>
      )}
      {accordion && (
        <div className="containerPiker">
          <DatePicker date={dateValue} setDate={setDateValue} />
        </div>
      )}
    </div>
  );
};
