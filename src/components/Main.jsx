
import React, {useEffect, useState} from 'react'
import Card from './Card'
import PokeInfo from './PokeInfo'


function Main() {

    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [pokeRange, setPokeRange] = useState([1, 8])
    const [disabled, setDisabled] = useState(false)

    const pokeNext = () => {
        setPokeRange([pokeRange[0] + 8, pokeRange[1] + 8])
    }

    const pokePrev = () => {
        if (pokeRange[0] - 8 >= 0){
            setPokeRange([pokeRange[0] - 8, pokeRange[1] - 8])
        }
    }

    useEffect(() => {
        if (pokeRange[0] === 1){
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [pokeRange])
    
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex flex-row mx-auto justify-around mx-auto'>
            <div className='flex flex-col items-center justify-center bg-white p-1 shadow-xl  rounded-xl my-12'  style={{width: "45%"}}>
                <div className='flex flex-col items-center bg-white rounded-xl border-2 border-black'>
                    <div className='flex flex-wrap justify-around items-center mt-2'>
                        {
                        Array.from({ length: pokeRange[1] - pokeRange[0] + 1 }, (_, index) => (
                            <Card key={pokeRange[0] + index} pokeId={pokeRange[0] + index} setSelectedPokemon={setSelectedPokemon} />
                        ))
                        }
                    </div>
                    <div className=' flex flex-row justify-between items-center my-4' style={{width: '60%'}}>
                        <button className={` text-white px-4 rounded-md outline-none ${disabled ? "bg-gray-500" : "bg-red-500 hover:bg-red-600 shadow-lg hover:shadow "}`} onClick={pokePrev} disabled={disabled}>Previous</button>
                        <button  className='hover:bg-red-600 outline-none text-white px-4 bg-red-500 rounded-md shadow-lg hover:shadow' onClick={pokeNext}>Next</button>
                    </div>
                </div>

            </div>
            <div className='flex bg-white my-4 p-2 rounded-xl shadow-xl ' style={{width: '400px', maxWidth: '400px'}}>
                <PokeInfo selectedPokemon={selectedPokemon}/>
            </div>
        </div>
    </div>
  )
}

export default Main