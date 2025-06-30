

// Creating Object using class
// class --> keyword se class banate hain

    class Animal {
        constructor(name, age) {
            this.name = name;
            this.type = "Animal";
            this.age = age;
        }

        sound() {
            console.log(`This is a ${this.type} and it makes sound`);
        }
    }

    const dog = new Animal("Dog", 5);
    console.log(dog.name);
    dog.sound();
