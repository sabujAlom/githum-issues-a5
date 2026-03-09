
// login js
function login(){

const user=document.getElementById("username").value
const pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

localStorage.setItem("login","true")

window.location.href="main.html"

}else{

alert("Invalid Credentials")

}

}




// ..................main js.......................
const API="https://phi-lab-server.vercel.app/api/v1/lab/issues"


async function loadIssues(type){

const res=await fetch(API)
const data=await res.json()

let issues=data.data

if(type!=="all"){
issues=issues.filter(issue=>issue.status===type)
}

displayIssues(issues)

issueCount.innerText=issues.length+" Issues"

setActiveTab(type)

}