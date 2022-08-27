export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  emailList: Array<string> = [];
  constructor(
    message1: string,
    message2: string,
    message3: string,
    message4: number,
    message5: Array<string>
  ) {
    this.firstName = message1;
    this.middleName = message2;
    this.lastName = message3;
    this.age = message4;
    this.emailList = message5;
  }

  greet() {
    return (
      'Olá! Meu nome é ' +
      this.firstName +
      ' ' +
      this.middleName +
      ' ' +
      this.lastName +
      ', tenho ' +
      this.age +
      ' anos e meu e-mail é ' +
      this.emailList
    );
  }
}


