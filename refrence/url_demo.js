const url = require('url')

const myUrl = new URL ('http://mywebsite.com:8000/hello.html?id=100&status=active')

// serialised url or acrtal url

// console.log(myUrl.href)

// or
// console.log(myUrl.toString())

// host (root domain) host vs hostname host allows you to get the poort
// console.log(myUrl.host)

// // or
// console.log(myUrl.hostname)

// // pathname
// console.log(myUrl.pathname)

// serialised queries to get the search, basically everything after the comma
// console.log(myUrl.search)
// // an object can also be gotten from the qurries using search params
// console.log(myUrl.searchParams)

// to add paramenters dynamically
myUrl.searchParams.append('abc','123')

// console.log(myUrl.searchParams)

//  you can also loop throught search params since its an object
myUrl.searchParams.forEach((id,status) => {
    console.log(id + ':' + status)
    
});