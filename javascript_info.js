// Public Informations About JS Code //
/*
1. Connect HTML page with JS page => in HTML => <script src="JS_page.js"></script>
2. You should put the <script> code line at the end of <body> in HTML page
3. You should write (;) at the end of the js code line
4. You can write JS code in (Console) or in (JS File)
5. Console isn't from JS language but it is from Web API
6. You can put ("") in ('') => console.log("Hello 'Basel'")
7. You can put ('') in ("") => console.log('Hello "Basel"')
8. You can't put ('') in ('') or put ("") in ("") => console.log("Hello "Basel"")
9. You can use (\) before anything that you want compiler to ignore it => You can put ("") in ("") or put ('') in ('') by put (\) before (") => console.log("Hello \"Basel\"")
10. (\n) => To make a new line
11. true = 1, false = 0
12. (null, undefined) = nothing
13. [anything] = Array.from(anything) => Make it an array
14. ...anything => (anything => array, object, set & others) => Separate the item in your array or set => Example: console.log([...["Ahmed"]]) => ["A", "h", "m", "e", "d"], console.log(...["Ahmed"]) => A h m e d
*/










// Advanced Informations //
/*
1. this => change if it in object => it's mean object, if it's in js file => it's mean window & in strict mode make it safer by it didn't show any info about window & others also
2. string.repeat(repeat_times) => تكرار النص عدد المرات المحدده
3. .replace(thing that you want to remove it, thing that you want to put it instead of another thing) => replace thing instead of another thing in it place
4. .split("place that you want it to cut from it") => Cut the string from place that you wrote & make it in list => Example: console.log(a.split(" ")) => ["Basel", "Amer"]
5. .join("place that you want it to cut from it") => like .split() but it put it normal not it list => Example: console.log(a.split(" ").join(" ")) => Basel Amer
6. Boolean(value) => check value if it true or false => Example: console.log(Boolean(100)) = true, console.log(Boolean(0)) = false

7. (||) in variables => check if value is true => put value => if value is false => put value that after (||) 
Example: 
    let price = 100;
    console.log(`The price is ${price}`) => print anything in price (0, null, undefined)
    console.log(`The price is ${price || 200}`) => check if price value == true => print price value, else (null or undefined or 0) => print 200 as a price value

8. (??) in variables => like (||) but this put the value that after it when variable value == (null or undefined only)
*/














// OOP //
/*
function User(id, userName, salary) {
    #salary;
    static count = 0;
    this.id = id;
    this.userName = userName;
    this.#salary = salary;
    Msg() {
        return `Hello ${this.userName}`;
    };
    getSalary() {
        return `Salary is ${this.#salary}`;
    }
};
class User {
    #salary;
    constructor(id, userName, salary) {
        static count = 0;
        this.id = id;
        this.userName = userName;
        this.#salary = salary;
    }
    Msg() {
        return `Hello ${this.userName}`;
    };
    getSalary() {
        return `Salary is ${this.#salary}`;
    }
}
userOne = new User(100, "Basel", 5000) => (userOne.id = 100, userOne.userName = "Basel", userOne.getSalary() = 5000)

# (this.id & this.userName & this.#salary are Properties, Msg() & getSalary() are Methods)

[Inherit]
class Name extends User {
    constructor(id, userName, permissions) {
        super(id, userName);
        this.permissions = permissions;
    };
};
userTwo = new Name(102, "Sayed", 1)
(Available => userTwo.id, userTwo.userName, userTwo.permissions, userTwo.Msg(), Not Available => userTwo.salary)

1. instanceof => Check if the variable inherit from this class or not (true or false) => Example: console.log(userOne instanceof User) => true 
2. .constructor => Check which class that variable inherit from it => Example: console.log(userOne.constructor) => User
3. static => make the class can access to it not constructor (without it constructor can access but class not) => Example: User.count => true, userOne.count => false
4. (#) => private property => properties that you can't access on it from out of class but you should make it variable with no value before => #property;
5. className.prototype => Methods (new methods or methods that it existed already) that any class inherit from this className can access on this methods
*/














