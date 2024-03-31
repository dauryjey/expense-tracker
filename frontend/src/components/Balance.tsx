interface BalanceProps {
  balance: number;
}

export const Balance = ({ balance }: BalanceProps) => {
  return (
    <>
      <h2 className="text-md font-semibold uppercase">Your Balance</h2>
      <p className="text-3xl font-bold">${balance}</p>
    </>
  );
};
