// import { getSlide } from "./api.js";
export { get };

import {
  addUser,
  deleteUser,
  complUser,
  putUser,
  searchUser,
  selectUser,
  getSlide,
} from "./api.js";
let box = document.querySelector(".box");
let add = document.querySelector(".add");
let dialogAdd = document.querySelector(".dialogAdd");
let formAdd = document.querySelector(".formAdd");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let dialogEdit = document.querySelector(".dialogEdit");
let formEdit = document.querySelector(".formEdit");
let dell = document.querySelector(".dell");
let info = document.querySelector(".info");
let dialogInfo = document.querySelector(".dialogInfo");
let close = document.querySelector(".close");
let complet = document.querySelector(".complet");
let search = document.querySelector(".search");
let select = document.querySelector(".select1");
let idx = null;



let nameJson = document.querySelector(".nameJson");
let avatarJson = document.querySelector(".avatarJson");
let describeJson = document.querySelector(".describeJson");
let statusJson = document.querySelector(".statusJson");
let rightButton = document.querySelector(".rightButton");
let leftButton = document.querySelector(".leftButton");
let cnt = 1
let cntAll = 6
rightButton.onclick = () => {
   cnt++
  if (cnt == cntAll) {
    cnt = 1
      
  }
  console.log(cnt);

  getSlide(cnt)



}
console.log(cnt);
leftButton.onclick = () => {
  if (cnt == 1) {
    cnt = cntAll

  }
cnt--
  console.log(cnt);
  getSlide(cnt)
}

export function reRes(data) {
  data.forEach((ele) => {
    nameJson.innerHTML = ele.name
    avatarJson.src = ele.avatar
    describeJson.innerHTML = ele.describe
    statusJson.innerHTML = ele.status
  })
}





add.onclick = () => {
  dialogAdd.showModal();
  // document.body.style.filter= "grayscale(10 %)";
};
dark.onclick = () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
};
light.onclick = () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};
search.oninput = () => {
    searchUser(search.value);
};
select.oninput = () => {
    selectUser(select.value);
}
formAdd["img"].onchange = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  formAdd.onsubmit = (ev) => {
    cntAll+=1
    console.log(cntAll);
    ev.preventDefault();
    let obj = {
      avatar: reader.result,
      name: formAdd["name"].value,
      email: formAdd["email"].value,
      status: formAdd["status"].value,
      category: formAdd["category"].value,
      describe: formAdd["describe"].value,
      completed: false,
    };
    addUser(obj);
    formAdd.reset();
  };
};
function get(data) {
  box.innerHTML = "";
 
  cntAll += 1

  data.forEach((elem) => {
    cntAll += 1
    console.log(cntAll);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h1");
    let h3 = document.createElement("h1");
    let h4 = document.createElement("h1");
    let h5 = document.createElement("h1");
    let h6 = document.createElement("h1");
    let img = document.createElement("img");
    img.classList.add("img-user");
    let butEdit = document.createElement("img");
    butEdit.src = "img/Без названия (1).png";
    butEdit.classList.add("img-edit");
    let div = document.createElement("div");
    div.classList.add("div-user");
    let divb = document.createElement("div");
    td.classList.add("td");
    td1.classList.add("td");
    td3.classList.add("td");
    td2.classList.add("td");
    td4.classList.add("td");
    img.src = elem.avatar;
    h1.innerHTML = elem.name;
    h2.innerHTML = elem.email;
    h3.innerHTML = elem.category;
    h4.innerHTML = elem.status;
    h5.innerHTML = elem.date;
    h6.innerHTML = "ONLINE";
    h6.classList.add("hidden");
    h1.style.paddingBottom = "10px";
    h4.style.paddingBottom = "10px";
    divb.append(h1, h2);
    div.append(img, divb);
    td.append(div);
    td1.append(h4, h3);
    td2.append(h6);
    td3.append(h5);
    td4.append(butEdit);
    tr.append(td, td1, td2, td3, td4);
    box.appendChild(tr);
    butEdit.onclick = () => {
      dialogEdit.showModal();
      formEdit["name"].value = elem.name;
      formEdit["email"].value = elem.email;
      formEdit["status"].value = elem.status;
      formEdit["category"].value = elem.category;
      formEdit["describe"].value = elem.describe
      idx = elem.id;
    };
    dell.onclick = () => {
      deleteUser(idx);
      cntAll-=1
    };
    info.onclick = () => {
      dialogInfo.showModal();
      dialogInfo.append(img, h1, h2, h3, h4, h5);
    };
    close.onclick = () => {
      dialogInfo.close();
    };
    complet.onclick = () => {
      let obj = {
        avatar: elem.avatar,
        name: elem.name,
        email: elem.email,
        status: elem.status,
        category: elem.category,
        completed: !elem.completed,
      };
      complUser(idx, obj);
    };
    if (elem.completed == true) {
      h6.innerHTML = "OFLINE";
      h6.style.backgroundColor = "green";
      h6.style.color = "white";
    }
    formEdit["img"].onchange = (event) => {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      formEdit.onsubmit = (ev) => {
        ev.preventDefault();
        let obj = {
          avatar: reader.result,
          name: formEdit["name"].value,
          email: formEdit["email"].value,
          status: formEdit["status"].value,
          category: formEdit["category"].value,
          describe: formEdit["describe"].value,
          completed: false,
        };
        putUser(idx, obj);
        formEdit.reset();
      };
    };
  });
}
