var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var n = 0;

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	let List = ul.appendChild(li); //adds li to ul
	storeList(List);
	n += 1;
	input.value = ""; //reset text input field


	
	// ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem); 
    // later TODO: add link to be able to click on and redirect to achieve/canvas review questions, separate button for "checking off"


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		listItem = li.textContent;
		console.log(listItem);
		localStorage.removeItem(listItem.slice(0, -2));
		li.classList.add("delete")
		listItem = "";
		console.log(listItem);
		console.log(localStorage);
	}

	//START STRIKETHROUGH
	function crossOut() {
		li.classList.toggle("done");
	}

	var cBtn = document.createElement("button");
	cBtn.appendChild(document.createTextNode("✓"));
	li.appendChild(cBtn);
	cBtn.addEventListener("click", crossOut);
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		createListElement();
	} 
}

function storeList(List){
	localStorage.setItem(n, List);
}

function checkLocalStorage(){
	if (localStorage.length > 0) {
		for (var i = 0; i < localStorage.length; i++) {
			var li = document.createElement("li");
			console.log(li);
			if (localStorage.key(i) === "__noir_config") {
				console.log("skipping noir config file, as it is not part of the TODO list.");
			}else{
				console.log(localStorage.key(i));
				li.appendChild(document.createTextNode(localStorage.key(i)));
				ul.appendChild(li);
			
			

				// ADD DELETE BUTTON
				var dBtn = document.createElement("button");
				dBtn.appendChild(document.createTextNode("X"));
				li.appendChild(dBtn);
				dBtn.addEventListener("click", deleteListItem); 
				// later TODO: add link to be able to click on and redirect to achieve/canvas review questions, separate button for "checking off"


				//ADD CLASS DELETE (DISPLAY: NONE)
				function deleteListItem(){
					listItem = li.textContent;
					console.log(listItem);
					localStorage.removeItem(listItem.slice(0, -2));
					li.classList.add("delete")
					listItem = "";
					console.log(listItem);
					console.log(localStorage);
					
					
				}
				//START STRIKETHROUGH
				function crossOut() {
					li.classList.toggle("done");
				}

				var cBtn = document.createElement("button");
				cBtn.appendChild(document.createTextNode("✓"));
				li.appendChild(cBtn);
				cBtn.addEventListener("click", crossOut);
			}

		}
	}
}

checkLocalStorage();

console.log(localStorage);
console.log(ul);

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//later TODO: ensure items in list stay after refresh of page/reopening of page

