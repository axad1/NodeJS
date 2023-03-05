const socket = io("http://localhost:5000")

document.getElementById("login").onclick = (e) => {
    name = prompt("Name? ")
    document.getElementById("name").textContent = name
    // displayMessage({name: "You", msg: "joined"})
    socket.emit("new-user", name)
}

socket.on("new-msg", msg=>{
    displayMessage(msg)
})

socket.on("new-user", user=>{
    displayMessage({name: user, msg: " connected."})
})

document.forms["send-container"].onsubmit = function(e){
    e.preventDefault()
    socket.emit("send-message", this["msg-input"].value)
    this["msg-input"].value = ""
}

function displayMessage(data){
    elem = document.createElement("div")
    elem.textContent = `${data.name}: ${data.msg}`
    document.getElementById("msg-container").appendChild(elem)
}