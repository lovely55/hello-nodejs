// spread
const arr =[4,5,6]
//const append =[1,2,3]
//ถ้าอยากให้ append แสดงผลของ append+arr จะต้องใส่ ...ต่อด้วย arr
const append =[1,2,3,...arr]
console.warn(append)

const prepend = [...arr,7,8,9]
console.warn(prepend)

//การใช้ push จาก arr2 ไปใส่ arr1
const arr1 =['a','b','c']
const arr2 =['d','e','f']
arr1.push(...arr2)
console.warn(arr1)

//การใช้ slice จะทำการ copy และ return ค่าออกมา
const arr=[1,2,3]
const copy =arr.slice()
console.warn(copy)