// Json Programming Language //
/*
{
    "key" : "value"
}
value = number or string or array or object or (true or false)
[Ajax] (Asynchronous JavaScript and XML) => وهي تقنية تُستخدم لجعل صفحات الويب أكثر ديناميكية وتفاعلية من خلال إرسال واستقبال البيانات من الخادم دون الحاجة إلى إعادة تحميل الصفحة بالكامل
[API] => Get the json infos from page to your js file => (new XMLHttpRequest(), .open("GET", "URL"), .send(), .onreadystatechange = function () { if (this.readyState === 4 && this.status === 200) { this.responseText } })
1. JSON.parse("json_code") => transfrom json_code to javascript code
2. JSON.stringify("javascript_code") => transfrom javascript_code to json code
----------------------------------------------------------------------------------------------------------------------------------------
[Get the json infos from page by page_url]

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "page_url")
myRequest.send()
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
    }
}
----------------------------------------------------------------------------------------------------------------------------------------
3. new XMLHttpRequest() => start check the json info from the page but it doesn't print anything
4. .open("GET", "URL") => Open the page that you want to get json infos from it
5. .send() => to save this infos
6. .onreadystatechange => that infos saved in it by (readyState, status)
----------------------------------------------------------------------------------------------------------------------------------------
ReadyState => (Server take the page json infos)
[0] => infos don't get
[1] => Server Connect with page infos
[2] => Request Recieved
[3] => Processing Request
[4] => Request Finished And Response is ready
Status => (Get the json infos to your page)
[200] => Response Success
[404] => Error in Response
----------------------------------------------------------------------------------------------------------------------------------------
when readyState === 4 && status === 200 (mean that server connect with page json info successed & you can see this infos in your page)
[in .onreadystatechange]
this.readyState => (1 or 2 or 3 or 4) as I expained above
this.status => (200 or 404) as I explained above
this.responseText => have the page json infos => console.log(this.responseText) => print it in console
----------------------------------------------------------------------------------------------------------------------------------------
[Promise => يستخدم للتحقق من سلامة العمليات التي تحتاج الى وقت لتنفيذها والتأكد من سلامة العمليه وهذه العمليات مثل جلب بيانات من موقع او من قواعد البيانات]
let myPromise = new Promise(function (resolvedFunction, rejectedFunction) {
    let connect = true;
    if (connect) {
        resolvedFunction("Good Connection")
    } else {
        rejectedFunction("Bad Connection")
    }
}).then(
    (resolvedValue) => {console.log("Good Then")}
).catch(
    (rejectedValue) => {console.log("Bad Then")}
).finally(
    console.log("The Operation is Done")
)

new Promise(function) => create a promise for the operation => only check the 
connect = boolean_value => true or false connection with data
resolvedFunction => if connect is true
rejectedFunction => if connect is false
resolvedFunction & resolvedValue => connection true, rejectedFunction & rejectedValue => connection false

.then((resolvedValue) => { Code }) => what it will do if the operation succeed
.catch((rejectedValue) => { Code }) => What it will do if the operation failed
.finally(action) => make this action whether operation is success or failed

Promise.all([promise_1, promise_2, promise_3]) => Check is all promises is resolved return array with them but if one of promises is rejected return it only
Promise.allSettled([promise_1, promise_2, promise_3]) => Check if promises are resolved or rejected & return array that have promises with their status (resolved or rejected)
Promise.race([promise_1, promise_2, promise_3]) => print the first promise whether it resolved or rejected

async => async function () {Code} => make a normal function give promise results
await => async function () {console.log(await something)} => work only in async functions & it stops the code that after its line until doing its line first & it gets the results cleary & directly
######################################################################################################################################################################################################
[Get Data from any page by its link]

let getData = function (link) {
    return new Promise(resolve, reject) {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error("No Data Found"))
            }
        }
        myRequest.open("GET", link)
        myRequest.send()
    }
}
getData("https://api.github.com/repos/BaselAmerSaidSalman/Films_Library_Application").then((result) => {result.length = 10  return result}).then((result) => {console.log(result[0])}).catch(Error("No Data Found")).finally("The Operation is Done")

is equal to 

fetch(link).then((result) => { let myData = result.json() return myData }).then((myData) => { myData.length = 10  return myData}).then((myData) => {console.log(myData[0])}).catch(Error("No Data Found")).finally("The Operation is Done")
######################################################################################################################################################################################################
[Fetch API]
fetch(link).then((result) => { let myData = result.json() return myData }).then((myData) => { myData.length = 10  return myData}).then((myData) => {console.log(myData[0])}).catch(Error("No Data Found")).finally("The Operation is Done")
*/















// DOM //
/*
[Document Section]
1. .getElementById("html_tag_id") => Control on HTML tags that have this id
2. .getElementsByTagName("html_tag") => Control on this HTML tag
3. .getElementsByClassName("html_tag_class") => Control on HTML tags that have this class name
4. .querySelector("all of the above") => Control on one HTML tag that have this tag name or this class name (.class) or id name (#id)
5. .querySelectorAll("all of the above") => equal .querySelector but it get all elements not one only
6. .title => Control on the page title
7. .body => Control on the page body
8. .images => Control on the page images
9. .links => Control on the page links
10 .forms => Control on the page forms
11. .createElement("tag_name") => Create a tag element like div, p, h1 & others
12. .createAttribute("attribute_name") => Create attribute in document that you can put it in tag by using variable.setAttributeNode(attribute_variable)
13. .createComment("comment") => Create a comment into element
14. .createTextNode("content") => Create a content into element
15. .body.appendChild(tag_variable) => Add a tag_variable into page body
----------------------------------------------------------------------------------------------------------------------------------------
let myP = document.querySelector(".my-p")
[variable = element = myP in this example]

[Control on HTML file]
16. variable.innerHTML => Get the HTML code that in variable tag => Example: myP.innerHTML => Result: <p class="my-p"> Content </p>
17. variable.textContent => Get the content that in variable tag => Example: myP.textContent => Result: Content
18. variable.getAttribute("attribute_name") => Get the attribute_name value that in variable tag => Example: myP.getAttribute("class") => Result: my-p
19. variable.setAttribute("attribute_name", "attribute_value") => Create a new attribute in variable tag with an attribute_value but it doesn't print anything => Example: myP.setAttribute("title", "Basel") => Result in variable: <p class="my-p" title="Basel"> Content </p>
20. variable.setAttributeNode(attribute_variable) => Add the attribute that you create it in document by using document.createAttribute("attribute_name") into variable tag
21. variable.hasAttribute("attribute_name") => Check if the variable tag has an attribute_name or not (true or false)
22. variable.hasAttributes() => Check if the variable tag has attributes or not (true or false)
23. variable.removeAttribute("attribute_name") => Remove the attribute_name from the variable tag
24. variable.appendChild(variable_2) => Add variable_2 into variable
25. variable.children => Get all elements in variable tag
26. variable.childNotes => Get all childrens that is in variable tag (childrens like elements, comments, content & others)
27. variable.firstChild => Get the first child
28. variable.lastChild => Get the last child
29. variable.firstElementChild => Get the first child element
30. variable.lastElementChild => Get the last child element

[Condition]
31. variable.onclick = action => Make an action when you click on the variable tag like button
32. variable.oncontextmenu = action => Make an action when you click right click
33. variable.onmouseenter = action => Make an action when you click with mouse
34. variable.onmouseleave = action => Make an action when you leave mouse from the item
35. variable.onscroll = action => Make an action when you scroll in page
36. variable.onresize = action => Make an action when you change the width of your page
37. variable.onfocus = action => Make an action when you focus with your mouse on item like: when you click to write your email & password
38. variable.onblur = action => Make an action when you blur with your mouse in item like: when you finish writing your email & password and click with your mouse far from the form
39. variable.onsubmit = action => Make an action when you submit => Using with buttons & forms

40. variable.value => Get the value that written in variable
41. variable.value.length => Get the length of the value that written in variable

[Action]
42. variable.click => Click on the item when you do the condition
43. variable.focus => Focus on the item when you do the condition
44. variable.blur => Blur from the item when you do the condition
variable.addEventListener("condition", function) => Make a function when you do the condition => (important => We can make it on item that didn't created yet & the function will done when I do the condition when item create)
variable.removeEventListener("condition", function) => Remove the function from variable when you do the condition

[Control on Classes]
45. variable.classlist => Show all classes in variable
46. variable.classlist.length => Get the length of classes in variable
47. variable.classlist.contains("class_name") => Check if class_name is in classes in variable or not (true or false)
48. variable.classlist.item("index") => Get the class that have an index in classes in variable
49. variable.classlist.add("class_names") => Add one or more classes into variable classes
50. variable.classlist.remove("class_names") => Remove one or more classes from the variable classes
51. variable.classlist.toggle("class_name") => Check if the class_name is in variable classes it will remove it, if not it will add it

[Control on CSS file]
1. Control on CSS styles in JS file:
52. variable.style.any_css_style = "value" => Example: myP.style.color = "red", myP.style.backgroundColor = "red"
53. variable.style.removeProperty("css_style") => Remove the css style from element => Example: variable.style.removeProperty("color")
54. variable.style.setProperty("css_style", "value", "priority") => Set the css style into element => Example: variable.style.setProperty("color", "red", "important")
55. variable.cssText = "css_style: value;" => Example: myP.cssText = "color : red; background-color : red"

2. Control on CSS style in CSS file:
56. document.styleSheets[0].rules[0].style.any_css_style = "value" => (styleSheets => CSS files, rules => CSS styles in CSS file)

[Deal with Elements]
57. variable.before(another_element or any_string) => put another_element or any_string before the variable
58. variable.after(another_element or any_string) => put another_element or any_string after the variable
59. variable.prepend(another_element or any_string) => Prepend another_element or any_string as a first child the variable
60. variable.append(another_element or any_string) => Append another_element or any_string as a last child in the variable
61. variable.remove() => Remove the variable from the page & HTML file
[When variable = child]
62. variable.nextSibling() => Get the next child element or not
63. variable.nextElementSibling => Get the next child element
64. variable.previousSibling => Get the previous child element or not
65. variable.previousElementSibling => Get the previous child element
66. variable.parentElement => Get the parent element of the variable

[Cloning (Copy Element)]
67. variable.cloneNode(true or false) => Make a copy from the variable => (true => make a copy with all variable childs & attributes, false => make a copy of the variable line only)

[Access on variable id or class]
68. variable.id = "new_value" => Change the id value in variable to new_value
69. variable.className = "new_value" => Change the class value in variable to new_value
*/
















