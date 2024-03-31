import { Button, Card, Label, TextInput } from "flowbite-react";
import { FinancialCategory } from "./components/FinancialCategory";
import { Balance } from "./components/Balance";
import { Subtitle } from "./components/Subtitle";
import { SectionContainer } from "./components/SectionContainer";
import { Title } from "./components/Title";
import { useEffect, useState } from "react";
import { fetchReport } from "./services/fetchReport";

function App() {
  const [report, setReport] = useState<Report>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport();

      setReport(data);
    };

    fetchData();
  }, []);

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
              {report.expenses.expenses.map((expense) => {
                return (
                  <li
                    key={expense.id}
                    className="flex justify-between items-center p-4 border-b border-gray-200"
                  >
                    <span>{expense.description}</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-4">
                        -${expense.amount}
                      </span>
                      <button onClick={() => handleDeleteExpense(expense.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}

              {report.incomes.incomes.map((income) => {
                return (
                  <li
                    key={income.id}
                    className="flex justify-between items-center p-4 border-b border-gray-200"
                  >
                    <span>{income.description}</span>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-4">
                        +${income.amount}
                      </span>
                      <button onClick={() => handleDeleteIncome(income.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SectionContainer>
          <SectionContainer>
            <Subtitle text="Add new transaction" />
            <form className="mt-4">
              <label className="block">
                <Label htmlFor="description" value="Description" />
                <TextInput
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                  placeholder="Enter text..."
                  id="description"
                />
              </label>
              <label className="block mt-4">
                <Label htmlFor="amount" value="Amount" />
                <TextInput
                  type="number"
                  className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                  placeholder="Enter amount..."
                  id="amount"
                />
              </label>
              <Button className="w-full mt-4" color="purple">
                Add transaction
              </Button>
            </form>
          </SectionContainer>
        </section>
      )}
    </main>
  );
}

export default App;
