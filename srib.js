const ul=document.getElementById("ul");
const input=document.getElementById("input");
const addBtn=document.getElementById("add-btn");
const saveBtn=document.getElementById("save-btn");
const darkbtn=document.getElementById("dark-btn");
const sun=document.getElementById("sun");
const moon=document.getElementById("moon");
darkbtn.addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
       sun.style.display="none";
       moon.style.display="block";
    }else{
        sun.style.display="block";
        moon.style.display="none"
    }
    document.body.classList.toggle("dark");
})

addBtn.addEventListener("click",()=>{
    if(input.value.trim().length<1){
        alert("Malumot kiriting")
    }else{
        addTodo()
    }
});

function addTodo(){
    const li=document.createElement("li");
    li.innerHTML=`
         <div class="left">
                <input type="checkbox" id="check">
                <p>${input.value}</p>
            </div>
            <div class="ringt">
                <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
    
`
    ul.appendChild(li)
    input.value=""
}