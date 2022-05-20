//  TODO 基本数据类型和引用数据类型

// TODO 基本数据类型
let isDone: boolean = false
// isDone = 123  报错
let number: number = 20

let firstName: string = 'beiTa'
let message: string = `Hello, ${firstName}`

let u: undefined = undefined

let n: null = null

let num: number = undefined

// 万金油： any类型（当变量的类型不确定时使用）(会丧失具体的类型)
let notSure: any = 4
notSure = 'WuPeiXin'
notSure = true
notSure.getName()
notSure.firstName

// TODO 引用数据类型
// 定义一个数组，元素是number类型
let arrNumber: number[] = [1, 2, 3]
arrNumber.push(3)
// let arrNumber: number[] = [1,2,3,'123']    // '123'不是数字

// 定义一个元组
let user: [string, number] = ['Wpx', 123]
// let user: [string, number] = ['Wpx', '123']  // 不能将类型“string”分配给类型“number”