var fun = function base(b,h){
    return (b * h)/2
}
//console.log(fun(5,7))

// (function(){
//         console.log("I'm the IIFE")
//     }());

    // const bar = (function (msg){
    //     console.log("Message: "+msg )
    // }("hello"))

// const joe = (function() {
//     return "helllo wordl"
// })();

// console.log(joe);

// const foo = function sum(x,y){
//     return x + y
// }

// console.log(foo(50,10))

// var say = function (times){
//     if(times>0){
//         console.log("hello")
//         say(times-1)
//     }
// }
// say(3)

// var foo = function(){
//     console.log('hello')
// }

// var foo = (msg) => {console.log('hello world',msg)}
// foo('msg')

// function persons(p, ...person){
//     person.forEach(args => {
//         console.log(p,'says',args)
//     })
// }

// persons('cena', 'foo', 'bar')

// function hello(msg = 'hello world'){
//     console.log(msg)
// }

// hello()

// var url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript'

// var response = fetch(url).then(response => response.json())
// response.then(({items, has_more, quota_max,quota_remaining})=> {
//    for({title, owner, is_answered} of items) {
//     console.log("Q: "+title+" ...is_answered: "+is_answered)
//    }
// })

//  var url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url).then(res => res.json())
//     .then(res => {
//         res.forEach(element => {
//             console.log(element.title)
//         });
//     })

// fetch(url,{
//     method: "POST",
//     headers: {
//         "content_type": "aplication/json"
//     },
//     body: JSON.stringify({
//         useId: 1,
//         title: "lorem ipsum ett ect"
//     })
// }).then(res => res.json())
//     .then(res => console.log(res))
// username, email, company, address

//var url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url).then(res => res.json())
//     .then(res => {
//         res.forEach(e => {
//             console.log(e.username)
//             console.log(e.email)
//             console.log(e.company.name)
//             console.log(e.address)
//         });
//     })

// fetch(url,{
//     method: "POST",
//     headers: {
//         "content_type": "aplication/json"
//     },
//     body: JSON.stringify({
//         username: "Bicho",
//         email: "correo@correo.com",
//         address: {
//             street: "Refugio",
//             city: "Tijuana",
//             zipcode: 22246
//         },
//         company: {
//             name: "UTT"
//         }
//     })
// }).then(res => res.json())
//     .then(res => console.log(res))

//import axios from "axios";
const axios = require ("axios");

const url = "https://jsonplaceholder.typicode.com/users";

// axios.get(url).then(({data})=> {
//     data.forEach(element => {
//         console.log(element.username)
//     });
// })

axios.post(url,{
    username: "Foo",
    mail: "Foo@gmail.com"
}).then(res => {
    if (res.status===201){
        console.log("El registro: fue guardado correctamente.")
    }
})


sygy7ir