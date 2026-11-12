const events=[
    "web development workshop",
    "career day",
    "Programming Club"

    
]
console.log(events[0]);
console.log(events[1]);
console.log(events[2]);
console.log("Length: " + events.length);

events[1] = "Tech Conferenece";
console.log(events);

events.push("Hackathon");
console.log("Push: " + events);

events.pop();
console.log("Pop: " + events);

console.log("Includes: " + events.includes("Tech Conferenece"));

const events2 = [
    "Workshop",
    "Career Day",
    "Hackathon",
    "Club Meeting"
]

const selectedEvents = events2.slice(1,3);
console.log("Slice: " + selectedEvents);

events2.splice(1,1);
console.log("Slice fshirja: " + events2);

events2.splice(1, 0, "Career Day");
console.log("Slice shtimi: " + events2);

for(let i = 0; i<5 ; i++){
    console.log(i);
}

for(let j = 0; j<events2.length; j++){
    console.log("Events: " + events2[j]);
}

for(let event of events2){
    console.log("E: " + event);
}

// let i=0;
// while(i<3){
//     console.log(i);
//     i++;
// }

// const programmingEvent = { //si krijohet nje objekt
//     name: "Web Development Workshop",
//     location: "Room 204",
//     participants: 25,
//     registrationOpen: true
// }

// console.log(programmingEvent.name); //dot notation
// console.log(programmingEvent("location")) //bracket notation

// programmingEvent.location ="Room 100";
// console.log(programmingEvent);

// programmingEvent.day = "October 12";

events3 = [
    {
        name: "Web Development Workshop 1",
    location: "Room 204",
    participants: 25,
    registrationOpen: true
},
{name: "Web Development Workshop 2",
    location: "Room 205",
    participants: 25,
    registrationOpen: true
},
{name: "Web Development Workshop 3",
    location: "Room 204",
    participants: 69,
    registrationOpen: true
}
]

console.log(events3[1].location);
console.log(events3[2].participants);

for(let event of events3){
    console.log(event);
}
for(let event of events3){
    console.log(event.location);
}

const eventNames = events3.map(function(event){
    return events3.name;
})

// const eNames = events3.map((data) -> data.name);

const popularEvents = events3.filter(function(event){
    event.participants > 25;
})

const pEvents = events3.filter((el) => el.participants > 25);

console.log(pEvents);

const foundEvents = events3.find(function(el){
    return el.name === "Web Development Workshop 2";
})
console.log(foundEvents);
const fEvents = events3.find((el) => el.name = "Web Development Workshop 1");
console.log(fEvents);




