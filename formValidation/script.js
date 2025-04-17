document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault(); // prevent reload

  // Access the form elements
  // const userName = document.forms["myForm"]["fname"]; // .forms[name][name]
  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("pass").value;
  const cPassword = document.getElementById("cpass").value;

  // Regular expression
  const userNameRegEx = /^[A-Za-z0-9 ]{3,20}$/;
  const emailRegEx =
    /[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}/;
  const phoneRegEx = /^[0-9]{6,11}$/;
  const passwordRegEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}/;

  // remove previous error
  document.querySelectorAll(".errormsg").forEach((curelm) => {
    curelm.innerHTML = "";
  });

  //validation check
  let isValid = true;

  // validate username
  if (!userNameRegEx.test(userName)) {
    document.getElementById("nameErr").innerHTML = "Username cannot be blank!";
    isValid = false;
  }

  // validate email
  if (!emailRegEx.test(email)) {
    document.getElementById("emailErr").innerHTML =
      "Please enter a valid email address.";
    isValid = false;
  }

  // validate phone
  if (!phoneRegEx.test(phone)) {
    document.getElementById("phoneErr").innerHTML =
      "Phone number must be 11 digits and start with 0";
    isValid = false;
  }

  // validate password
  if (!passwordRegEx.test(password)) {
    document.getElementById("passErr").innerHTML =
      "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number and one special character";
    isValid = false;
  }

  // validate confirm password
  if (cPassword !== password) {
    document.getElementById("CpassErr").innerHTML =
      "Please enter correct password";
    isValid = false;
  }

  let userData = [];
  if (isValid) {
    //store value
    let formClass = document.getElementsByClassName("form-control");
    Array.from(formClass).forEach((curEl) => userData.push(curEl.value));
    Array.from(formClass).forEach((curEl) => (curEl.value = ""));

    console.log(userData);
    //clear value after submission
    alert("Registration Successful!");
    console.log("Registration Successful!");
  }
});
