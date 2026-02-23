## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4

---

# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)

# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)

# 📅 Deadline For 30 marks: Any time after 24th February.

# Main Requirements

## Design Part

## Dashboard

- Website name and Create a dashboard like figma
- The section should be responsive for mobile devices. It is totally up to you.

## Available Jobs Section

- A title on the left side, jobs count on the right side
- 3 different tab below the section title
- Minimum 8 cards with:
  - companyName
  - position
  - location
  - type
  - salary
  - description
  - 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

---

## Functionalities Part

- Clicking on Interview button on the card
  - will add the data on Interview tab
  - add the status as Interview.
  - Will increase the the count of interview in Dashboard

- Clicking on Rejected button on the card
  - will add the data on Rejected tab
  - add the status as Rejected.
  - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements

- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot.

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

**Technology Stack:**

- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)

---

## What to submit:

1. GitHub Repository Link:
2. Live Site Link:
