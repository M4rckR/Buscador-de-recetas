import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../store/useAppStore"



export default function FavoritosPage() {

  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length, [favorites])
  return (
    <>
      <h1 className="text-6xl font-extrabold">favoritosPage</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
        {favorites.map(favorite => (
          <DrinkCard key={favorite.idDrink} drink={favorite} />
        ))}
      </div>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">No hay favoritos aun, agrega recetas a favoritos</p>
        </>
      )}
    </>
  )
}


