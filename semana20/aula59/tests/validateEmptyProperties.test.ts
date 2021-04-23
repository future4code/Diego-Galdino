import { validateEmptyProperties } from "../src/validateEmptyProperties";
import { utimes } from "fs";

describe("Testing validadeEmptyProperties", () => {

    it("Should return isValid false for empty string", () => {

        const input = {
            email: ""
        }

        //output.errors = [{key: "email", value: ""}]

        const output = validateEmptyProperties(input);
        expect(output.isValid).toBe(false);
        console.log(output.isValid);
        expect(output.errors.length).toBe(1);
        expect(output.errors).toContainEqual({ key: "email", value: "" });

    });

    test("Should return isValid false for number 0", () => {

        expect.assertions(3);

        const input = {
            age: 0
        }

        const output = validateEmptyProperties(input);
        expect(output.isValid).not.toBe(true);
        expect(output.errors.length).toBe(1);
        expect(output.errors[0].key).toEqual("age");

    });

    test("Should return isValid false for undefined value", () => {

        expect.assertions(4);

        const input = {
            username: undefined
        }

        //output.isValid = true
        //output.errors = [{key: "username", value: undefined}]

        const output = validateEmptyProperties(input);
        expect(output.isValid).not.toBe(true);
        expect(output.errors.length).toBe(1);
        expect(output.errors[0].key).toEqual("username");
        expect(output.errors[0].value).toEqual(undefined);

    });

    test("Should return isValid false for null value", () => {

        expect.assertions(4);

        const input = {
            card: null
        }

        const output = validateEmptyProperties(input);
        expect(output.isValid).not.toBe(true);
        expect(output.errors.length).toBeGreaterThan(0);
        expect(output.errors[0].key).toEqual("card");
        expect(output.errors[0].value).toEqual(null);

    });

    test("Should return isValid false for invalid values along a single correct one", () => {

        const input = {
            name: "Astrodev",
            email: "",
            username: undefined,
            age: 0,
            card: null
        }

        const output = validateEmptyProperties(input);
        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBeLessThan(5);
        expect(output.errors.length).toBe(4);
        expect(output.errors).not.toContainEqual({ key: "name", value: "Astrodev" });

    });

    it("Should return isValid true for valid input", () => {

        const input = {
            name: "Astrodev"
        }

        const output = validateEmptyProperties(input);
        expect(output.isValid).toBe(true);
        expect(output.errors.length).toBe(0);

    })

});