// BOM [Browser Object Model] //
/*
1. alert(message) => make a popup message to user to tell him something
2. confirm(message) => make a popup message to user to confirm something
3. prompt(message, default_message) => make a popup message to write an information that you want it from him 
4. setTimeout(function, time(ms), arguments) => do the function after time that you wrote (doing function one time) => Example: function Msg(user) { console.log(`Hello ${user}`) } =>  let counter = setTimeout(Msg, 3000, "Basel") => Result: "Hello Basel"
5. clearTimeout(setTimeout_variable) => stop the setTimeout doing => Example: clearTimeout(counter)
6. setInterval(function, time(ms), arguments) => like setTimeout but it repeat it infinite
7. clearInterval(setInterval_variable) => stop the setInterval doing

[URL]
8. location.href => Get or Set URL or hash(#) for your page
9. location.host => Get or Set the all page URL like (https://www.google.com)
10. location.hostName => Get or Set the domain name only for your page like (google.com)
11. loaction.protocol => Get or Set the protocol of your page (protocol => http, https)
12. location.hash => Get or Set the hash of your page (hash mean when you go to any place in your website page (#section))
13. location.reload() => Reload your page
14. location.replace(new_url) => Replace the new_url in the place of old link & remove the old link from the storage
15. location.assign(new_url) => like replace() but it don't remove the old link from the storage

[Window Section]
16. window.open(url, target, features, history_replace(true or false)) => open the url with target (_blank => in another page, _self => in the same page) with features (width, height, left, top) => Example: window.open("https://www.google.com", "_blank", "width=400,height=400,left=10,top=100", true)
17. window.close() => Close the window that you open it with window.open() only
18. window.stop() => Stop the window loading
19. variable.focus() => Focus on the window that in variable
20. window.print() => print the page (in a printer)
21. window.scroll({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => (in all operating system expect safari in mac) => Scroll in the page to the position (one time) => Example: window.scroll((left:200,top:100)) => in one time scroll 200px from left to right & 100px from top to bottom
22. window.scrollTo({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => like scroll but it in all operating systems 
23. window.scrollBy({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => (in all operating systems) => repeat scroll with position (infinite times) => Example: window.scrollBy((left:200,top:100)) => in each time scroll 200px from left to right & 100px from top to bottom
24. window.scrollX => the value of scrolling in x-axis
25. window.scrollY => the value of scrolling in y-axis

[LocalStorage => in Application Inspect] 
Page Data Memory => Save the keys in it if you reload or exist from the page
26. window.localStorage.setItem("key", "value") => Set the key & it's value in the storage of page to use it later in your page
## window.localStorage.setItem("key", "value") = window.localStorage.setItem.key = "value" = window.localStorage.setItem['key'] = "value"
27. window.localStorage.getItem("key") => Get the value of the key
28. window.localStorage.key(key_index) => Get the key of this index
29. window.localStorage.removeItem("key") => Remove this item (key & value) from the storage
30. window.localStorage.clear() => Remove all items from the storage

[SessionStorage => in Application Inspect]
Page Data Memory => Save the keys if you reload page but not when you open it in a new tab or exist from it
All methods that in local storage like (getItem, setItem, removeItem, clear, key)

[Pages History]
31. history.length => number of pages in history
32. history.forward() => go to next page in history
33. history.back() => go to page the previous it
34. history.go(number) => go to next number of page of previous number of pages => (number = 1 => next page, 2 => next next page, -2 => previous previous page)

*/
















