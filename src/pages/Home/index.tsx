import { WorkDaysCard, SalaryForm } from "components";
import CalculateRise from "components/CalculateRise";
import DollarSection from "components/DollarSection";
import StatisticsRow from "components/StatisticsRow";

const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        height: "100%",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "end",
        }}
      >
        <DollarSection />
        <WorkDaysCard />
        <StatisticsRow />
      </section>
      <CalculateRise />
      <SalaryForm />
    </section>
  );
};

export default Home;
