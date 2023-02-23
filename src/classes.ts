class Key {
  public signature: number;
  constructor() {
    this.signature = Math.floor(Math.random()*2+1);
   }
  public getSignature(): number {
    return this.signature;
  }

}

class Person{
  constructor(private key: Key) {
    // this.key = key
   };
  public getKey(): Key {
    return this.key;
}

}

abstract class House {
  public door = false;
  private tenants: Person[] = [];
  constructor (public key: Key) {
    // this.key = key;

  }
  
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Двері відкриті")
      return;
    }

    throw new Error("Двері закриті")
  }

  public abstract openDoor (key: Key): boolean;

}

// class MyHouse extends House {
//   public openDoor(key: Key) {
//     if (key.getSignature() === this.key.getSignature()) {
//       console.log('Заходьте додомку')
//       return this.door = true;
//     }
//     throw new Error("Знайди інший ключ");
//   }
// }

class MyHouse extends House {
  openDoor (key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return this.door = true;
  }
}

const key = new Key();
const key2 = new Key();

const house = new MyHouse(key);
const personn = new Person(key2);

house.openDoor(personn.getKey());

house.comeIn(personn);
