import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import type { PokeType } from './Cards'
import { View } from 'react-native'
import { Link } from 'expo-router'
const App = () => {
    const [Pokelist, setPokelist] = useState<PokeType[]>([])

    useEffect(() => {
        fetchPoke()
    }, [])

    async function fetchPoke() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await response.json()
            setPokelist(data.results)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View className='flex flex-col items-center'>

            {Pokelist.map((poke: PokeType) => {
                return (
                    <Cards name={poke.name} url={poke.url} key={poke.name} />
                )
            })}

        </View>
    )
}

export default App