// Date & Time //
/*
1. let dateNow = new Date() => (dateNow => Get date, time at the moment)
2. Date.parse("Time Format") => Get the number of millseconds from time that you wrote to now
3. Date.now() => Get number of millyseconds from 1/1/1970 to now
4. performance.now() => Get the number of microseconds from loading the page to this line code & It uses to get the time that code made in it

[Get]
5. dateNow.getTime() => Get number of millyseconds from 1/1/1970 to now
6. dateNow.getDate() => Get the day in month
7. dateNow.getFullYear() => Get the year
8. dateNow.getMonth() => Get the month but it starts from zero not one (january => 0, february => 1, march => 2)
9. dateNow.getDay() => Get the day in week but week starts from sunday & zero not one (sunday => 0, monday => 1, tuesday => 2)
10. dateNow.getHours() => Get hours that in your watch
11. dateNow.getMinutes() => Get minutes that in your watch
12. dateNow.getSeconds() => Get seconds that in your watch

[Set]
13. dateNow.setTime(milliseconds) => Set number of millyseconds that you want
14. dateNow.setDate(day_of_the_month) => Set the day in month
15. dateNow.setFullYear(year) => Set the year
16. dateNow.setMonth(number_of_month_starts_by_zero) => Set the month by writing its number starts from zero (january => 0, february => 1, march => 2)
17. dateNow.getHours(hours) => Set time hours
18. dateNow.getMinutes(minutes) => Set time minutes
19. dateNow.getSeconds(seconds) => Set time seconds

[Date & Time Format] => (25/10/1982)
"Oct 25 82"
"10-25-1982"
"10/25/1982"
"10 25 1982"
"1982 10 25 2 50 30" => الساعه 2 و 50 دقيقه و 30 ثانيه في يوم 25 من شهر نوفمبر سنه 1982
"1982-10-25T6:10:00Z" => Set the date & time at the greenwich (جرينيتش) line
*/














// Array //
/*
let array = [10,20, "100", "15", "Basel"]
1. Array.isArray(array_name) => check if it is array or not => (true, false) => Example: console.log(Array.isArray([1,2,3,4])) => true, console.log(Array.isArray("Basel")) => false
2. Array.from(anything) => Make the array from your input (anything)
3. .lenght = number => make the number of array items = 3 items
4. .unshift("") => Add items to first in the array => Example: array.unshift("Basel") => ["Basel"]
5. .push("") => Add items to end in the array => Example: array.push("Ahmed") => ["Basel", "Ahmed"]
6. .shift() => Delete first item in the array & storage it in it => Example: array.shift() => delete "Basel" => ["Ahmed"]
7. .pop() => Delete last item in the array & storage it in it => Example: array.pop() => delete "Ahmed" => ["Basel"]
8. .sort() => Arragement the array (from 0 -> 9, then A -> Z) => Example: array.sort() => [10, "15", "100", 20, "Basel"]
9. .reverse() => Reverse the array => Example: let array = [10,20, "100", "15", "Basel"] => array.sort().reverse() => ["Basel", 20, "100", "15", 10], array.reverse() => ["Basel", "15", "100", 20, 10]
10. .slice(start_index, end_index) => Slice the array => Example: array.slice(0, 4) => [10, 20, "100", "15"]
11. .splice(start_index, deleted_items_number, add_items) => (Deleted_Items => from start_index, Add_Items => into start_index) => Example: array.splice(0, 2, "Seif", "Sayed") => ["Seif", "Sayed", "100", "15", "Basel"]
12. .concat(arrays) => Connect all arrays in one array or Add one array or above into another array => let a = [1,2,3,4,5], let b = [6,7,8,9,10] => let c = a.concat(b) => [1,2,3,4,5,6,7,8,9,10]
l3t a = [10,20,30,40,50];
14. .map(function (element, index, array) { Code }) => Doing anything you write in the array like add elements by using function & put the result in new array => a.map(function (element) { return element % 2 === 0 ? element + element : continue; }) => Result = [40,60], a.map(function (element) { return element % 2 === 0 }) => Nothing
15. .filter(function (element, index, array) { Condition Code }) => Filtering the array by using condition & put results in new array => a.filter(function (element) { return element % 2 === 0 }) => Result = [20,40]
16. .reduce(function (accumulator, value, index, array) { Code }, accumulator) => (accumulator => first value, value => next value in array) => Reduce the results to one result => Example: a.reduce(function (acc, value, index, array) { return acc + value }) => Result: 150
17. .forEach(function (element, index, array) { Code }) => Doing an action on array items without get results value like doing something when you click on button
18. .copyWithin(target_index, start_index, end_index) => Copy the items that between start_index & end_index to position target_index in the array
19. .some(function, argument[optional]) => Check if one item in the array is achieve condition or not (true or false) => Example: [1,2,3,4,5].some(function(e) { return e === 20 }) => false (because any number in the array is equal 20)
20. .every(function, argument[optional]) => Check if all items in the array is achieve condition or not (true or false)

[Destructuring Arrays]
21. let [a, b, ,c, d] = ["Basel" ,"Ahmed", "Sayed", "Mohammed"] => (a = "Basel", b = "Ahmed", c = "Mohammed", d = undefined)
22. let [, , [a, , [, b]]] = ["Basel", "Ahmed", ["Ibrahim", "Mohammed", ["Osama", "Seif"]]] => (a = "Ibrahim", b = "Seif")
23. Swaping => let book = "video", let video = "book" => [book, video] = [video, book] => (book = "book", video = "video")
*/














