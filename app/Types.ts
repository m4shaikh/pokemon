export interface PokemonResponse {
    id: number
    name: string
    base_experience: number
    height: number
    weight: number
    order: number
    is_default: boolean
    location_area_encounters: string
    
    abilities: {
        is_hidden: boolean
        slot: number
        ability: {
            name: string
            url: string
        }
    }[]

    forms: {
        name: string
        url: string
    }[]

    game_indices: {
        game_index: number
        version: {
            name: string
            url: string
        }
    }[]

    held_items: any[]

    moves: {
        move: {
            name: string
            url: string
        }
        version_group_details: {
            level_learned_at: number
            move_learn_method: {
                name: string
                url: string
            }
            version_group: {
                name: string
                url: string
            }
        }[]
    }[]

    species: {
        name: string
        url: string
    }

    sprites: {
        back_default: string | null
        back_female: string | null
        back_shiny: string | null
        back_shiny_female: string | null
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
        other: {
            dream_world: {
                front_default: string | null
                front_female: string | null
            }
            home: {
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
            }
            official_artwork: {
                front_default: string | null
                front_shiny: string | null
            }
            showdown: {
                back_default: string | null
                back_female: string | null
                back_shiny: string | null
                back_shiny_female: string | null
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
            }
        }
        versions: Record<string, any>
    }

    stats: {
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }[]

    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]

    cries: {
        latest: string
        legacy: string
    }
}