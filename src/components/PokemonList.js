import React from 'react';
import {Pokemon} from './Pokemon'
import {http_get} from '../utils/http'


export const PokemonList = () => {
    const [pokemon, setPokemon] = React.useState([])
    React.useEffect(() => {
        return http_get().then(data => setPokemon(data))
    }, [])

    return (
        pokemon && pokemon.length
            ? pokemon.map(p => <Pokemon {...p}/>)
            : 'Loading...'
    )
}