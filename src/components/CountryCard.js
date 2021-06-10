import React from 'react'

class CountryCard extends React.Component {
    render() {
        return (
            <div className="countries__item">
                <div 
                    className="countries__item__flag"
                    style={{
                        backgroundImage: `url(${this.props.flag})`
                    }}
                />
                <div className="countries__item__detail">
                    <h3>{this.props.name}</h3>
                    <p>Population: {this.props.population}</p>
                    <p>Region: {this.props.region}</p>
                    <p>Capital: {this.props.capital}</p>
                </div>
            </div>
        )
    }
}

export default CountryCard

