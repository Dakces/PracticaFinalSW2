export class PokeView {
    pokeTrainer(name : string, trainer : string) {
        console.log(`Trainer ${trainer} is the tamer of ${name}`)
    }
    pokeAttack(name : string, attack : string) {
        console.log(`${name} used ${attack}`)
    }
}