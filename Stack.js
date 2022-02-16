
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
        this.store.splice(this.top, 1)
        return this.store[--this.top]
    }

    clear(){
        this.top = 0
        this.store = []
    }

    length(){
        return this.top
    }
}