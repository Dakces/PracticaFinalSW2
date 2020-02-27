export class PokeModel {
    name : string
    trainer : string
    attack : string

    constructor(name, trainer, attack) {
        this.name = name
        this.trainer = trainer
        this.attack = attack
    }

    getName() {
        return this.name
    }
    setName(name : string) {
        this.name = name
    }
    getTrainer() {
        return this.trainer
    }
    setTrainer(trainer : string) {
        this.trainer = trainer
    }
    getAttack() {
        return this.attack
    }
    setAttack(attack : string) {
        this.attack = attack
    }
}