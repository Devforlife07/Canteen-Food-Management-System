let slideIndex = 1;
showDivs(slideIndex);
function plusDiv(n) {
  slideIndex += n;
  showDivs(slideIndex);
}
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
// let x = document.querySelector("#down");

// x.addEventListener("click", function() {
//   document.querySelector(".items").classList.toggle("items-restore");
// });
// let z = document.querySelector(".collection-2");
// let a,
//   cost = 0,
//   totalcost = 0;
// let qty;
// z.addEventListener("click", function(e) {
//   a = e.target.textContent;
//   a = a.toLowerCase();
//   document.querySelector(".input p").textContent = a.toUpperCase();
//   document.querySelector(".input p").style.marginLeft = "0.2rem";
//   console.log(typeof a);
// });
// function cal() {
//   if (a == "samosa") {
//     cost = 8;
//   } else if (a == "patties") {
//     cost = 10;
//   } else if (a == "idli") {
//     cost = 40;
//   } else {
//     cost = 60;
//   }
//   qty = parseInt(document.querySelector("#qty").value);
//   totalcost = qty * cost;
//   console.log(totalcost);
// }
document.querySelector(".register").addEventListener("click", function() {
  let login = document.querySelector(".disp");
  login.style.display = "block";
  let b = document.querySelectorAll("section");
  for (let i = 0; i < b.length; i++) {
    b[i].classList.toggle("blur");
  }
  document.querySelector("nav").classList.toggle("blur");
});
//close floating div
document.querySelector(".disp span").addEventListener("click", function() {
  document.querySelector(".disp").style.display = "none";
  let b = document.querySelectorAll("section");
  for (let i = 0; i < b.length; i++) {
    b[i].classList.toggle("blur");
  }
  document.querySelector("nav").classList.toggle("blur");
});
/* form */
let username, password, newuser;
let signup = document.querySelector("#submit");
let userscollection = new Array();
document.querySelector("form").addEventListener("submit", function(e) {
  username = document.querySelector("#username").value;
  password = document.querySelector("#password").value;
  let newuser = new Users(username, password);
  adduser(newuser);
  e.preventDefault();
});
function Users(username, password) {
  this.username = username;
  this.password = password;
}
//add user
function adduser(x) {
  if (localStorage.getItem("users") === null) {
    userscollection = [];
  } else {
    userscollection = JSON.parse(localStorage.getItem("users"));
  }
  userscollection.push(x);
  localStorage.setItem("users", JSON.stringify(userscollection));
  console.log(userscollection);
  document.querySelector(".msg").textContent =
    "*You Have Successfully Signed Up";
  document.querySelector("#submit").setAttribute("disabled", "disabled");
}
/*Delete User*/
let delnav = document.querySelector(".delete");
delnav.addEventListener("click", function() {
  document.querySelector(".del").classList.toggle("items-restore");
  let b = document.querySelectorAll("section");
  for (let i = 0; i < b.length; i++) {
    b[i].classList.toggle("blur");
  }
  document.querySelector("nav").classList.toggle("blur");
});

function showusers() {
  let task = new Array();
  if (localStorage.getItem("tasks")) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("users"));
  }
  task.forEach(function(user) {
    let x = document.createElement("li");
    x.className = "users";
    let text = document.createTextNode(user.username);
    x.appendChild(text);
    let ul = document.querySelector(".collection-users");
    ul.appendChild(x);
  });
}
/*close delete user*/
document.querySelector(".del span").addEventListener("click", function() {
  console.log("clicked");
  document.querySelector(".del").classList.toggle("items-restore");
  let b = document.querySelectorAll("section");
  for (let i = 0; i < b.length; i++) {
    b[i].classList.toggle("blur");
  }
  document.querySelector("nav").classList.toggle("blur");
});
/*Login div*/
let log = document.querySelector(".login");
log.addEventListener("click", function() {
  document.querySelector(".login-form").style.display = "block";
  let b = document.querySelectorAll("section");

  for (let i = 0; i < b.length; i++) {
    b[i].classList.toggle("blur");
  }
  document.querySelector("nav").classList.toggle("blur");
});
/*Login-form-close*/
document
  .querySelector(".login-form span i")
  .addEventListener("click", function() {
    document.querySelector(".login-form").style.display = "none";
    let b = document.querySelectorAll("section");

    for (let i = 0; i < b.length; i++) {
      b[i].classList.toggle("blur");
    }
    document.querySelector("nav").classList.toggle("blur");
  });
