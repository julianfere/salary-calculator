const humanReadableNumber = (value: number) => {
  const formatter = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
  if (!value) return;

  return formatter.format(value);
};

export { humanReadableNumber };
