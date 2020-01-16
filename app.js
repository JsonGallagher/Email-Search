//Grab body HTML => Convert to string
const searchDoc = document.body.innerHTML;
let stringContext = searchDoc.toString();

//Search text for email addresses
let arrayEmails = stringContext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

/* Filter out every other array item to remove duplicates
let filteredArray = arrayEmails.filter((element, index) => {
  return index % 2 === 0;
})*/

//Print filtered array of email addresses to console. Right click and copy object to grab comma separated list of addresses
console.log(arrayEmails);
