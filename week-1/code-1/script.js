// using promt

const name = prompt("Enter you name: ");
console.log("welcome" + name); //output print on console

// using Dom

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const msg = document.querySelector(".msg");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  const fname = firstname.value;
  const lname = lastname.value;
  const str = `welcome ${fname} ${lname}`;
  msg.textContent = str;
  console.log(fname);
});
