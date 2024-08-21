function node(data, next = null) {
    return {
        data,
        next
    }
}

function linkedList() {
    let head = null
    //append a new node with data // if list contains no data make entry the head
    function append(data) {
        //create new data
        let newNode = node(data)
        //if no data exists make data the head
        if (!head) {
            head = newNode
            return
        }
        //if head is found set it to current node
        let current = head;
        //if new data has a next method continue until null
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    //print list for debugging
    function toString() {
        //set current to head
        let current = head
        //while current isnt null print
        while (current) {
            console.log("( "+ current.data +" ) ->")
            current = current.next
            if (current === null) {
                return null
            }
        }
    }


    //add new data and make it head
    function prepend(data) {
        //create data
        let newNode = node(data)
        //
        newNode.next = head

        head = newNode
    }

    //return the length of the list by node
    function size() {
        let count = 0
        let current = head
        while (current !== null) {
            count++
            current = current.next
        }
        console.log(count)
        return count
    }

    //return data at head
    function start() {
        if (head) {
            return head.data
        } else {return 0}
    }

    //return the final data value before null
    function tail() {
        if (!head) {
            return 0
        }
        if (head) {
            let current = head
            while (current.next) {
                current = current.next
                if (current.next === null) {
                    return current.data
                }
            }
        }
    }

    //return the value at a given index
    function at(index) {
        if (index < 0) return `use a positive integer up to ${size()}`
       current = head
       let count = 0
       while (current !== null) {
        count ++
        if (count === index) {
            return current.data
        } else if (current.next === null) {
            return `the list only contains ${size()} items`
        }
        current = current.next
       } 
    }

    //remove the last value before null
    function pop() {
        if (!head) {
            return 0
        }
        let current = head
        let last = null
        while(current.next) {
            last = current
            current = current.next
        }
        last.next = null
    }

    //return the value of the data
    function contains(data) {
        if (!head) {
            return 0
        }
        let current = head
        while (current) {
            if (current.data === data) {
                return true
            }
            current = current.next
        }
        return false
    }

    function insertAt(val, index) {
        if (!head) {
            return 0
        }
        let count = 0
        let current = head
        let onHold = null
        while (current && count < index) {
            onHold = current
            current = current.next
            count++
        }
        let newNode = node(val, current)
        onHold.next = newNode
    }

    function removeAt(index) {
        if (!head) {
            return 0
        }
        let current = head
        let remove = null
        let count = 0
        while (current && count < index) {
            remove = current
            current = current.next
            count++
        }
        remove.next = current.next
        
    }
    

    return {
        append,
        prepend,
        size,
        start,
        tail,
        at,
        pop,
        contains,
        toString,
        insertAt,
        removeAt
    }

}

export { linkedList };