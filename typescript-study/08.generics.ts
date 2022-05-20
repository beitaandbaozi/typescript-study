// function echo(arg: any): any {
//   return arg
// }

// const result: string = echo(123)
// TODO generics 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

// TODO 泛型约束
function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArray([1, 2, 3])

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
// const str = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])

// echoWithLength(13)  13没有length这个属性

class Queue<T>{
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'string' }
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }

let arr: number[] = [1, 2, 3]
//  让 arrTwo 是一个装满数字的数组
let arrTwo: Array<number> = [1, 2, 3]