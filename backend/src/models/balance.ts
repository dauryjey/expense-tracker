export interface IBalance {
	"balance": number;
}

export function new_(balance: number): IBalance {
	return {
		"balance": (balance ?? 0)
	}
}