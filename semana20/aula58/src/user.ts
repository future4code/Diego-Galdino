export interface User {
	name: string
	balance: number
}

export const canBuy=(user: User, value: number): User | undefined =>{
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}