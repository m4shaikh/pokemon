import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { PokemonResponse } from './Types'
import { useLocalSearchParams } from 'expo-router'

const Details = () => {
  const [PokeDetail, setPokeDetail] = useState<PokemonResponse | undefined>()
  const params = useLocalSearchParams()

  useEffect(() => {
    fetchDetails()
  }, [])

  async function fetchDetails() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const data = await response.json()
    setPokeDetail(data)
  }

  // Maximum base stat cap in Pokémon (Eternamax Eternatus HP is 255)
  const MAX_BASE_STAT = 255

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingTop: 16 }} className='bg-gray-200'>
      
      {/* Header Info: Name, ID, Types */}
      <View className='flex flex-col items-center mb-4'>
        <Text className='text-3xl text-center capitalize font-bold text-gray-900'>
          {PokeDetail?.name} <Text className='text-lg text-gray-500'>#{PokeDetail?.id}</Text>
        </Text>
        
        {/* Types */}
        <View className='flex flex-row gap-2 mt-2'>
          {PokeDetail?.types.map((typeItem, index) => (
            <Text key={index} className='text-sm uppercase bg-gray-300 px-3 py-1 rounded-full font-semibold overflow-hidden text-gray-700'>
              {typeItem.type.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Image Card of Pokémon */}  
      <View className='flex flex-row items-center justify-center rounded-2xl mx-6 mb-4 py-2 shadow-sm' style={{ backgroundColor: typeof params.Shade === 'string' ? params.Shade : '#ccc' }}>
        <Image
          source={{ uri: PokeDetail?.sprites?.front_default ?? undefined }}
          style={{ height: 152, width: 152 }} 
        />
        <Image
          source={{ uri: PokeDetail?.sprites?.back_default ?? undefined }}
          style={{ height: 152, width: 152 }} 
        />
      </View>

      {/* Physical Characteristics (Height, Weight, Base Experience) */}
      <View className='mx-6 bg-white p-4 rounded-2xl shadow-sm mb-4 flex flex-row justify-around'>
        <View className='items-center'>
          <Text className='text-gray-400 text-xs uppercase font-bold'>Height</Text>
          <Text className='text-gray-800 font-bold text-lg'>{((PokeDetail?.height ?? 0) / 10).toFixed(1)} m</Text>
        </View>
        <View className='items-center'>
          <Text className='text-gray-400 text-xs uppercase font-bold'>Weight</Text>
          <Text className='text-gray-800 font-bold text-lg'>{((PokeDetail?.weight ?? 0) / 10).toFixed(1)} kg</Text>
        </View>
        <View className='items-center'>
          <Text className='text-gray-400 text-xs uppercase font-bold'>Base Exp</Text>
          <Text className='text-gray-800 font-bold text-lg'>{PokeDetail?.base_experience}</Text>
        </View>
      </View>
      
      {/* Abilities of Pokémon */}  
      <View className='mx-6 bg-white p-4 rounded-2xl shadow-sm mb-4'>
        <Text className='text-xl font-bold mb-2 text-gray-800'>Abilities</Text>
        <View className='flex flex-row flex-wrap'>
          {PokeDetail?.abilities.map((item, index) => (
            <View key={index} className='bg-gray-100 px-3 py-1.5 rounded-lg mr-2 mb-2'>
              <Text className='capitalize text-gray-700 font-medium'>
                {item.ability.name} {item.is_hidden && <Text className='text-xs text-blue-500'>(Hidden)</Text>}
              </Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* Forms of Pokémon */}  
      <View className='mx-6 bg-white p-4 rounded-2xl shadow-sm mb-4'>
        <Text className='text-xl font-bold mb-2 text-gray-800'>Forms</Text>
        <View className='flex flex-row flex-wrap'>
          {PokeDetail?.forms.map((form, index) => (
            <View key={index} className='bg-gray-100 px-3 py-1.5 rounded-lg mr-2 mb-2'>
              <Text className='capitalize text-gray-700 font-medium'>{form.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stats of Pokémon with 255 Max Scaling */}  
      <View className='mx-6 bg-white p-4 rounded-2xl shadow-sm mb-4'>
        <Text className='text-xl font-bold mb-3 text-gray-800'>Base Stats</Text>
        <View className='flex flex-col gap-3'>
          {PokeDetail?.stats.map((statItem, index) => {
            const statPercentage = (statItem.base_stat / MAX_BASE_STAT) * 100
            return (
              <View key={index} className='flex flex-row items-center justify-between'>
                <Text className='capitalize text-gray-600 w-32 font-medium text-xs'>
                  {statItem.stat.name.replace('-', ' ')}
                </Text>
                <Text className='font-bold text-gray-800 w-8 text-right text-sm'>
                  {statItem.base_stat}
                </Text>
                {/* Scaled stat bar indicator */}
                <View className='flex-1 h-2 bg-gray-100 ml-4 rounded-full overflow-hidden'>
                  <View 
                    className='h-full bg-blue-500 rounded-full' 
                    style={{ width: `${Math.min(statPercentage, 100)}%` }} 
                  />
                </View>
              </View>
            )
          })}
        </View>
      </View>

      {/* Moves of Pokémon */}  
      <View className='mx-6 bg-white p-4 rounded-2xl shadow-sm'>
        <Text className='text-xl font-bold mb-2 text-gray-800'>Moves ({PokeDetail?.moves.length})</Text>
        <View className='flex flex-row flex-wrap max-h-48 overflow-hidden'>
          {PokeDetail?.moves.slice(0, 20).map((moveItem, index) => (
            <View key={index} className='bg-gray-100 px-2.5 py-1 rounded-md mr-2 mb-2'>
              <Text className='capitalize text-gray-600 text-xs font-medium'>
                {moveItem.move.name.replace('-', ' ')}
              </Text>
            </View>
          ))}
        </View>
        <Text className='text-xs text-gray-400 mt-2 text-center'>Showing first 20 moves</Text>
      </View>

    </ScrollView>
  )
}

export default Details