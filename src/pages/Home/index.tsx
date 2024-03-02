import CalculateRise from "@components/CalculateRise";
import SalaryForm from "@components/SalaryForm";
import InfoSection from "./components/InfoSection";
import {
  Container,
  FirstSection,
  SecondSection,
} from "./styled";
import DollarInfoCard from "./DollarInfoCard";
import useDashboard from "@hooks/useDashboard";

const Home = () => {
  const { config } = useDashboard();
  return (
    <Container>
      <FirstSection>
        <SalaryForm
          hours={!config.hours}
          percentage={!config.dollarPercentage}
          plusDollars={!config.dollarPlus}
          dolar={!config.calculateDollars}
          pesosPlus={config.pesosPlus}
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
