const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
let cout = 1;
const inputListName = document.getElementById("list-name");
let lists = ["список 1", "список 2", "список 3"];
const btn_clear = document.querySelector(".button_clear");
let cards = [];

for(let i in lists){
  outputList(lists[i]);
}

btn_clear.addEventListener("click",(event)=>{

  desk.innerHTML = "";
  cout = 1;
})

function addList(){
  event.preventDefault();
  let listName = document.getElementById("list-name").value;
  if (listName == "") {
    listName += "Новый список " + cout;
    cout++;
  }
  outputList(listName);
  lists.push(listName);
  outputListInConsole();
  pushToDB(lists);
}

function pushToDB(lists){
  localStorage.lists = JSON.stringify(lists);
}

function outputListInConsole(){
  for(let i in lists) {
    console.log(lists[i]);
  }
  console.log(lists.length);
}

function outputList(listName){
  let list = document.createElement("div");
  list.classList.add("list");
  let header = document.createElement("h2");
  header.innerHTML = listName;
  let pencil = document.createElement("img");
  pencil.classList.add("edit-list");
  pencil.setAttribute('src','images/pencil.svg');
  pencil.setAttribute('alt','edit');
  pencil.setAttribute('width','30px');
  let cross = document.createElement("button");
  cross.classList.add("btn_cross");
  cross.innerHTML = "X";
  let listCards = document.createElement("div");
  listCards.classList.add("list-cards");
  let addCard = document.createElement("button");
  addCard.classList.add("add-card");
  addCard.innerHTML = "+ Добавить карточку";
  let br = document.createElement("br");
  list.append(header);
  list.append(pencil);
  list.append(cross);
  list.append(br);
  list.append(addCard);
  list.append(listCards);
  desk.append(list);
  let ln = document.getElementById("list-name");
  ln.value = "";
}



btnCreateList.addEventListener('click',addList);

//Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.

inputListName.addEventListener('keydown', event => {
  if(event.key == "Enter") btnCreateList.click();
});

desk.addEventListener('click',editList);



function editList(){
  let obj = event.target;
  if(obj.classList.contains("edit-list")){
    //во функции closest в параметре нужно писать класс с точкой !!!
    let list = obj.closest(".list");
    let h2 = list.firstChild;
    h2.setAttribute("contenteditable", "true");
    h2.focus();
  }

  if(obj.classList.contains("btn_cross")){
    let list = obj.closest(".list");
    list.parentNode.removeChild(list);
    let listName = list.querySelector("h2");
    let currentList = lists.indexOf(listName.innerHTML);
    lists.splice(currentList,1);
    pushToDB(lists);
    outputListInConsole();
  }

  //
  if(obj.classList.contains("add-card")){
    let list = obj.closest(".list");
    let listCards = list.querySelector(".list-cards");
    let card = document.createElement("div");
    card.classList.add("card");
    let textArea = document.createElement("textarea");
    textArea.classList.add("card-text");
    card.setAttribute("onmouseover","showCross(this)");
    card.setAttribute("onmouseout","hideCross(this)");
    let cross = document.createElement("button");
    cross.classList.add("btn_card_cross");
    cross.innerHTML = "X";
    card.append(textArea);
    card.append(cross);
    listCards.append(card);
    cards.push(card);
    showCards();
  }

  if(obj.classList.contains("btn_card_cross")) {
    let card = obj.closest(".card");
    card.parentNode.removeChild(card);
  }
}

function showCross(obj){
  let cross = obj.querySelector(".btn_card_cross");
  cross.style.opacity = 1;
}

function hideCross(obj){
  let cross = obj.querySelector(".btn_card_cross");
  cross.style.opacity = 0;
}

function showCards(){
  for(let i in cards){
    if(cards[i] == null) console.log("ups");
    console.log(cards[i]);
    console.log(cards.length);
  }
}
