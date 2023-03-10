let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

tabBtn.addEventListener("click", function(){    
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads) )
      renderLeads(myLeads)
  })
})

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
   listItems += `<li>
                  <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                  </a>
                </li>`
  }
ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    console.log( localStorage.getItem("myLeads") )
  }
)

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  renderLeads()
  }
)

/*
tabBtn.addEventListener ("click", function(){
  myLeads.push(window.location.href)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
  }
)
*/




