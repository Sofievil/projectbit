const username = "myusername";
const password = "mypassword";

const inputUsername = prompt("Enter your username:");
const inputPassword = prompt("Enter your password:");

if (inputUsername === username && inputPassword === password) {
  console.log("Authentication successful!");
} else {
  console.log("Incorrect username or password.");
}
  

