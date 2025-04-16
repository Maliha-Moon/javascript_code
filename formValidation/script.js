// Access the form elements
// const userName = document.forms["myForm"]["fname"]; // .forms[name][name]

document.querySelector(".btn").addEventListener("click", (e) => {
  //   e.preventDefault(); // prevent reload

  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("pass").value;
  const cPassword = document.getElementById("cpass").value;

  // Regular expression
    const userNameReg = /^[A-Za-z ]{3,20}$/;
});

// define validation function
