import { useLocalStorage } from "@julianfere/react-utility-hooks";
import StatisticCard from "@components/StatisticCard";
import { MiscContainer, Container } from "./styles";
import useDashboard from "@hooks/useDashboard";
import { IStore } from "@entities/Storage";
import { Card } from "antd";

const InfoSection = ({ width }: { width?: string }) => {
  const { updateContext, salary, raise } = useDashboard();
  const { removeItem } = useLocalStorage<IStore>();

  const handleClearSalary = () => {
    removeItem("salary");
    updateContext({ salary: { lastUpdate: new Date().toString(), value: 0 } });
  };

  const handleClearRaise = () => {
    removeItem("raise");
    updateContext({ raise: { lastUpdate: new Date().toString(), value: 0 } });
  };

  return (
    <MiscContainer width={width}>
      <Card title="Ultimos datos calculados">
        <Container>
          <StatisticCard
            title="Sueldo"
            value={salary.value}
            lastUpdated={salary.lastUpdate}
            clear={handleClearSalary}
          />
          <StatisticCard
            title="Aumento"
            value={raise.value}
            lastUpdated={raise.lastUpdate}
            clear={handleClearRaise}
          />
        </Container>
      </Card>
    </MiscContainer>
  );
};

export default InfoSection;
