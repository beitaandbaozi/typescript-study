<<<<<<< HEAD
// type inference  类型推断
let str: string = 'str'
// str = 123

=======
// type inference
let str = 'str'
>>>>>>> 406fd455b355ebebd5f9ab4ce2ebeb9f2f7f6d84

// union types  联合类型
let numberOrString: number | string

function getLength(input: number | string): number {
  // 类型断言
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }

}

//  type guard
// 在不同的条件中智能的缩小了范围
function getLength2(input: number | string): number {
  if (typeof input == 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}