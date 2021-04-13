import {Email} from "./email";

describe('Email', () => {
    it('create email', () => {
        const val = 'dinkodanil@gmail.com'
        const email = new Email(val)
        expect(email.getValue()).toBe(val)
    })
})