// TODO interface 实现接口继承  "契约"
interface Radio {
  switchRadio(trigger: boolean): void
}
interface Battery {
  checkBatteryStatus(): void
}

class Car implements Radio {
  switchRadio(trigger: boolean) {

  }
}

class Cellphone implements Radio, Battery {
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus() { }
}