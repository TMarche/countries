import React from 'react'

class CountryCard extends React.Component {
    render() {
        return (
            <div className="countries__item">
                <h3>{this.props.name}</h3>
                <p>Population: {this.props.population}</p>
                <p>Region: {this.props.region}</p>
                <p>Capital: {this.props.capital}</p>
            </div>
        )
    }
}

export default CountryCard