/*Check Login Details*/
let currentuser;
function login() {
  let flag = 0;
  let task = [];
  task = JSON.parse(localStorage.getItem("users"));
  console.log(task);
  let username = document.querySelector("#username-login").value;
  let password = document.querySelector("#password-login").value;
  console.log(username, password);
  task.forEach(function(user) {
    if (
      username.toLowerCase == user.username.toLowerCase &&
      password == user.password
    ) {
      flag = 1;
      currentuser = user;
      document.querySelector(".login-btn").disabled = true;
    }
  });
  if (flag === 1) {
    document.querySelector(".mess").textContent =
      "You Are Successfully Logged In";
    additionaltask();
  } else
    document.querySelector(".mess").textContent = "Wrong Username Or Password";
}
/*Continuation Of Login*/

function additionaltask() {
  document.querySelector(".fun").style.display = "block";
  document.querySelector(".user-log .details h1").textContent = `Hello ${
    currentuser.username
  }`;
  document.querySelector(".info").style.display = "none";
  document.querySelector(".logout").classList.toggle("none");
  document.querySelector(".login").classList.toggle("none");
}
/*LOGOUT*/
document.querySelector(".logout").addEventListener("click", logout);
function logout() {
  if (window.confirm("Are You sure You want to logout")) {
    flag = 0;
    document.querySelector(".fun").style.display = "none";
    document.querySelector(".logout").classList.toggle("none");
    document.querySelector(".login").classList.toggle("none");
    document.querySelector(".user-log .details h1").textContent = "";
  }
}

/*Dashboard*/
let x = document.querySelector("#down");

x.addEventListener("click", function() {
  document.querySelector(".items").classList.toggle("items-restore");
});
let z = document.querySelector(".collection-2");
let a,
  cost = 0,
  totalcost = 0;
let qty;
z.addEventListener("click", function(e) {
  a = e.target.textContent;
  currentuser.orderlist = [a];
  a = a.toLowerCase();
  document.querySelector(".input p").textContent = a.toUpperCase();
  document.querySelector(".input p").style.marginLeft = "0.2rem";
});

function cal() {
  if (a == "samosa") {
    cost = 8;
  } else if (a == "patties") {
    cost = 10;
  } else if (a == "idli") {
    cost = 40;
  } else {
    cost = 60;
  }
  qty = parseInt(document.querySelector("#qty").value);
  totalcost = qty * cost;
  // if (currentuser.totalcost)
  //   currentuser.totalcost = currentuser.totalcost + totalcost;
  // else currentuser.totalcost = totalcost;
  currentuser.totalcost = totalcost;
  saveorder(currentuser);
}

//Save order to localstorage

function Orderinfo(user, price, item) {
  this.user = user;
  this.price = price;
  this.items = item;
}
let orders = [];
function saveorder(a) {
  orders.push(a);
  console.log(orders);
  displaycurrentorder(a);
  savecurrentorder(a);
}
/*Save Current Order*/
function savecurrentorder(a) {
  let save = [];
  if (JSON.parse(localStorage.getItem("orders")) == null) {
    save.push(a);
    localStorage.setItem("orders", JSON.stringify(save));
  } else {
    save = JSON.parse(localStorage.getItem("orders"));
    save.push(a);
    localStorage.setItem("orders", JSON.stringify(save));
    console.log(save);
  }
}

/*Load previous Orders*/
window.addEventListener("DOMContentLoaded", loadsaved);
function loadsaved(e) {
  let saveorders = [];
  saveorders = JSON.parse(localStorage.getItem("orders"));
  displayorder(saveorders);
}

/*display current orders*/
function displaycurrentorder(a) {
  console.log(a);
  let divi = document.createElement("div");
  let uli = document.createElement("ul");
  let a1 = document.createElement("li");
  let a2 = document.createElement("li");
  let a3 = document.createElement("li");
  a1.appendChild(document.createTextNode(`User:${a.username}`));
  uli.appendChild(a1);

  a2.appendChild(document.createTextNode(`TotalPrice:${a.totalcost}`));

  uli.appendChild(a2);
  a3.appendChild(document.createTextNode(`Items:${a.orderlist[0]}`));
  uli.appendChild(a3);
  divi.appendChild(uli);
  document.querySelector(".dashboard").appendChild(divi);
}
/*Display orders*/
function displayorder(a) {
  a.forEach(function(user) {
    let divi = document.createElement("div");
    let uli = document.createElement("ul");
    let a1 = document.createElement("li");
    let a2 = document.createElement("li");
    let a3 = document.createElement("li");

    a1.appendChild(document.createTextNode(`User:${user.username}`));
    uli.appendChild(a1);

    a2.appendChild(document.createTextNode(`TotalPrice:${user.totalcost}`));

    uli.appendChild(a2);
    a3.appendChild(document.createTextNode(`Items:${user.orderlist}`));
    uli.appendChild(a3);
    divi.appendChild(uli);
    document.querySelector(".dashboard").appendChild(divi);
  });
}
