function Node(element) {
	this.element = element
	this.next = null
}

function LList() {
	this.head = new Node("head")
	this.find = find
	this.insert = insert
	this.display = display
	this.findPrevious = findPrevious
	this.remove = remove
}

function find(item) {
	let currNode = this.head
	while (currNode.element != item) {
		currNode = currNode.next
	}
	return currNode
}

function insert(newElement, item) {
	let newNode = new Node(newElement)
	let current = this.find(item)
	newNode.next = current.next
	current.next = newNode
}

function display() {
	let currNode = this.head
	while (currNode.next != null) {
		console.log(currNode.next.element)
		currNode = currNode.next
	}
}

function findPrevious(item) {
	let currNode = this.head
	while (currNode.next != null && currNode.next.element != item) {
		currNode = currNode.next
	}
	return currNode
}

function remove(item) {
	let prevNode = this.findPrevious(item)
	if (prevNode.next != null) {
		prevNode.next = prevNode.next.next
	} else {
		console.log("Item not found")
	}
}

let cities = new LList()
console.log(cities)
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Carlisle", "Russellville")
cities.display()
console.log("\n")
cities.remove("Carlisle")
cities.display()
