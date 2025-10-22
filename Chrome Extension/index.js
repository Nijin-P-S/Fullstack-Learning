const input_btn = document.getElementById("input-btn");
const input_el = document.getElementById("input-el");

let saved_input = document.getElementById("saved-input")
let myLeads = [];

input_btn.addEventListener("click", ()=>{
    myLeads.push(input_el.value);
    saved_input.innerHTML += `
        <li>
            <a href="${input_el.value}" target="_blank">${input_el.value}</a>
        </li>
    `;
    input_el.value = "";
    return;
})