import CalculateRise from "components/CalculateRise";
import SalaryForm from "components/SalaryForm";
import InfoSection from "./components/InfoSection";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <SalaryForm />
      <CalculateRise />
      <InfoSection />
    </Container>
  );
};

export default Home;
