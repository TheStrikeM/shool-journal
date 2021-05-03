import {Id} from "./id";
import {v4} from "uuid";
import {InvalidArgumentException} from "node-exceptions";

describe('Id', () => {
    it('create', () => {
        const value = v4()
        const id = new Id(value)
        expect(id).toBeDefined()
        expect<string>(id.getValue()).toBe(value)
    })

    it('uuid checking', () => {
        try {
            new Id('not-uuid')
        } catch (e) {
            expect(e).toBeInstanceOf(InvalidArgumentException)
            expect<string>(e.message).toBe('Id should be uuidv4 type')
        }
    })
})