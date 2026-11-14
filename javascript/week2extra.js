// const button = document.querySelector("#myButton");
// console.log("button " + button);

// // button.addEventListener("click" + function(){
// //     alert("Welcome to  Campus Hub");
// // });

// const texts= document.querySelector(".text");
// console.log("selector all" + texts);

// const title = document.querySelector("#heading");
// title.textContent = "Welcome to CampusHub";

// // title.textContent = "<span> This is a span</span>"
// title.innerHTML = "<span> This is a span</span>";

// const container = document.querySelector("#events");
// const newElement = document.createElement("p");
// newElement.textContent ="Web Development Workshop";
// container.appendChild(newElement);
// console.log("new element " + newElement);

// const card =  document.querySelector(".event-card");
// const addBtn = document.querySelector("#add-css");
// addBtn.addEventListener("click", () => {
//     card.classList.add("highlight");
// })
// const removeBtn = document.querySelector("#remove-css");
// removeBtn.addEventListener("click", () => {
//     card.classList.remove("highlight");
// })
// const toggleBtn = document.querySelector("#toggle-css");
// toggleBtn.addEventListener("click", () => {
//     card.classList.toggle("highlight");
// })


// const form = document.querySelector(".jsforma");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const name = document.querySelector("#name").value;
//     console.log("Name " + name.value);
//     if(name===""){
//         alert("Shkruaje emrin")
//     }
//     console.log("Form submitted");

//     localStorage.setItem("username", "studenti");

// })

// const selectedValue = localStorage.getItem("username");
// console.log(selectedValue);

// localStorage.removeItem("username"); //localStorage.clear();

// const localEvents = [
//     "Workshop",
//     "Workshop",
//     "Workshop"
// ];

// localStorage.setItem("events",JSON.stringify(localEvents));
// const savedEvents = JSON.parse(localStorage.getItem("events"));
// console.log(savedEvents);

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((respone) => responese.json())
// .then((data) => {
//     console.log("data", data)
//     data.slice(0.5).forEach((post)=>{
//         const title = document.createElement("h3");
//         title.textContent=post.title;
//         postsContainer.Container.appendChild(title);
//     })
    
// })
// .catch((error) => console.log("error", error));

// const postsContainer = document.querySelector(".posts");


const formajs = document.querySelector(".forma");
formajs.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const emri = document.querySelector("#name").value;
        console.log("Name " + emri);
        const email = document.querySelector("#email").value;
        console.log("Email " + email);
        const subject = document.querySelector("#subject").value;
        console.log("Subject " + subject);
        const message = document.querySelector("#message").value;
        console.log("Message " + message);
        if(message.length < 20){
            alert("Emri shume i shkurte");
        }
        localStorage.setItem("emri", "emaili", "lenda", "mesazhi");


    }
)







