class Animal {
  readonly name: string;
  constructor(name) {
    this.name = name
  }
  // 属性“run”为私有属性，只能在类“Animal”中访问
  // private run() {
  //   return `${this.name} is running`
  // }

  // 属性“run”受保护，只能在类“Animal”及其子类中访问。
  // protected run() {
  //   return `${this.name} is running`
  // }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('beiTa')
// 无法分配到 "name" ，因为它是只读属性
// snake.name = 'nihao'
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const dog = new Dog('xiaoBao')
console.log(dog.run())
console.log(dog.bark())

//  子类
class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow，' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(Cat.categories);
