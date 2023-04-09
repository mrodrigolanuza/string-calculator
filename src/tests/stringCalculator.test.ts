/*

OK> null ⇒ 0, "" ⇒ 0
OK> "1" ⇒ 1
OK> "1,2" ⇒ 3, "1,2,3" ⇒ 6
> "a" ⇒ 0, "1,a" ⇒ 1, "1,a,2" ⇒ 3, "1a, 2" ⇒ 2
> "//#/3#2" ⇒ 5, "//#/3,2" ⇒ 0, "//%/1%2%3" ⇒ 6

*/

import { sumNumbers } from "../core/stringCalculator";

describe("The String Calculator", ()=>{
    it("returns 0 when string expression received is null",()=>{
        expect(sumNumbers(null)).toBe(0);
    });
    it("returns 0 when string expression received is empty string",()=>{
        expect(sumNumbers('')).toBe(0);
    });
    it("returns number recieved when string expression contains only a number",()=>{
        expect(sumNumbers('1')).toBe(1);
    });
    it("returns the sum from a string expression containing comma-separated numbers",()=>{
        expect(sumNumbers('1,2')).toBe(3);
    });
    it("returns the sum from a string expression containing comma-separated numbers",()=>{
        expect(sumNumbers('1,2')).toBe(3);
        expect(sumNumbers('1,2,3')).toBe(6);
    });
    it("returns 0 when expression contains only no numeric characters",()=>{
        expect(sumNumbers('a')).toBe(0);
    });
});