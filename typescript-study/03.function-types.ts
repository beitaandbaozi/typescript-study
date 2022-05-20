// 函数声明
function add(x: number, y: number, z?: number): number {
  if (z) {
    return x + y + z
  } else {
    return x + y
  }
}

let result = add(1, 4)

// 函数表达式
const add1 = (x: number, y: number, z?: number): number => {
  if (z) {
    return x + y + z
  } else {
    return x + y
  }
}
// 函数赋值
interface ISum {
  (x: number, y: number, z?: number): number
}
let add2: ISum = add1
// let add2: (x: number, y: number, z?: number) => number = add1