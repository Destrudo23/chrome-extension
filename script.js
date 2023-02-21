let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "bla")
console.log(localStorage.getItem("myLeads"))
localStorage.clear()
console.log(localStorage.getItem("myLeads"))


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
  }
)

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
   listItems += `<li>
                  <a target='_blank' href='http://${myLeads[i]}'>
                    ${myLeads[i]}
                  </a>
                </li>`
  }
ulEl.innerHTML = listItems
}
