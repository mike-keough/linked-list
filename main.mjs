import { linkedList } from "./script.mjs";

let ll = linkedList()
ll.append("dog");
ll.append("cat");
ll.append("parrot");
ll.append("hamster");
ll.append("snake");
ll.append("turtle");
ll.insertAt("shark", 4)
ll.removeAt(6)
ll.toString()