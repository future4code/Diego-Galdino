import { ListNode } from "../LinkedList/ListNode";

export class LinkedList {
    constructor(public start?: ListNode) { }

    public appendToTail(value: number) {
        if (!this.start) {
            this.start = new ListNode(value);
        } else {
            let node: ListNode = this.start;
            while (node && node.next !== undefined) {
                node = node.next!;
            }
            node.next = new ListNode(value);
        }
    }

    public print(): void {
        let node: ListNode | undefined = this.start;
        let i = 1;
        while (node !== undefined) {
            console.log(`Elemento ${i}: `, node!.getValue());
            node = node!.next;
            i++;
        }
    }
}

const list: LinkedList = new LinkedList()
console.log(list)
list.appendToTail(3)
list.appendToTail(1)
list.appendToTail(2)
list.print()
