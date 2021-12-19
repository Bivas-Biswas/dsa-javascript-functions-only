function Node(element){
    this.element = element
    this.next = null
    this.previous = null
}

function LList() {
	this.head = new Node("head")
	this.find = find
	this.insert = insert
	this.display = display
	this.remove = remove
    this.findLast = findLast
    this.dispReverse = dispReverse
}

function find(item) {
	let currNode = this.head
	while (currNode.element != item) {
        if(currNode.next == null){
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
    newNode.previous = current
    current.next = newNode
}

function remove(item){
    let currNode = this.find(item)
    if(currNode === null){
        console.log("Item not found")
        return
    }
    if(currNode.next != null){
        currNode.previous.next = currNode.next
        currNode.next.previous = currNode.previous
        currNode.next = null
        currNode.previous = null
    }
    else{
        currNode.previous.next = null
        currNode.previous = null
    }
}

// find the last node
function findLast(){
    let currNode = this.head
    while(currNode.next != null){
        currNode = currNode.next
    }
    return currNode
}

function display(){
    let currNode = this.head
    while(currNode.next != null){
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

// diplay in reverse
function dispReverse(){
    let currNode = this.head
    currNode = this.findLast()
    while(currNode.previous != null){
        console.log(currNode.element)
        currNode = currNode.previous
    }
}

let cities = new LList()
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Carlisle", "Russellville")
cities.insert("Alma", "Carlisle")
cities.display()
console.log('\n')
cities.remove("Alm")
console.log('\n')
cities.display()
console.log(cities);