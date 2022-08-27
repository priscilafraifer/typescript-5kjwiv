// Import stylesheets
import './style.css';

class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  email: string;
  constructor(
    message1: string,
    message2: string,
    message3: string,
    message4: number,
    message5: string
  ) {
    this.firstName = message1;    
    this.middleName = message2;
    this.lastName = message3;
    this.age = message4;
    this.email = message5;
  }
  greet() {
    return (
      'FirstName: ' +
      this.firstName + 
      ' '+
      'MiddleName: ' +
      this.middleName +
      ' ' +
      'LastName' +
      this.lastName +
      '! ' +
      'Voce tem ' +
      this.age +
      ' anos '
    );
  }
}

let greeter = new Person('Priscila', 'Vieira', 'Fraifer', 35, 'teste@teste.com');

const appClasse: HTMLElement = document.getElementById('app1');
appClasse.innerHTML = `
  <h1>Tarefa - Parte 1</h1>
  <h2>${greeter.greet()}!</h2>
`;

function fullName(person: {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
}): string {
  return person.name + '' + person.middleName + '' + person.lastName + '' + person.email;
}

const appFunction: HTMLElement = document.getElementById('app2');
appFunction.innerHTML = `
<h1>Tarefa - Parte 2</h1>
<h2>Atributos do objeto do tipo Person: ${fullName({
  lastName: 'Fraifer ',
  middleName: 'Vieira ',
  name: 'Priscila ',
  email: 'teste@teste.com'
})}</h2>
`;
