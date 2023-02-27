
// task 1

// Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.

// example 1


// function getPromise(): Promise<[string, number]> {
//   return new Promise((resolve) => {
//     resolve(['Text', 50]);

//   });
// }

function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);

  });
}

getPromise ()
.then((data) => {
  console.log(data);
});


// task2
// У вас є наступний тип даних

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

// Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.

// Pick<Page, 'annotation' | 'numberPage'> 

function compare (top: Pick <AllType, 'name' | 'color' >, bottom: Pick <AllType, 'position' | 'weight'>) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

console.log(compare({name:'dfg', color:'red'}, {position: 1, weight: 3}));


// task 3
// Вкажіть дженерики для функції об'єднання об'єктів.

function merge <T extends object, U extends object> (objA:T, objB:U) {
  return Object.assign(objA, objB);
}

const myDiarOb = merge({ name: 'GH' }, { age: 33 })

// task4
// У вас є наступні класи

interface IMagic{
  miracle: boolean,
  fey: string
}

class Component <T> {
  constructor (public props:T) {

  }
}

class Page extends Component <IMagic> {
  pageInfo () {
    console.log(this.props.fey);
  }
}

const myMiracle = new Page({
  miracle: true,
  fey: 'Romchik'
});

console.log(myMiracle);
myMiracle.pageInfo();

// Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.