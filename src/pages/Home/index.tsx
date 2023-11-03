import { WorkDaysCard, SalaryForm } from "components";
import CalculateRise from "components/CalculateRise";
import DollarSection from "components/DollarSection";

const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <DollarSection />
      <WorkDaysCard />
      <CalculateRise />
      <SalaryForm />
    </section>
  );
};

export default Home;
