import { useAppStore } from "../store/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink:Drink
}

export const DrinkCard = ({drink}:DrinkCardProps) => {

const selectRecipe = useAppStore(state => state.selectRecipe)

  return (
    <div className="border shadow-lg overflow-hidden">
        <div>
            <img className="hover:scale-125 transition-transform hover:rotate-2" src={`${drink.strDrinkThumb}`} alt={`Imagen de ${drink.strDrink}`} />
        </div>
        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button 
                type="button" 
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 w-full px-4 rounded text-lg mt-4 cursor-pointer"
                onClick={() => selectRecipe(drink.idDrink)}
            >Ver receta</button>
        </div>
    </div>
  )
}
