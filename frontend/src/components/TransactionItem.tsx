interface Transaction {
  id: string;
  description: string;
  amount: number;
}

interface TransactionItemProps {
  transaction: Transaction;
  handleDelete: (event: React.MouseEvent, id: string) => void;
  color: string;
}

export const TransactionItem = ({
  transaction,
  handleDelete,
  color,
}: TransactionItemProps) => {
  return (
    <li
      key={transaction.id}
      className="flex justify-between items-center p-4 border-b border-gray-200"
    >
      <span>{transaction.description}</span>
      <div className="flex items-center">
        <span className={`${color} mr-4`}>
          {color === "text-red-500" ? "-" : "+"}${transaction.amount}
        </span>
        <button onClick={(event) => handleDelete(event, transaction.id)}>Delete</button>
      </div>
    </li>
  );
};
