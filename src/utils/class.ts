class Animal {
    private name;
    public constructor(name:string) {
      console.log(Animal.name)
      
      this.name = name
    }
  }
let a = new Animal('Jack')
console.log(a)

  // abstract class Animal {
  //   public name;
  //   public constructor(name:string) {
  //     this.name = name;
  //   }
  //   public sayHi() {
  //     console.log('hi');
  //   };
  // }
  
  // class Cat extends Animal {
  //   public eat() {
  //     console.log(`${this.name} is eating.`);
  //   }
  // }
  
  // let cat = new Cat('Tom');