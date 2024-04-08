const calculateFees = (weight: number) => {
  if (weight > 20) return 10;
  if (weight > 10) return 5;
  if (weight > 5) return 3;
  if (weight > 1) return 2;
  return 1;
};

export default calculateFees;
