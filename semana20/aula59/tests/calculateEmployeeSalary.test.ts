import { CalculateEmployeeSalaryInput, calculateEmployeeSalary } from "../src/calculateEmployeeSalary"
import { ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"

describe("Testing calculateEmployeeSalary",()=>{

    test("Should throw new Error 'Missing properties'", ()=>{
        expect.assertions(1);

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "Astrodev",
            baseSalary: 200,
            benefits: [10, 20],
            extraHours: 20
        }

        try {

            const mockValidator = jest.fn((input: any): ValidateEmptyPropertiesOutput =>{
                return {
                    isValid: false,
                    errors: []
                }
            })
    
           const output = calculateEmployeeSalary(input, mockValidator)
            
        } catch (error) {
            expect(error.message).toEqual("Missing Properties")
        }
        
    });

    it("Should throw Error 'Invalid Benefits' for negative benefits", ()=>{

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "",
            baseSalary: 200,
            benefits: [-10, 20],
            extraHours: 20
        }

        try {
            expect.assertions(1);
            const mockValidator = jest.fn((input: any): ValidateEmptyPropertiesOutput =>{
                return {
                    isValid: true,
                    errors: []
                }
            })
    
           const output = calculateEmployeeSalary(input, mockValidator)
            
        } catch (error) {
            expect(error.message).toEqual("Invalid Benefit");
        }
    });

    it("Should throw Error 'Invalid ExtraHours' for negative extra hours", ()=>{

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "",
            baseSalary: 200,
            benefits: [10, 20],
            extraHours: -20
        }

        try {
            expect.assertions(1);

            const mockValidator = jest.fn((input: any): ValidateEmptyPropertiesOutput =>{
                return {
                    isValid: true,
                    errors: []
                }
            });
    
           const output = calculateEmployeeSalary(input, mockValidator)
            
        } catch (error) {
            expect(error.message).toEqual("Invalid ExtraHours");
        }
    });


    test("Should return 250 as employeeSalary Output", ()=>{

        expect.assertions(7);

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "Astrodev",
            baseSalary: 200,
            benefits: [10, 20],
            extraHours: 20
        }

        const mockValidator = jest.fn((input: any): ValidateEmptyPropertiesOutput =>{
            return {
                isValid: true,
                errors: []
            }
        })

        const output = calculateEmployeeSalary(input, mockValidator);
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledTimes(1);
        expect(mockValidator).toHaveBeenCalledWith(input);

        expect(mockValidator).toHaveReturned();
        expect(mockValidator).toHaveReturnedTimes(1);
        expect(mockValidator).toHaveReturnedWith({
            isValid: true,
            errors: []
        });

        expect(output).toBe(250);

    })

})