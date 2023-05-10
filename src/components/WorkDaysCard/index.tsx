import { CalendarProvider } from "providers";
import { CardBody } from "./CardBody";

const WorkDaysCard = () => {
  return (
    <CalendarProvider>
      <CardBody />
    </CalendarProvider>
  );
};

export default WorkDaysCard;
