import apiRoutes from "../const/apiRoutes";

export const addTransaction = async (description: string, amount: number) => {
  if (amount === 0) {
    return
  }

  const isIncome = amount > 0;

  if (isIncome) {
    await fetch(apiRoutes.ADD_INCOME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        amount,
      }),
    })
  } else {
    const parsedAmount = Math.abs(amount);
    await fetch(apiRoutes.ADD_EXPENSE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        amount: parsedAmount,
      }),
    })
  }
};
