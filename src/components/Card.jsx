import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './pokeball_loader.css'


function Card({pokeId, setSelectedPokemon}) {
    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(false)

    const getPokemon = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${URL}${pokeId}`)
            setPokeData(response.data)
            setSelectedPokemon(response.data)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const pokeHover = () => {
        setSelectedPokemon(pokeData)
    }

  return (
        <div className='m-5 flex justify-center items-center' style={{width: "280px", height: "90px", position: "relative"}}>
            {
                loading ? <div className="wrapper flex items-center justify-center bg-blue-300 w-full h-full rounded-xl">
                    <div className="pokeball"></div>
                </div> : 
                <div className='bg-blue-300 w-full h-full rounded-xl hover:bg-blue-400 items-center shadow-lg hover:shadow' onMouseOver={pokeHover}>
                    <div className='flex flex-row items-center px-4 mx-auto justify-between'>
                        <h1 className='font-bold text-xl ml-4'>{pokeId}</h1>
                        <img className='mx-auto' style={{ height:"90px", maxHeight: "90px", width: "auto"}} src={pokeData.sprites?.front_default} alt='Pokemon' /> 
                        <div className='font-bold text-lg mr-4' style={{ textTransform: "uppercase", letterSpacing: "1px"}}>{pokeData.name}</div>
                    </div>
                </div>
            }
        </div>

  )
}

export default Card