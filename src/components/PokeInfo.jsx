import React, { useEffect,useState } from 'react'

function PokeInfo({selectedPokemon}) {
    const [accent, setAccent] = useState('gray-400')
    const [accentBorder, setAccentBorder] = useState('gray-400')

    useEffect(() => {
        switch (selectedPokemon?.types[0].type.name) {
            case 'normal':
                setAccent('bg-gray-400')
                setAccentBorder('border-gray-400')

                break
            case 'fighting':
                setAccent( 'bg-red-500')
                setAccentBorder('border-red-500')
                break
            case 'flying':
                setAccent( 'bg-blue-400')
                setAccentBorder('border-blue-400')
                break
            case 'poison':
                setAccent ('bg-purple-500')
                setAccentBorder('border-purple-500')
                break
            case 'ground':
                setAccent ('bg-yellow-600')
                setAccentBorder('border-yellow-600')
                break
            case 'rock':
                setAccent ('bg-yellow-400')
                setAccentBorder('border-yellow-400')
                break
            case 'bug':
                setAccent ('bg-green-400')
                setAccentBorder('border-green-400')
                break
            case 'ghost':
                setAccent ('bg-purple-700')
                setAccentBorder('border-purple-700')    
                break
            case 'steel':
                setAccent ('bg-gray-500')
                setAccentBorder('border-gray-500')
                break
            case 'fire':
                setAccent ('bg-red-600')
                setAccentBorder('border-red-600')   
                break
            case 'water':
                setAccent ('bg-blue-600')
                setAccentBorder('border-blue-600')
                break
            case 'grass':
                setAccent ('bg-green-600')
                setAccentBorder('border-green-600') 
                break
            case 'electric':
                setAccent ('bg-yellow-400')
                setAccentBorder('border-yellow-400')    
                break
            case 'psychic':
                setAccent ('bg-pink-400')
                setAccentBorder('border-pink-400')  
                break
            case 'ice':
                setAccent ('bg-blue-200')
                setAccentBorder('border-blue-200')  
                break
            case 'dragon':
                setAccent ('bg-purple-900')
                setAccentBorder('border-purple-900')    
                break
            case 'dark':
                setAccent ('bg-gray-900')
                setAccentBorder('border-gray-900')
                break
            case 'fairy':
                setAccent ('bg-pink-200')
                setAccentBorder('border-pink-200')
                break
            default:
                setAccent ('bg-gray-400')
                setAccentBorder('border-gray-400')
                break
        }
        console.log(selectedPokemon?.types[0].type.name)
        console.log(accent)
    }, [selectedPokemon])
    
    const getTypeColor = (type) => {
        switch (type) {
            case 'normal':
                return 'bg-gray-400'
            case 'fighting':
                return 'bg-red-500'
            case 'flying':
                return 'bg-blue-400'
            case 'poison':
                return 'bg-purple-500'
            case 'ground':
                return 'bg-yellow-600'
            case 'rock':
                return 'bg-yellow-400'
            case 'bug':
                return 'bg-green-400'
            case 'ghost':
                return 'bg-purple-700'
            case 'steel':
                return 'bg-gray-500'
            case 'fire':
                return 'bg-red-600'
            case 'water':
                return 'bg-blue-600'
            case 'grass':
                return 'bg-green-600'
            case 'electric':
                return 'bg-yellow-400'
            case 'psychic':
                return 'bg-pink-400'
            case 'ice':
                return 'bg-blue-200'
            case 'dragon':
                return 'bg-purple-900'
            case 'dark':
                return 'bg-gray-900'
            case 'fairy':
                return 'bg-pink-200'
            default:
                return 'bg-gray-400'
        }
    }


  return (
    <div style={{maxWidth: '400px'}}className={`flex flex-col w-full justify-center items-center p-4 border-2 rounded-md ${accentBorder}`} >
        <h1 className='text-xl font-bold uppercase' style={{ letterSpacing: "2px"}}>{selectedPokemon?.name}</h1>
        <div className="flex flex-row justify-center mt-1">
        {
            selectedPokemon?.types?.map((item) => (
            <div key={item.slot} className={`text-lg uppercase text-white rounded-lg px-2 mx-1 truncate ${getTypeColor(item.type.name)}`}>
                <div>{item.type.name}</div>
            </div>
            ))
        }
        </div>
        <img className='' style={{height: "280px", width: "auto", margin: "0"}} src={selectedPokemon?.sprites?.front_default} alt='Charmander' />
        <div className="flex flex-row justify-center mb-2">
        {
            selectedPokemon?.abilities?.map((item) => (
            <div key={item.slot} className={`text-lg uppercase text-white rounded-lg px-2 mx-1 truncate ${accent}`}>
                <div>{item.ability.name}</div>
            </div>
            ))
        }
        </div>
        <div className={`flex flex-col justify-between text-xl my-2 bg-white rounded-lg p-4 w-64 shadow-md border-2 ${accentBorder}`}>
            <div className='flex flex-row justify-between'>
                <div>HP:</div><div>{selectedPokemon?.stats[0].base_stat}</div>
            </div>
            <div className='flex flex-row justify-between '>
                <div>Attack:</div><div>{selectedPokemon?.stats[1].base_stat}</div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>Defense:</div><div>{selectedPokemon?.stats[2].base_stat}</div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>Special Attack:</div><div>{selectedPokemon?.stats[3].base_stat}</div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>Special Defense:</div><div>{selectedPokemon?.stats[4].base_stat}</div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>Speed:</div><div>{selectedPokemon?.stats[5].base_stat}</div>
            </div>
        </div>
    </div>
  )
}

export default PokeInfo