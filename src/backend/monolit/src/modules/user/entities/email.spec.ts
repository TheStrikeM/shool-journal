import {Email} from "./email";
import {InvalidArgumentException} from "node-exceptions";

describe('Email', () => {
    it('create', () => {
        const value = 'sobaka228@gmail.com'
        const email = new Email(value)
        expect(email).toBeDefined()
        expect<string>(email.getValue()).toBe(value)
    })

    it('exception', () => {
        try {
            new Email("sobaka228")
        } catch (e) {
            expect(e).toBeInstanceOf(InvalidArgumentException)
            expect(e.message).toBe('Invalid email')
        }
    })
})