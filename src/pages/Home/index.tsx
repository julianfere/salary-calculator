import CalculateRise from "@components/CalculateRise";
import SalaryForm from "@components/SalaryForm";
import InfoSection from "./components/InfoSection";
import { Container, FirstSection, SecondSection } from "./styled";
import DollarInfoCard from "./DollarInfoCard";
import useDashboard from "@hooks/useDashboard";

const Home = () => {
  const { config } = useDashboard();

  const showHoursInput = !Boolean(config.hours);
  const showPercentageInput = !Boolean(config.dollarPercentage);
  const showPlusDollarsInput = !Boolean(config.dollarPlus);
  const showDollarInput = !Boolean(config.calculateDollars);
  const showPesosPlusInput = !Boolean(config.pesosPlus);

  return (
    <Container>
      <FirstSection>
        <SalaryForm
          hours={showHoursInput}
          percentage={showPercentageInput}
          plusDollars={showPlusDollarsInput}
          dolar={showDollarInput}
          pesosPlus={showPesosPlusInput}
        />
      </FirstSection>
      <SecondSection>
        <DollarInfoCard />
        <CalculateRise />
        <InfoSection />
      </SecondSection>
    </Container>
  );
};

export default Home;
