var name ="Luna";
if(true){
    var name ="Ken";
}
console.log(name);

var name ="Luna";
function a() {
    var name ="Ken";
}
console.log(name);

let name1 ="Luna";
if(true){
    let name1 ="Ken";
}
console.log(name1);

//ใช้ตัวแปร var จะไม่สนใจตัวแปรใน block Scope ของ function
var stack =[]

for (var i=0; i<10; i++){
    stack.push(function(){
        console.warn(i)
    })
}

stack.forEach(function(f){
    f()
})

//ใช้ตัวแปร let จะสนใจตัวแปรใน block Scope ของ function
var stack =[]

for (let i=0; i<10; i++){
    stack.push(function(){
        console.warn(i)
    })
}

stack.forEach(function(f){
    f()
})

//ใช้ตัวแปร const จะสนใจตัวแปรใน block Scope
const fruit ='Banana'
{
    const fruit='Apple'
}
console.warn(fruit)

//ใช้ตัวแปร const หากกำหนดค่าตัวแปรแล้วจะไม่สามารถกำหนดได้อีก ตัวอย่างนี้จะ error
//const fruit1 ='Banana'
//console.warn(fruit1)
//fruit1='Apple'

//ใช้ตัวแปร const ตัวอย่างนี้สามารถใช่ได้เพราะเรายังไม่ได้กำหนดค่าตัวแปร หากต้องเปลี่ยนค่าตัวแปรควรใช้ let
const person ={}
person.name='Luna'
