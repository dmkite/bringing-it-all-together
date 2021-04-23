import React from 'react';

export const Pokemon = props => {
    return (
        <section className={`pokemon-card ${props.types[0].type.name}`}>
            <h2>{props.name}</h2>
            <img src={props.sprites.other['official-artwork'].front_default} alt=""/>
            <h3>Stats:</h3>
            {props.stats.map(stat => <div>
                <h4>{stat.stat.name}:</h4>
                <p>{stat.base_stat}</p>
            </div>)}
        </section>
    )
}