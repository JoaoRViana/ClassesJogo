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
        this.type = type
    }

    attack(){
        return `${type} atacou usando ${this.attackTypes[this.type]}`
    }
    
}