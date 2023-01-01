let userList = ["Bekir", "Ali", "Emir"], userListJSONstringify, getUserList, nameListDOM;

nameListDOM = document.querySelector('#nameList');

userListJSONstringify = JSON.stringify(userList);
localStorage.setItem("userList", userListJSONstringify)

function Read() {
    nameListDOM.innerHTML = "";
    getUserList = JSON.parse(localStorage.getItem("userList"));
    // console.log(getUserList)

    if (getUserList != null) {

        if (getUserList.length === 0) {
            nameListDOM.innerHTML = "There are no any users!"
        } else {
            for (let i = 0; i < getUserList.length; i++) {
                nameListDOM.innerHTML +=
                    `
            <div class="user-item">
                <p>
                    <i class="fas fa-user"></i>
                    <span>User :</span> ${getUserList[i]}
                </p>
                <div class="buttons">
                    <button class="primary" onclick="Edit(${i})">
                    // ? tıklanan elemanı görmek için Edit() içerisine i gönderildi.
                        <i class="fas fa-edit"></i>
                        Edit
                    </button>
                    <button class="danger" onclick="Delete(${i})">
                    // ? tıklanan elemanı görmek için Delete() içerisine i gönderildi.
                        <i class="fas fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
                `;
            }
        }
    }
}

Read();

