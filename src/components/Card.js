import React from 'react';
import styled from 'styled-components';

const StyledPlanet = styled.div`
    width: 80vw;
    display:flex;
    margin-top: 10vh;
    background-color : white;
    max-height: 80vh;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    padding:40px;
    justify-content: flex-end;

    .planet-picture {
        overflow: hidden;
        margin-right: 40px;
    }

    .planet-description{
        max-width: 20em;
        min-width: 20em;
        overflow: scroll;
    }
`

const Card = props => {

    const { date, explanation, hdurl, copyright, title } = props;

    return (
        <StyledPlanet>
            <div className="planet-picture">
                <img src={hdurl}></img>
            </div>
            <div className="planet-description">
                <h1>{title}</h1>
                <h2>{copyright}</h2>
                <h3>{date}</h3>
                <p>{explanation}</p>
            </div>
        </StyledPlanet>
    )
}

export default Card;