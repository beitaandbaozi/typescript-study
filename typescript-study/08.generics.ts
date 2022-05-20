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