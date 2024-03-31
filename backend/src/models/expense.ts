export interface IExpense {
  description: string;
  amount: number;
}

function new_(description: string, amount: number): IExpense {
	return {
		description,
		amount,
	}
}


export default {
	new: new_,
}
