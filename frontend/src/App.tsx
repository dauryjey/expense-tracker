import { Button, Card, Label, TextInput } from "flowbite-react";

function App() {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col justify-center items-center h-full p-5 gap-4 w-[300px]">
        <header>
          <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
          <article className="mt-6">
            <h2 className="text-lg font-semibold uppercase">Your Balance</h2>
            <p className="text-3xl font-bold">$0.00</p>
            <Card className="w-[300px] mt-4">
              <div className="flex flex-col justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold uppercase">Income</h3>
                <h3 className="text-lg font-semibold text-green-500">+$0.00</h3>
              </div>
              <div className="flex flex-col justify-between items-center p-4">
                <h3 className="text-lg font-semibold uppercase">Expense</h3>
                <h3 className="text-lg font-semibold text-red-500">-$0.00</h3>
              </div>
            </Card>
          </article>
        </header>
        <section className="w-full mt-6">
          <h2 className="text-lg font-bold">History</h2>
          <ul className="mt-4">
            <Button color="failure" className="text-white rounded-full w-6" size="small">×</Button>
            <li className="flex justify-between items-center p-4 border-b border-gray-200">
              <span>Income</span>
              <span className="text-green-500">+$0.00</span>
            </li>
            <li className="flex justify-between items-center p-4 border-b border-gray-200">
              <span>Expense</span>
              <span className="text-red-500">-$0.00</span>
            </li>
          </ul>
        </section>
        <section className="w-full mt-6">
          <h2 className="text-lg font-bold">Add new transaction</h2>
          <form className="mt-4">
            <label className="block">
              <Label htmlFor="description"  value="Description" />
              <TextInput type="text" className="w-full mt-1 p-2 border border-gray-200 rounded-md" placeholder="Enter text..." id="description" />
            </label>
            <label className="block mt-4">
            <Label htmlFor="amount"  value="Amount" />
              <TextInput type="number" className="w-full mt-1 p-2 border border-gray-200 rounded-md" placeholder="Enter amount..."  id="amount"/>
            </label>
            <Button className="w-full mt-4" color="purple">Add transaction</Button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default App;
