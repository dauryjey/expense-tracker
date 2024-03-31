import { IBalance } from "./balance"
import { IExpense } from "./expense"

export interface IReport {
  expenses: {
    total: number;
    expenses: IExpense[];
  };
  incomes: {
    total: number;
    incomes: IExpense[];
  };
  balance: IBalance | number;
}
