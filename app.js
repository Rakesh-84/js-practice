// 1. Grab all three elements

const input1 = document.getElementById("input1")
const button1 = document.getElementById("button1")
const list1 = document.getElementById("list1")

button1.addEventListener("click", function() {
    const input = input1.value
  const listItem = document.createElement("li")
  listItem.textContent = input
  list1.appendChild(listItem)
  input1.value = ""
}
)

list1.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove()
    }
})
