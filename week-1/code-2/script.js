const age = prompt("Enter you age: ");

if (age < 8) {
  console.log("You are a child!");
} else if (age >= 9 && age <= 17) {
  console.log("you are Teenage");
} else if (age >= 18 && age <= 30) {
  console.log("you are young");
} else {
  console.log("you are adult");
}

// using Dom

const uAge = document.querySelector(".age");
const msg = document.querySelector(".msg");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  const user_age = uAge.value;
  if (user_age < 8) {
    msg.textContent = "You are a child!";
  } else if (user_age >= 9 && user_age <= 17) {
    nsg.textContent = "you are Teenage";
  } else if (user_age >= 18 && user_age <= 30) {
    msg.textContent = "you are young";
  } else {
    msg.textContent = "you are adult";
  }
  console.log(fname);
});
