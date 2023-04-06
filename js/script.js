const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
let cout = 1;
btnCreateList.addEventListener('click',addList);
const inputListName = document.getElementById("list-name");

const btn_clear = document.querySelector(".button_clear");

btn_clear.addEventListener("click",(event)=>{

  desk.innerHTML = "";
  cout = 1;
})

function addList(){
  event.preventDefault();
  let list = document.createElement("div");
  let listName = document.getElementById("list-name").value;
  list.classList.add("list");
  if (listName == "") {
    listName = "Новый список " + cout;
    cout++;
    console.log(cout);
  }
  let header = document.createElement("h2");
  header.innerHTML = listName;
  let pencil = document.createElement("img");
  pencil.classList.add("edit-list");
  pencil.setAttribute('src','images/pencil.svg');
  pencil.setAttribute('alt','edit');
  pencil.setAttribute('width','30px');
  list.append(header);
  list.append(pencil);
  desk.append(list);
  let ln = document.getElementById("list-name");
  ln.value = "";
}

//Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.

inputListName.addEventListener('keydown', event => {
  if(event.key == "Enter") btnCreateList.click();
});

desk.addEventListener('click', event=>{
  let obj = event.target;
  if(obj.classList.contains("edit-list")){
    let list = obj.closest("list");
    let h2 = list.firstElementChild;
    console.log(h2);
  }
});