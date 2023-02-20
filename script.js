let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
  }
)

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
   // listItems += "<li> <a href='http://" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a> </li>"
   listItems += `<li>
                  <a target='_blank' href='http://${myLeads[i]}'>
                    ${myLeads[i]}
                  </a>
                </li>`
  }
ulEl.innerHTML = listItems
}
