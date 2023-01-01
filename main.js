const userList = ["emin", "fatma", "zehra", "ali", "ramazan"];

localStorage.setItem("name", JSON.stringify(userList));
localStorage.setItem("userList", JSON.stringify(userList));

const getStorage = localStorage.getItem("name");
const getStorageJSON = JSON.parse(getStorage)
// console.log(getStorageJSON[3]);

localStorage.removeItem('name');
userList.splice(1, 2);
localStorage.setItem("userList", JSON.stringify(userList));

const nameList = document.querySelector('#nameList');
nameList.innerHTML = getStorageJSON;

