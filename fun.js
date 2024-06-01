let input = document.querySelectorAll("input");
let table = document.querySelector("table");
let button = document.getElementById("createBtn");
let row

let formHandle=()=>{
    event.preventDefault()
    let userName = input[0].value;
    let userSalary = input[1].value;
    let userComp = input[2].value;

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let updatebtn = document.createElement("button")
    let delbtn  = document.createElement("button")

    if(button.innerText == "SUBMIT"){
     
        if(userName=="" || userSalary=="" || userComp==""){
            alert("please fill the forms")
        }
        
        else{
            td1.innerText = userName
            td2.innerText = userSalary
            td3.innerText = userComp
            
            updatebtn.innerText = "Edit"
            updatebtn.classList.add("editBtn")
            delbtn.innerText = "Delete"
            delbtn.classList.add("delBtn")
            
            td4.append(updatebtn,delbtn)
            tr.append(td1, td2, td3, td4)
            table.appendChild(tr)

            input[0].value=""
            input[1].value=""
            input[2].value=""
                    
            updatebtn.addEventListener("click",()=>{
                row = tr;
                input[0].value = row.cells[0].innerText;
                input[1].value = row.cells[1].innerText;
                input[2].value = row.cells[2].innerText;
                button.innerText= "UPDATE"
            })

            delbtn.addEventListener("click",()=>{
                tr.remove()
            })
        }
    }

    else{
        row.cells[0].innerText = input[0].value
        row.cells[1].innerText = input[1].value
        row.cells[2].innerText = input[2].value
        input[0].value=""
        input[1].value=""
        input[2].value=""
        button.innerText = "SUBMIT"
    }
}