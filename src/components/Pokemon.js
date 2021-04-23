import React from 'react';

export const Pokemon = props => {
    return (
        <section>
            <h2>Place holder</h2>
            <img src="" alt=""/>
            <h3>Stats:</h3>
            {props.stats.map(stat => <div>
                <h4>{stat.stat.name}:</h4>
                <p>{stat.base_stat}</p>
            </div>)}
        </section>
    )
}