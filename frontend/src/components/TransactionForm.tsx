import { useState } from "react"
import { Label, TextInput, Button } from "flowbite-react"

interface TransactionFormProps {
	onSubmit: (description: string, amount: number) => void
}

export const TransactionForm = ({ onSubmit }: TransactionFormProps) => {
	const [description, setDescription] = useState("")
	const [amount, setAmount] = useState(0)

	const handleSubmit = (event: React.FormEvent) => {
			event.preventDefault()
			onSubmit(description, amount)
			setDescription("")
			setAmount(0)
	};

	return (
			<form className="mt-4" onSubmit={handleSubmit}>
					<label className="block">
							<Label htmlFor="description" value="Description" />
							<TextInput
									type="text"
									className="w-full mt-1 p-2 border border-gray-200 rounded-md"
									placeholder="Enter text..."
									id="description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
							/>
					</label>
					<label className="block mt-4">
							<Label htmlFor="amount" value="Amount" />
							<TextInput
									type="number"
									className="w-full mt-1 p-2 border border-gray-200 rounded-md"
									placeholder="Enter amount..."
									id="amount"
									value={amount}
									onChange={(e) => setAmount(Number(e.target.value))}
									required
							/>
					</label>
					<Button type="submit" className="w-full mt-4" color="purple">
							Add transaction
					</Button>
			</form>
	);
};