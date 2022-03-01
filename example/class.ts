class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    console.log("생성");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("sego", 30);

console.log(seho);
