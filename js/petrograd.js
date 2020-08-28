// fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })

//console.log(data)
//loop through products

//finding the template

//clone the template

//fill out the template

//append
/*
const name1 = "Jonas";

function hi() {
  const name2 = "Lasse";
  console.log(name1, name2)
}

console.log(name1, name2)
*/
