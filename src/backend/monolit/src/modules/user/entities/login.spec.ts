import {Login} from "./login";

describe("Login", () => {
    it("Create", () => {
        const value = "genadiy228"
        const login = new Login(value)
        expect(login).toBeDefined()
        expect<string>(login.getValue()).toBe(value)
    })
})