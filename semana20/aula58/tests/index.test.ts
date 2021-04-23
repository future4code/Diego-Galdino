import { canBuy, User } from "../src/user"

test("testando o maior valor", () => {
	const user: User = {
		name: "Diego",
		balance: 100
	}

	const result = canBuy(user, 40)
	
	expect(result).toEqual({
		name: "Diego",
		balance: 60
	})
})

test("testando o maior valor", () => {
	const user: User = {
		name: "Diego",
		balance: 50
	}

	const result = canBuy(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("testando o maior valor", () => {
	const user: User = {
		name: "Diego",
		balance: 30
	}

	const result = canBuy(user, 50)
	
	expect(result).not.toBeDefined()
})

