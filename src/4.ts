class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    } else {
      console.log("this door is closed");
    }
  }
  public abstract openDoor(key: Key): void;
}


class MyHouse extends House {
    public openDoor(key: Key): boolean {
        if(key.getSignature() === this.key.getSignature()) {
            this.door = true
            return this.door
        } else {
           return this.door = false
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
