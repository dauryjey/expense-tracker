import { Card } from "flowbite-react";
import { FinancialCategory } from "./components/FinancialCategory";
import { Balance } from "./components/Balance";
import { Subtitle } from "./components/Subtitle";
import { SectionContainer } from "./components/SectionContainer";
import { Title } from "./components/Title";
import { useEffect, useState } from "react";
import { fetchReport } from "./services/fetchReport";
import { deleteExpense } from "./services/deleteExpense";
import { deleteIncome } from "./services/deleteIncome";
import { TransactionItem } from "./components/TransactionItem";
import { TransactionForm } from "./components/TransactionForm";
import { addTransaction } from "./services/addTransaction";

function App() {
  const [report, setReport] = useState<Report>()
  const [addedNew, setAddedNew] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport()

      setReport(data);
      setAddedNew(false)
      setIsDeleted(false)
    };

    fetchData();
  }, [addedNew, isDeleted]);

  
  const handleAddTransaction = async (description: string, amount: number) => {
    addTransaction(description, amount)
    setAddedNew(true)
   }


  const handleDeleteExpense = async (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    deleteExpense(id)
    setIsDeleted(true)
  };

  const handleDeleteIncome = async (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    deleteIncome(id)
    setIsDeleted(true)
  };

  return (
    <main className="flex justify-center">
      {report === undefined ? (
        <p>Loading...</p>
      ) : (
        <section className="flex flex-col justify-center items-center h-full p-5 gap-4 w-[300px]">
          <header className="w-full">
            <Title text="Expense Tracker" />
            <article className="mt-6">
              <Balance balance={report.balance} />
              <Card className="mt-4">
                <FinancialCategory
                  name="Income"
                  amount={report.incomes?.total || 0}
                  color="green"
                  border
                />
                <FinancialCategory
                  name="Expense"
                  amount={report.expenses?.total || 0}
                  color="red"
                />
              </Card>
            </article>
          </header>
          <SectionContainer>
            <Subtitle text="History" />
            <ul className="mt-4">
              {report.expenses.expenses.map((expense) => (
                <TransactionItem
                  key={expense.id}
                  transaction={expense}
                  handleDelete={(e) => handleDeleteExpense(e, expense.id)}
                  color="text-red-500"
                />
              ))}

              {report.incomes.incomes.map((income) => (
                <TransactionItem
                  key={income.id}
                  transaction={income}
                  handleDelete={(e) => handleDeleteIncome(e, income.id)}
                  color="text-green-500"
                />
              ))}
            </ul>
          </SectionContainer>
          <SectionContainer>
            <Subtitle text="Add new transaction" />
            <TransactionForm onSubmit={(description, amount) => handleAddTransaction(description, amount)} />
          </SectionContainer>
        </section>
      )}
    </main>
  );
}

export default App;