// Sets //
/*
[Normal Set]
1. It's an array that have only unique items (not repeated items)
2. Array can have repeated items but set no & array can access to any item in it by index but set no
3. To make a set from array => new Set(array)
4. .size => The size of set (number of items in it)
5. .add(item) => Add item to set
6. .delete(item) => Delete item from set
7. .clear() => Delete all items from set
8. .has(item) => Check if set has this item or not
9. .keys() => Get the iterator
10. .value => Get the set 
11. .keys().next().value => Get the set item (one by one)
12. .forEach(function (element) { Code }) => Access on each item 

[Weak Set]
9. To make it from object => new WeakSet(object)
10. Don't have (.size, .clear(), .keys(), .value, .forEach())
*/














// Object //
/*
[object in JS like dictionary in python]
let object_name = {
    variable_name: value,
    function_name: function () { Code },
};
variable_name = property has writable, enumerable & configurable values

1. let object_name = { Code }; = let object_name = new Object({ Code });
2. console.log(object_name.variable_name) = console.log(object_name["variable_name"])
3. let myVar = "country" => let object_name = { country: "Egypt" } => object_name.country = object_name[myVar] = Egypt
4. to add anything in the object use => object_name.variable_name = value => Example: to add age in object => object_name.age = 20;, object_name["age"] = 20;
5. let object_name = Object.create(object) => make a copy from old object & you can make your changes on it.
6. let object_name = Object.assign(target_object, source_objects) => make a copy of target_object & add the informations from source_objects into target_object

[Destructuring Object]
let user = { theName: "Basel", theAge: 17, theTitle: "Developer", theCountry: "Egypt", skills: { HTML: 70, CSS: 80 } } 
7. let {theName, theAge, theTitle, theCountry} = user; => Result: (theName = "Basel", theAge = 17, theTitle = "Developer", theCountry = "Egypt")
8. let [theName, theAge, theTitle, theCountry] = ["Osama", 39, "Programmer", "USA"] => (Make the values in object (user)) => ({theName, theAge, theTitle, theCountry} = user);
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
9. let {theName, theAge, theTitle, theCountry} = user; => (theName = "Basel", theAge = 17, theTitle = "Developer", theCountry = "Egypt")
10. let {Name, Age, Title, Country} = user; => Result: (Error) because Name, Age, Title, Country isn't defined
10. let {theName: Name, theAge: Age, theTitle: Title, theCountry: Country} = user; => Result: (Name = "Basel", Age = 17, Title = "Developer", Country = "Egypt")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11. (Access to HTML in skills in user) => let {skills: {HTML}} = user; = let {HTML} = user.skills;
12. Object.defineProperty(object_name, key, { writable: (true or false), enumerable: (true or false), configurable: (true or false), key_value: value}) => (writable => قابلية تغيير القيمة من الخارج, enumerable => قابل استخدام في اللوب, configurable => قابليه اعادة التعريف (redefine))
13. Object.getOwnPropertyDescriptor(object_name, key) => get the writable, enumerable, configurable values in this key
14. Object.getOwnPropertyDescriptors(object_name) => get the writable, enumerable, configurable values for each key in object 
*/












// Map //
/*
1. like object but it's better than it in performance, loop, get items by size & others
2. You can add keys like (function, object, any data types)
3. To make it => new Map([ [key, value], [key, value], ])
4. .size => Get the size of map (number of items)
5. .get(key) => get the value of this key
6. .set(key, value) => Add the key & its value in map
7. .delete(key) => Delete the key that you wrote & its value
8. .clear() => Delete all keys & values in map
9. .has(key) => Check if map has this key or not (true or false)
10. .forEach(function (element) { Code }) => Access on each item 

[Weak Map]
11. like map but it isn't have (.size, .clear(), .keys(), .value, .forEach())
12. Don't save the data in it in the memory
*/










