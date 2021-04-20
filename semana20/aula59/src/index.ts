import { CalculateEmployeeSalaryInput, calculateEmployeeSalary } from "./calculateEmployeeSalary";
import { validateEmptyProperties } from "./validateEmptyProperties";

const myEmployee: CalculateEmployeeSalaryInput = {
    baseSalary: 200,
    benefits: [10, 20],
    employeeName: "Astrodev",
    extraHours: 20
}

calculateEmployeeSalary(myEmployee, validateEmptyProperties)