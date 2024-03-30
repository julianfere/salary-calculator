import CalculateExtraHours from "@components/CalculareExtraHours";
import CalculateRise from "@components/CalculateRise";
import SalaryForm from "@components/SalaryForm";
import useDashboard from "@hooks/useDashboard";
import DollarInfoCard from "@pages/Home/DollarInfoCard";
import InfoSection from "@pages/Home/components/InfoSection";
import { Tabs, TabsProps } from "antd";

const NewHome = () => {
  const { config } = useDashboard();

  const showHoursInput = !Boolean(config.hours);
  const showPercentageInput = !Boolean(config.dollarPercentage);
  const showPlusDollarsInput = !Boolean(config.dollarPlus);
  const showDollarInput = !Boolean(config.calculateDollars);
  const showPesosPlusInput = !Boolean(config.pesosPlus);

  const items: TabsProps["items"] = [
    {
      key: "3",
      label: "Info",
      children: (
        <>
          <DollarInfoCard />
          <br />
          <InfoSection />
        </>
      ),
    },
    {
      key: "1",
      label: "Calcular salario",
      children: (
        <SalaryForm
          hours={showHoursInput}
          percentage={showPercentageInput}
          plusDollars={showPlusDollarsInput}
          dolar={showDollarInput}
          pesosPlus={showPesosPlusInput}
        />
      ),
    },
    {
      key: "2",
      label: "Calcular aumento",
      children: <CalculateRise />,
    },
    {
      key: "4",
      label: "Horas extra",
      children: <CalculateExtraHours />,
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 20,
      }}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        type="line"
        style={{
          width: "90%",
        }}
      />
    </section>
  );
};

export default NewHome;