// Regular Expression //
/*
let a = "Hello Basel, I'm basel"
1. pattern => any word that will researched it in the variable like => /Basel/
2. modifiers => (i => capital caracters or small, g => global means any word that equal your pattern, m => in all lines)
3. /pattern/modifiers = new RegExp("pattern", "modifiers")
4. .match() => variable.match(pattern) => Get all characters that equal your pattern
5. .test() => /pattern/modifiers.test(word) => Test the word if it equal pattern or not (true or false)
6. variable.replace("word_1", "word_2") => replace the first word_1 to word_2 in the variable => (word_1 or pattern => "A" or /A/)
7. variable.replaceAll("word_1", "word_2") => replace all word_1 to word_2
----------------------------------------------------------------------------------------------------------------------------------------
Examples:
a.match(/Basel/) => Result: Basel index(6)
a.match(/basel/) => Result: basel index(17)
a.match(/Basel/i) = a.match(/basel/i) => Result: Basel index(6)
a.match(/Basel/ig) => Result: ["Basel", "basel"]
a.match(/Basel/igm) => Result: ["Basel", "basel"]
----------------------------------------------------------------------------------------------------------------------------------------
[Ranges]
8. (x|y) => x or y
9. [0-9] => from 0 to 9
10. [^0-9] => any characters that not from 0 to 9
11. [a-z] => any small characters from a to z
12. [^a-z] => any characters that not from a (small) to z (small) => including capital characters
13. [A-Z] => any capital characters from A to Z
14. [^A-Z] => any characters that not from A (capital) to Z (capital) => including small characters
15. /[a-zA-z]/ = /[a-z]/i => any character (small or capital) from a to z
16. /[^a-zA-z]/ = /[^a-z]/i => any character that not a letter
17. [abc] => a & b & c characters. [^abc] => any character that not a, b, c
18. . => match any characters except new line

[Classes]
19. \w => match any word [a-z, A-Z, 0-9 & underscore]
20. \W => opposite \w => match all symbols (@, #, $, %, ^, &, !)
21. \d => match any digit (number) [0-9]
22. \D => opposite \d => match all characters not digit (not numbers)
23. \s => match white spaces
24. \S => opposite \s => match all characters except white spaces
25. \b => match at the beginning or end of the word => (Begin => "HelloBasel".match(/\bHello/ig), End => "HelloBasel".match(/Basel\b/ig))
26. \B => opposite \b => match not at the beginning or end of the word

[Quantifiers]
27. \ => to know the computer that you write the character that after it
28. n+ => One or more (n = from 5 to 24 in this page)
29. n* => Zero or more
30. n? => One or zero (موجودة او لا)
31. n{x} => (x = number) => Number of 
32. n{x, y} => Range      (x, y are numbers)
33. n{x, } => At least
34. $ => End with something (end of word)
35. ^ => Start with something
36. ?= => Followed by something (something is after the pattern of the word (maybe end of word or not))
37. ?! => opposite ?= => Not followed by something
*














// Conditions //
/*
// If Conditions //
Above of one condition use (&& => and, || => or)
if (first_condition) {
    Orders that will be achieved when the first_condition is true
}
else if (second_condition) {
    Orders that will be achieved when the first_condition is false & second_condition is true
    if (first_nested_condition) {
        Orders that will be achieved when second_condition & first_nested_condition is true
    }
}
else if (third_condition) {
    Orders that will be achieved when the first_condition & second_condition is false & third_condition is true
}
else {
    Orders that will be achieved when all conditions is false
}

Summaries Way:
first_condition ? if first_condition is true : second_condition ? if second_condition is true : third_condition ? if third_condition is true : if first_condition & second_condition & third_condition are false


// Switch Conditions //
switch (variable) {
    case first_condition:
        Order that will be achieved when first_condition is true
        break;
    case second_condition:
        Order that will be achieved when first_condition is false & second_condition is true
        break;
    case third_condition:
        Order that will be achieved when first_condition & second_condition are false & third_condition is true
        break;
    default:
        Order that will be achieved when first_condition & second_condition & third_condition are false
        break;
}
*/












// Loops //
/*
// For Loop //
for (condition) {                                
    Code                                                                               
}

Example:
let i = 0;
for (;i < 10;) {
    console.log(i)
    i += 1
}
((mainloop:) => Before the main loop, (nestedloop:) => Before the nested loop) (continue, break like python)


// While Loop //
while (condition) {
    Code
}

Example:
let i = 0;
while (;i < 10;) {
    console.log(i)
    i += 1
}


// Do While Loop //
do {
    Code
} while (condition)

Example:
let i = 0;
do{
    console.log(i)
    i += 1 
} while (;i < 10;)


Compare between for, while & do while loop:
1. for => doing the code until the condition is false
2. while => if condition is true doing the code until it is false but when the condition is false already don't doing anything (Check condition then do)
3. do while => doing the code when condition is true or false but repeat code when the condition is true only. (do the first time then check condition to repeat or no)
*/













// Functions //
/*
// Normal Function //
function function_name(parameter) {
    Code
}
Example:
function sayHello(userName) {
    console.log(`Hello ${userName}`)
}
sayHello("Basel") => result: Hello Basel


// Arrow Function (=>) //
You can use it only when you have one line code that be achieved when condition is true
Example:
let number = function (num) {
    return num;                           ===>                  let number = num => num;
}

// High Order Functions //
let a = [10,20,30,40,50];
1. ...parameter_name => infinite parameters that have the same data type with this parameter like numbers => (this parameter should be last parameter & should be one only not two parameters ike this)
2. array.map(function (element, index, array) { Code }) => Doing anything you write in the array like add elements by using function & put the result in new array => a.map(function (element) { return element % 2 === 0 ? element + element : continue; }) => Result = [40,60], a.map(function (element) { return element % 2 === 0 }) => Nothing
3. array.filter(function (element, index, array) { Condition Code }) => Filtering the array by using condition & put results in new array => a.filter(function (element) { return element % 2 === 0 }) => Result = [20,40]
4. array.reduce(function (accumulator, value, index, array) { Code }, accumulator) => (accumulator => first value, value => next value in array) => Reduce the results to one result => Example: a.reduce(function (acc, value, index, array) { return acc + value }) => Result: 150
5. array.forEach(function (element, index, array) { Code }) => Doing an action on array items without get results value like doing something when you click on button

a.map(function (element) { return element + element }) => Result: [20, 40, 60, 80, 100] != a.reduce(function (acc, value, index, array) { return acc + value }) => Result: 150
a.map(function (element) { return element % 2 === 0 ? element : continue;}) = a.filter(function (element) { return element % 2 === 0 }) => Result = [20,40]


[Generator Function (*)]
function* generator_function_name() { yield_1: value_1; yield_2: value_2 }
function* generator_function_name() {let i = 0; while (true) { yield: i++ }}
1. yield* => to get each value in this yield
2. generator_function_name().next() => the value that is next to this value
3. generator_function_name().return() => return values to start again & make all values that next this value undefined
4. export => put it before function or variable that you want to use it in another file
5. import default_name_if_exists{function or variable} from "file path that you will import from it" => write it if you want to use variable or function from another file
6. export default generator_function_name() => export the generator_function_name() as a default name
7. import * as all_name from "file_path" => import all exported info from the file_path & make it in variable (all_name)
*/
















