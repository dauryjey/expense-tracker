interface FinancialCategoryProps	{
	name: string;
	amount: number;
	color?: string;	
	border?: boolean;
}

export const FinancialCategory = ({ name, amount, color, border}: FinancialCategoryProps) => {
  return (
    <div className={`flex flex-col justify-between items-center p-4 ${border && "border-b"} border-gray-200`}>
      <h3 className="text-lg font-semibold uppercase">{name}</h3>
      <h3 className={`text-lg font-semibold text-${color}-500`}>$ {amount}</h3>
    </div>
  );
};
