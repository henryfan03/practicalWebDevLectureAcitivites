let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
        squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
        squirrel: true},
    /* and so on... */
];

for (let i = 0;i < journal.length;i++) {
    let eventsArray = journal[i].events;
    console.log(`contents for entry ${i}`);
    for(let j = 0;j < eventsArray.length;j++) {
        console.log(eventsArray[j]);
    }
}