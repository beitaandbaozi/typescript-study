// function echo(arg: any): any {
//   return arg
// }

// const result: string = echo(123)
// TODO generics 定义函数或类的时候，先不决定类型，等到使用的时候再决定
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])