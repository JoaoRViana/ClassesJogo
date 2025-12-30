class Hero{
    attackTypes= {
        mago:"magia",
        guerreiro:"espada",
        monge:"artes marciais",
        ninja:"shuriken"
    }

    constructor(age,name,type){
        this.age = age;
        this.name = name;
        this.type = type.toLowerCase()
    }

    attack(){
        return ` O ${this.type} ${this.name} atacou usando ${this.attackTypes[this.type]}`
    }

}

var person = new Hero(20,"João",'ninja');
console.log(person.attack())