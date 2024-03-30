const useExtraHourCalculator = () => {
  const calculate = ({
    hoursPerMonth,
    hoursDone,
    salary,
  }: {
    hoursPerMonth: number;
    hoursDone: number;
    salary: number;
  }) => {
    const extraHours = hoursDone - hoursPerMonth;
    const hourSalary = salary / hoursPerMonth;
    const extraSalary = extraHours * (hourSalary + hourSalary * 0.5);

    return {
      hourSalary,
      extraHours,
      extraSalary,
      total: salary + extraSalary,
    };
  };

  return {
    calculate,
  };
};

export default useExtraHourCalculator;
