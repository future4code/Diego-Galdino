export class ListNode {
    constructor(
        public value: any,
        public next: ListNode | undefined = undefined  
        ) 
    {}

        getValue():Number {
            return this.value
        }
    
}