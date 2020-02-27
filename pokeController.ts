import {PokeModel} from "../practicafinal/pokeModel"
import {PokeView} from "../practicafinal/pokeView"

class PokeController {
    pokeModel : PokeModel
    pokeView : PokeView
    constructor (pokeModel : PokeModel, pokeView : PokeView) {
        this.pokeModel = pokeModel
        this.pokeView = pokeView
    }

    editPokeModel() {
        this.pokeModel.setName("Rata cuqui")
        this.pokeModel.setTrainer("El mostaza")
        this.pokeModel.setAttack("Chumanborutoooo!")
    }
    print() {
        this.pokeView.pokeTrainer(this.pokeModel.getName(), this.pokeModel.getTrainer())
        this.pokeView.pokeAttack(this.pokeModel.getName(), this.pokeModel.getAttack())
    }
}

let main = () => {
    let pokeModel = new PokeModel("Pikachu","Ash","Impactrueno")
    let pokeView = new PokeView()
    let pokeController : PokeController = new PokeController(pokeModel, pokeView)

    pokeController.print()
    console.log("-----------------------------------------------------------------")
    pokeController.editPokeModel()
    pokeController.print()
}
main()