import { v4 as uuidv4 } from "uuid"

export interface IExpense {
		id?: string;
  description: string;
  amount: number;
}

function new_(id: string, description: string, amount: number): IExpense {
	return {
		id: (id ?? uuidv4()),
		description,
		amount
	}
}


export default {
	new: new_,
}
