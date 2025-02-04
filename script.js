let userArr = []
let editId = ""

function AddUser() {
    if(editId == null || editId == "") {
        const x = document.getElementById("username").value;
        const payload = { username: x}
        userArr.push(payload)
    } else {
        const x = document.getElementById("username").value;
        const payload = { username: x}
        userArr[editId] = payload;
    }
        getAllUsers()
        document.getElementById("username").value = ""
 
};

function getAllUsers() {
    let statement = ""
    userArr.forEach((value, index) => {
        statement += `<tr>
                    <td>${index + 1}</td>
                    <td>${value.username}</td>
                    <td>
                        <button onClick="editUser(${index})" >Edit</button>
                        <button onClick ="deleteUser(${index})" >Delete</button>
                    </td>
                </tr>`
    })
    document.getElementById("demo").innerHTML = statement;
};

function deleteUser(id) {
    userArr.splice(id, 1)
    getAllUsers()
}

function editUser(id) {
    editId = id
    document.getElementById("username").value = userArr[id].username
    document.getElementById("btn").innerHTML = "Edit User"
}