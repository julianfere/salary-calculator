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

const Home = () => {
  return (
    <Container style={{}}>
      <FirstSection>
        <SalaryForm hours percentage plusDollars />
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
