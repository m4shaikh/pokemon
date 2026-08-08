import React, { useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native'
import { pokemonTypeColors } from './TypeColor'
import { Link } from 'expo-router'
export interface PokeType{
    name: string
    url: string
}


const Cards = ({ name, url }: PokeType) => {
    const [PokeImage, setPokeImage] = useState<string>('')
    const [PokeColor, setPokeColor] = useState<string>('')
    useEffect(() => {
        fetchDetails()
    }, [])

    async function fetchDetails() {
        const response = await fetch(`${url}`)
        const data = await response.json()
        

        setPokeImage(data.sprites.front_default)
        
        const colorData = pokemonTypeColors[data.types[0].type.name]
        setPokeColor(colorData ? colorData.hex+50 : '#A8A77A')
    }

    return (
        <Link href={{pathname:'/Details',params:{name:name , Shade:PokeColor} }} className='m-4'>
            <View style={{ backgroundColor: PokeColor || '#A8A77A' }} className='rounded-xl p-4'>
                <Text className='text-xl text-center font-bold capitalize'>
                    {name}
                </Text>
                <Image
                    className='w-[270px] h-[300px]' 
                    source={{ uri: PokeImage }}
                />
            </View>
        </Link>
    )
}

export default Cards