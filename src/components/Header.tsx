// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavLink, useLocation } from "react-router-dom"



export const Header = () => {

    const location = useLocation()
    console.log(location)

  return (
    <header className="bg-slate-800">
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
        </div>
    </header>
  )
}
