// TODO interface 相当于对定义的对象做出规范
interface Person {
  // 属性前加上 readonly 表示只读 不可更改
  readonly id: number
  name: string
  age: number
}

let beiTa: Person = {
  id: 1,
  name: 'beiTa',
  age: 22
}
// beiTa.id = 2    //无法分配到 "id" ，因为它是只读属性

interface Car {
  name: string
  // 属性加上 ？ 表示可选
  age?: number
}

let bmw: Car = {
  name: 'bmw',
  age: 22
}