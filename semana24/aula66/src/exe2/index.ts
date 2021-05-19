import { LinkedList } from "../exe1"
import { ListNode } from "../LinkedList/ListNode"

class Stack {
    constructor(
        public frames: LinkedList = new LinkedList()
    ) { }

    public isEmpty = (): boolean => this.frames.start === null

    public push = (
        value: any
    ): void => {
        this.frames.appendToTail(value)
    }

    public pop = (): any => {

        if (!this.isEmpty()) return undefined

        let previousNode: ListNode | undefined = undefined
        let currentNode: ListNode | undefined = this.frames.start

        while (currentNode!.next) {
            previousNode = currentNode
            currentNode = currentNode!.next
        }

        previousNode!.next = undefined

        return currentNode

    }

    /**
     * print
     */
     public print(): void {
        let node: ListNode | undefined = this.frames.start;
        let i = 1;
        while (node !== undefined) {
            console.log(`Elemento ${i}: `, node.value);
            node = node!.next;
            i++;
        }
    }
}

const stack = new Stack()
console.log(stack)
console.log(stack.isEmpty())
stack.push(3)
stack.push(1)
stack.push(2)
stack.pop()
stack.print()
