import apiRoutes from "../const/apiRoutes"

export async function deleteExpense(id: string): Promise<void> {
	const response = await fetch(`${apiRoutes.DELETE_EXPENSE}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error('Failed to delete expense')
	}
}