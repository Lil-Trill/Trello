const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
let cout = 1;
btnCreateList.addEventListener("click", (event) => {
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
  pencil.setAttribute('src','images/pencil.svg');
  pencil.setAttribute('alt','edit');
  pencil.setAttribute('width','30px');
  list.append(header);
  list.append(pencil);
  desk.append(list);
  let ln = document.getElementById("list-name");
  ln.value = "";
});

const btn_clear = document.querySelector(".button_clear");

btn_clear.addEventListener("click",(event)=>{

  desk.innerHTML = "";
  cout = 1;
})
