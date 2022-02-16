
class Stack {
    constructor(){
        this.store = []
        this.top = 0

    }

    push(item){
        this.store[this.top++] = item
    }

    peek(){
        return this.store[this.top - 1]
    }

    pop(){
        return this.store[--this.top]
    }

    clear(){
        this.top = 0
    }

    length(){
        return this.top
    }
}