// Math //
/*
// Arithmetic Operators //
1. Add => (+) => console.log(10 + 20)
2. Minus => (-) => console.log(10 - 20)
3. Multiplication => (*) => console.log(10 * 20)
4. Devide => (/) => console.log(10 / 5)
5. Power => (**) => console.log(4 ** 2)
6. Increment => (++) => [console.log(1 ++) => print then increase, console.log(++ 1) => increase then print]
7. Decrement => (--) => [console.log(1 --) => print then decrease, console.log(-- 1) => decrease then print]

8. Unary Plus (+) => [Before Number that in "" to make it number] => use with (int, float, null, true, false)
9. Unary Negative (-) => [Before Number that in "" or not & make it a negative number] => use with (int, float, null, true, false)

10. 1000000 = 1_000_000 = 10e6 = 10 * 6 = 10 * 10 * 10 * 10 * 10 * 10


// Methods //
1. Number(string_number) => To make something that in () to number
    1. Number.MAX_VALUE => اعلى رقم في JS => console.log(Number.MAX_VALUE)
    2. Number.MIN_VALUE => اقل رقم في JS => console.log(Number.MIN_VALUE)
    3. Number.MAX_SAFE_INTEGER => اعلى رقم امن لاستخدامه في هذه اللغه اي لا يعطي نتائج خاطئه => console.log(Number.MAX_SAFE_INTEGER)
    4. Number.MIN_SAFE_INTEGER => اقل رقم امن لاستخدامه في هذه اللغه اي لا يعطي نتائج خاطئه => console.log(Number.MIN_SAFE_INTEGER)
    5. Number.isInteger() => التاكد من ان ما بين القوسين عدد صحيح => console.log(Number.isInteger("100"))
    6. Number.isNAN() => التاكد من ان ما بين القوسين لا يعطي قيمه عند تنفيذه مثل قسمة اسم شخص على عدد => console.log(Number.isNAN("Basel" / 20))

2. parseInt(number) => give the number that in "" or float and make it integer number => ("100 Basel") => Give: 100 as a interger
3. parseFloat(number) => equal parseInt but with float numbers => ("100.500 Basel") => Give: 100.5
4. Math.round(number) => Give the nearest biggest or smallest integer number => (99.2 => 99, 99.5 => 100)
5. Math.ceil(number) => Give the nearest biggest interger number => (99.2 => 100, 99.5 => 100)
6. Math.floor(number) => Give the nearest smallest integer number => (99.2 => 99, 99.5 => 99)
7. Math.trunc(number) => like floor but it gives the integer number directly without seeing the numbers after (.) => (99.2 => 99, 99.5 => 99)
8. Math.min(numbers) => give the smallest number in numbers => console.log(Math.min(100,20,30,40,"9.9",40)) => result: 9.9
9. Math.max(numbers) => give the largest number in numbers => console.log(Math.max(100,20,30,40,"9.9",40)) => result: 100
10. Math.pow(number1, number2) => Give number2 a power of number1 => console.log(Math.pow(4,2)) = console.log(4 ** 2) = 16
11. (number).toString() => change the number to string => console.log((100).toString())
12. (float_number).toFixed(number) => Give number of numbers that in float_number that after(.) => console.log((100,65485).toFixed(2)) = 100.65 only
*/













// String //
/*
a = "Basel Amer"

1. Slicing => variable_name[index] => Example: console.log(a[2]) => "s"
2. .charAt(index) => Give the character that in variable_name that have the index => Example: console.log(a.charAt(2)) => "s"
3. .length => The lenght of variable_name => Example: console.log(a.length) = 10
4. .trim() => remove spaces => Example: console.log(a.trim()) => "BaselAmer"
5. .toUpperCase() => Make the letters that in variable_name to upper => Example: console.log(a.toUpperCase()) => "BASEL AMER"
6. .toLowerCase() => Make the letters that in variable_name to lower => Example: console.log(a.toLowerCase()) => "basel amer"
7. .indexOf("word", start_index) => Get the index of your word in variable_name & it start from beginning => Example: console.log(a.indexOf("e", 0)) => 3
8. .lastIndexOf("word", start_index) => like indexOf() but it start from end => Example: console.log(a.indexOf("e", 0)) => 8
9. .slice(index_1, index_2) => Get the characters the start from index_1 to index_2 => Example: console.log(a.slice(0, 4)) => "Base"
10. .substring(index_1, index_2) = .slice but without negative value & if you write index_2 > index_1 it will be true too => console.log(a.substring(2, 6)) = Example: console.log(a.substring(6, 2)) => give the characters from index 2 to index 6
11. 
12. .includes("letter or word", start_index) => check if the letter or word is in the letters that between start_index & sentence end in variable_name => Example: console.log(a.includes("a", 0)) => true, console.log(a.includes("a", 4)) => false
13. .startsWith("letter or word", start_index) => check if the sentence that start with start_index is started with the letter or word => Example: console.log(a.startWith("Ba", 0)) => true, console.log(a.startWith("Ba", 4)) => false
14. .endsWith("letter or word", lenght) => check if that sentence that have length that you wrote is ended with the letter or word => Example: console.log(a.endWith("el", 5)) => true, console.log(a.endWith("Ba", 5)) => false  =>  5 = Basel
*/













// Operators //
/*
All of companison operators give (true or false)
// Comparison Operators //
1. (=) => Make thing equal thing => let a = 20;
2. (==) => check if first value equal another value or not (value only) => Example: console.log(10 == "10") => true
3. (!=) => check if first value not equal another value or not (value only) => Example: console.log(10 != "10") => false
4. (===) => check if first value & type equal another value or type or not (value & type) => Example: console.log(10 === "10") => false (equal in value)
5. (!==) => check if first value & type not equal another value or type or not (value & type) => Example: console.log(10 !== "10") => true (equal in value not type)
6. (>) => chect if first value is greater than the another value (value not type) => Example: console.log("10" > 20) => false
7. (>=) => chect if first value is greater than or equal the another value (value not type) => Example: console.log("10" >= 20) => true
8. (<) => chect if first value is smaller than the another value (value not type) => Example: console.log("10" < 20) => true
9. (<=) => chect if first value is smaller than or equal the another value (value not type) => Example: console.log("10" <= 20) => true

// Logical Operators //
1. (! => not) => opposite the result => Example: !true = false, !false = true
2. (&& => and) => all conditions should be true to give true => Example: console.log(10 > 20 && 5 < 50) = false
3. (|| => or) => only one condition in conditions should be true to be true => Example: console.log(10 > 20 || 5 < 50) = true
*/














