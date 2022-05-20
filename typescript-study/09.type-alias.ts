let sum: (x: number, y: number) => number
const result = sum(1, 2)

// TODO   type aliase 类型别名
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 2)
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

// TODO 字面量
const str: 'name' = 'name'
// 无法分配到 "str" ，因为它是常数
// str = 'wupeixin'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Right'

// TODO 交叉类型
interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }