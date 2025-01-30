import { useEffect, useMemo, useState,ChangeEvent } from "react"
import {NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../store/useAppStore"


export const Header = () => {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''    
    })

    const {pathname} = useLocation()
    const isHome = useMemo(() => pathname === `/`, [pathname])


    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    const handleChangue = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(searchFilters).includes('')){
            console.log('Todos los campos son obligatorios')
            showNotification({
                text: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        //Consultar las recetas
        searchRecipes(searchFilters)
    }

    useEffect(() => {
        fetchCategories()
    }, [])


  return (
    <header className={isHome? 'bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo header" />
                </div>
                <nav className="flex gap-4">
                    {/* <Link 
                        to="/"
                        className="text-white uppercase font-bold"
                    >Inicio</Link>

                    <Link 
                        to="/favoritos"
                        className="text-white uppercase font-bold"
                    >Favoritos</Link> */}
                    <NavLink 
                        to="/"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }
                    >Inicio</NavLink>

                    <NavLink 
                        to="/favoritos"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }
                    >Favoritos</NavLink>
                </nav>
            </div>
            {isHome && (
                <form
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-20 p-10 rounded-lg shadow space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Nombre o Ingredientes</label>
                        <input 
                            id="ingredient" 
                            type="text"
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            placeholder="Nombre o ingrediente. Ej. Vodka, Ron, etc." 
                            onChange={handleChangue}
                            value={searchFilters.ingredient}
                        />
                    </div>
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Categoria</label>
                        <select
                            id="category"
                            name="category"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            onChange={handleChangue}
                            value={searchFilters.category}
                        >
                            <option value=""> -- Seleccione --</option>
                            {categories.drinks.map((category) => (
                                <option 
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >{category.strCategory}</option>
                            ))}
                            </select> 

                    </div>
                    <input 
                        type="submit" 
                        value="Buscar recetas" 
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg "
                        />
                </form>
            )}
        </div>
    </header>
  )
}
