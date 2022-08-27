// Import stylesheets
import './style.css';
import { Person } from './person.ts';

let persona = new Person('Priscila', 'Vieira', 'Fraifer', 35, [
  'teste@teste.com',
]);
const appClasse: HTMLElement = document.getElementById('app1');
appClasse.innerHTML = `
  <h1>Tarefa - Classes em Typescript</h1>
  <h2>${persona.greet()}</h2>

  <h1>Mostrando os atributos do objeto do tipo Person</h1>
  <h2>${'Primeiro nome: ' + persona.firstName}</h2>
  <h2>${'Nome do meio: ' + persona.middleName}</h2>
  <h2>${'Último nome: ' + persona.lastName}</h2>
  <h2>${'Idade: ' + persona.age + ' anos'}</h2>
  <h2>${'E-mail: ' + persona.emailList}</h2>
`;
