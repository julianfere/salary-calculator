import StatisticCard from "components/StoredStatistics";
import { useAppState } from "hooks/useAppSate";

const StatisticsRow = () => {
  const { storedData } = useAppState();

  const { lastUpdated, salary } = storedData.LastSalary;
  const { lastUpdated: lastUpdatedRaise, raise } = storedData.LastRaise ?? {};

  return (
    <section
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <StatisticCard
        title="Ultimo sueldo calculado"
        value={salary}
        lastUpdated={lastUpdated}
      />
      <StatisticCard
        title="Ultimo aumento calculado"
        value={raise}
        lastUpdated={lastUpdatedRaise}
      />
    </section>
  );
};

export default StatisticsRow;
