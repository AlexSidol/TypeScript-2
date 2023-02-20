const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

let age: number;
let nameV: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;

let anything: any;
anything = 'Text';
anything = {};

age = 50;
nameV = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;

let callback = (a: number): number => {
  return 100 + a;
};

callback(33);

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// Незмінний масив (tuple)

let person: [string, number];

person = ['Max', 21];

// Enum

enum Status {
  LOADING,
  READY,
}

let page = {
  load: Status.LOADING,
};

if (page.load === Status.LOADING) {
  console.log('Завантаження в процесі');
} else {
  console.log('Готово для перегляду');
}

// Union Type або або
let union: string | number;

// Literal Type тільки одне з двох тип однаковий

let literal: 'enable' | 'disable';

// Типи для функцій

function showMessage(message: string): void {
  console.log(message);
}

showMessage('Hello World');

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type myPage1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date,
    updateAt: Date,
  };
};

let myTime = new Date();

const page2: myPage1 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

const page1: myPage1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt:'2021-01-01',
    updateAt:'2021-05-01',
  },
};
