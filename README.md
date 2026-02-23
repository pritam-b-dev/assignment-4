## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: By selecting an Id using getElementById will return that selected html element and if nothing found will return Null. By selecting a class, which can be assigned as same name to other elements, using getElementsByClassName will return HTMLCollection array like object and returns empty HTMLCollection array if the class does not exist. querySelectorAll returns a nodelist which is also an array like object, but querySelector only returns the first child found as selector name. querySelector return null if nothing found and querySelectorAll returns a nodelist with empty array like object. When working with an array like objects we can not run push,pop or map mathods directly to it.

### 2. How do you create and insert a new element into the DOM?

Answer: Creating an element by document.createElement() and then insert this to html by body.appendChild(document.createElement())

### 3. What is Event Bubbling? And how does it work?

Answer: when we run an addEventListner to any element it will take two parameter, an event like click or mouseover and a callback function. when the event happens to the selected element, that event also happening one by one to the parent of that element onwards.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is to get the element by using the event bubbling process. in this case we get the event of that element by selecting that element's parent. so that event only bubble up to that selected parent, not the parents of that parent if there any.
It is very usefull because it saves memory. If we have add event in list of items, we dont need to add event on each and every single list. we just set the event to the parent of thos list and that parent will get the respons and identify that element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() can prevent to take actions like deactivate a page link where stopPropagation() method can not do this. By using stopPropagation() method will move you to that page but that click event will not bubble up to its parent. But using preventDefault() method can not prevent bubbling, it will bubble up all its parents.
