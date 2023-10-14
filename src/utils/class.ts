
// class Animal {
//     private name;
//     public constructor(name:string) {
//       console.log(Animal.name)
      
//       this.name = name
//     }
//   }
// let a = new Animal('Jack')
// console.log(a)

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

// const tuple = [1, '222',2,3,4,5] as const

// export type TupleToObject<T extends readonly (string | number)[]> = {
//   [p in T[number]] : p
// }
// type result = TupleToObject<typeof tuple>



// type name = 'wq' | 'ws'
// type TName = {
//   [P in name] : P
// }


export const makeNumberProp = <T>(defaultVal: T) => ({
  type: Number,
  default: defaultVal,
})
  
const a =  [1, 2 ,3] as const
console.log('a',a);

  // function complexFunction<T extends { [key: string]: any }>(input: T, callback: (obj: T) => void): T {} = {}


  // {
  //   "1" : 1111
// }