//  TODO 基本数据类型和引用数据类型

let isDone: boolean = false
// isDone = 123  报错
let number: number = 20

let firstName: string = 'beiTa'
let message: string = `Hello, ${firstName}`

let u: undefined = undefined

let n: null = null

let num: number = undefined

// 万金油： any类型（当变量的类型不确定时使用）
let notSure: any = 4
notSure = 'WuPeiXin'
notSure = true
notSure.getName()
notSure.firstName