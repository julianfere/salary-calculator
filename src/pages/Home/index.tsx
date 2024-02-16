import CalculateRise from "components/CalculateRise";
import SalaryForm from "components/SalaryForm";
import InfoSection from "./components/InfoSection";
import {
  Container,
  FirstSection,
  SecondSection,
  ThirthSection,
} from "./styled";
import DateCardComponent from "./components/DateCardComponent";
import DollarInfoCard from "./DollarInfoCard";
import useApp from "hooks/useApp";

const Home = () => {
  const { state } = useApp();
  return (
    <Container>
      <FirstSection>
        <SalaryForm
          hours={!state.config.hours}
          percentage={!state.config.percentage}
          plusDollars={state.config.plus}
          dolar={state.config.dolar}
          pesosPlus={!state.config.pesosPlus}
        />
      </FirstSection>
      <SecondSection>
        <DollarInfoCard />
        <DateCardComponent />
        <CalculateRise />
      </SecondSection>
      <ThirthSection>
        <InfoSection />
      </ThirthSection>
    </Container>
  );
};

export default Home;
