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
        //if no head is found set it to current node
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
            console.log("( " + current.data + " ) ->")
            current = current.next
            if (current === null) {
                return null
            }
        }
    }


    //add new data and make it head
    function prepend(data) {

    }
    //return the length of the list by node
    function size() {

    }
    //return data at index 0
    function start() {

    }
    //return the final data value before null
    function tail() {
        
    }
    //return the value at a given index
    function at(index) {

    }
    //remove the last value before null
    function pop() {

    }
    //return the value of the data
    function contains(data) {

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

    }
}

