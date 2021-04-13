import {Id} from "./id";
import {v4} from "uuid";
import {InvalidArgumentException} from "node-exceptions";

describe('Id', () => {
    it('create id with error', () => {
        try {
            const value = 'not-uuid'
            new Id(value)
        } catch(e) {
            expect(e).toBeInstanceOf(InvalidArgumentException)
            expect(e.message).toBe("Required uuid version 4 only")
        }
    })

    it('create id', () => {
        const id = new Id(v4())
        console.log(id.getValue())
        expect(id.getValue()).toBe(id.getValue())
    })
})