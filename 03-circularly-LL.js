function Node(element){
    this.element = element
    this.next = null
}

function LList(){
    this.head = new Node('head')
    this.head.next = this.head
    this.find = find
    this.insert = insert
    this.display = display
    this.findPrevious = findPrevious
    this.remove = remove
}

function find(item){
    let currNode = this.head
    while(currNode.element != item){
        if(currNode.next.element === 'head'){
            return null
        }
        currNode = currNode.next
    }
    return currNode
}

function insert(newElement, item){
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.next
    current.next = newNode
}

function findPrevious(item){
    let currNode = this.head
    while(currNode.next.element !== item){
        if(currNode.next.element === 'head'){
            return null
        }
        currNode = currNode.next
    }
    return currNode
}

function remove(item){
    if(item === 'head') {
        console.log('Cannot remove head')
        return
    }

    let prevNode = this.findPrevious(item)

    if(!prevNode){
        console.log('Item not found')
        return
    }
    if(prevNode.next.element === item){
        prevNode.next = prevNode.next.next
    }
}

function display(){
    let currNode = this.head
    currNode = currNode.next
    while(currNode.element != 'head'){
        console.log(currNode.element)
        currNode = currNode.next
    }
}

let cities = new LList()
console.log(cities)
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Carlisle", "Russellville")
cities.display()
console.log("\n")
cities.remove("head")
console.log("\n")
cities.display()