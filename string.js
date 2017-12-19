//ใช้ `สำหรับ string ที่ต้องการขึ้นบรรทัดใหม่
const multi =`In ES6
multi-lines is
okay.`
console.warn(multi)

//string interpolation (สามารถใส่ค่าในเครื่องหมาย ${}
const name ='Bob'
const time ='today'
const greet =`Hello ${name+'o'}, how are you ${time}?`
console.warn(greet)