// Data Types //
/*
typeof => know the type of data
1. String => console.log(typeof "Osama")
2. Number (int, float, NAN) => console.log(typeof 5000), console.log(typeof 5.5)
3. Object (Array[]) => console.log(typeof ["Osama", 50, 2.5, "Basel"])
4. Object (null) => console.log(typeof null)
5. Object ({}) => console.log(typeof {name : "Basel", age: 17})
6. Boolean (true, false) => console.log(typeof true), console.log(typeof false)
7. undefined => console.log(typeof undefined)
*/











// Variables //
/*
1. var => var variable_name = variable_value 
2. let => let variable_name = variable_value
3. const => const variable_name = variable_value
---------------------------------------------------------------------------------------------------------------------
Compare between var, let & const:
1. var:
    1. Access before Declare(undefined) => لا يعطي خطا عند استخدام المتغير قبل تعيينه
    2. Redeclare(Yes) => يسمح بتعيين قيمتين مختلفتين لنفس المتغير في سطرين مختلفين
    3. Variable Scope Drama [Added to window] (Yes) => when you like this code line => window.a
    4. لو انت معرف متغير بيه خارج اف الشرطيه وبيعدين جوا اف الشرطيه عملت للمتغير قيمه تانيه وجيت تطبعه برا بعد اف الشرطيه هيطبع القيمه الجديده اللي انت عملتها جو اف الشرطيه 
2. let & const:
    1. Access before Declare(Error) => يعطي خطا عند استخدام المتغير قبل تعيينه
    2. Redeclare(No) => لا يسمح بتعيين قيمتين مختلفتين لنفس المتغير في سطرين مختلفين
    3. Variable Scope Drama [Added to window] (No) 
    4. لو انت معرف متغير بيه خارج اف الشرطيه وبيعدين جوا اف الشرطيه عملت للمتغير قيمه تانيه وجيت تطبعه برا بعد اف الشرطيه هيطبع القيمه الاصليه كأنك معملتش اف الشرطيه اصلا
---------------------------------------------------------------------------------------------------------------------

4. You can use this variable in any place in your JS file:
var user = "Basel";
console.log(user)

5. You can use the id in HTML tag as a variable in JS file:
in HTML => <h1 id="header_h1"> Hello </h1> => in JS file => console.log(header_h1)

6. when you make a variable name with 2 words or above => camalCase => var userName = "Basel";
7. console.log(`Hello ${variable_name}`) = console.log("Hello" +  variable_name)
*/














// Window //
/*
1. .alert() => اظهار رساله في منطقه عائمة على الشاشه => window.alert("massage");
2. .close() => Close the page => window.close();
3. .onload = action => Make an action when your page is loading
4. .open(url, target, features, history_replace(true or false)) => open the url with target (_blank => in another page, _self => in the same page) with features (width, height, left, top) => Example: window.open("https://www.google.com", "_blank", "width=400,height=400,left=10,top=100", true)
5. .close() => Close the window that you open it with window.open() only
6. .stop() => Stop the window loading
7. variable.focus() => Focus on the window that in variable
8. .print() => print the page (in a printer)
9. .scroll({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => (in all operating system expect safari in mac) => Scroll in the page to the position (one time) => Example: window.scroll((left:200,top:100)) => in one time scroll 200px from left to right & 100px from top to bottom
10. .scrollTo({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => like scroll but it in all operating systems 
11. .scrollBy({ left:value, top:value, right:value, bottom:value, behavior:"smooth" }) => (in all operating systems) => repeat scroll with position (infinite times) => Example: window.scrollBy((left:200,top:100)) => in each time scroll 200px from left to right & 100px from top to bottom
12. .scrollX => the value of scrolling in x-axis
13. .scrollY => the value of scrolling in y-axis
14. window.localStorage.setItem("key", "value") => Set the key & it's value in the storage of page to use it later in your page
## window.localStorage.setItem("key", "value") = window.localStorage.setItem.key = "value" = window.localStorage.setItem['key'] = "value"
15. window.localStorage.getItem("key") => Get the value of the key
16. window.localStorage.key(key_index) => Get the key of this index
17. window.localStorage.removeItem("key") => Remove this item (key & value) from the storage
18. window.localStorage.clear() => Remove all items from the storage
*/








// Document // 
/*
1. .write("") => Write anything in page => document.write("Hello");
2. .getElementById("html_tag_id") => Control on HTML tags that have this id
3. .getElementsByTagName("html_tag") => Control on this HTML tag
4. .getElementsByClassName("html_tag_class") => Control on HTML tags that have this class name
5. .querySelector("all of the above") => Control on one HTML tag that have this tag name or this class name (.class) or id name (#id)
6. .querySelectorAll("all of the above") => equal .querySelector but it get all elements not one only
7. .title => Control on the page title
8. .body => Control on the page body
9. .images => Control on the page images
10 .links => Control on the page links
11 .forms => Control on the page forms
*/






// Console //
/*
1. log("normal_message", "CSS Code") => Write a normal message in console section from JS file => (%c => تحديد الكلام المراد عمل التنسيقات عليه عن طريق وضع هذه العلامة قبله) => console.log("Hello From %cJS File", "color: red; font-size: 40px");
2. error("error_message") => Write an error message in console section from JS file => console.error("Error");
3. table([Array]) => Write an array as a table in console section from JS file => console.table(["Ahmed", "Basel", "Seif"]);
*/