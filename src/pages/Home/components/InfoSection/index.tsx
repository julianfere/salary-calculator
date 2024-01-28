import Card from "components/Card";
import { setLastRaise, setLastSalary } from "context/AppContext/actions";
import { useLocalStorage } from "hooks";
import useApp from "hooks/useApp";
import StatisticCard from "components/StatisticCard";
import { MiscContainer, Container } from "./styles";

const InfoSection = () => {
  const { dispatch, state } = useApp();
  const { clear } = useLocalStorage();

  const handleClearSalary = () => {
    clear("lastSalary");
    dispatch(setLastSalary(0));
  };

  const handleClearRaise = () => {
    clear("lastRaise");
    dispatch(setLastRaise(0));
  };

  return (
    <MiscContainer>
      <Card title="Ultimos datos calculados">
        <Container>
          <StatisticCard
            title="Sueldo"
            value={state.storedData.lastSalary.value}
            lastUpdated={state.storedData.lastSalary.lastUpdated}
            clear={handleClearSalary}
          />
          <StatisticCard
            title="Aumento"
            value={state.storedData.lastRaise.value}
            lastUpdated={state.storedData.lastRaise.lastUpdated}
            clear={handleClearRaise}
          />
        </Container>
      </Card>
    </MiscContainer>
  );
};

export default InfoSection;
