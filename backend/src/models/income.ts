import { v4 as uuidv4 } from "uuid"

export interface IIncome {
	id: string;
	description: string;
	amount: number;
}

export function new_(id: string, description: string, amount: number): IIncome {
	return {
		id: (id ?? uuidv4()),
		description,
		amount
	}
}
