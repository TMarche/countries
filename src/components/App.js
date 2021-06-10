import React from 'react'
import "../css/styles.css"
import CountryCard from "./CountryCard"
import {fetchCountries} from "../actions"
import {connect} from "react-redux"

class App  extends React.Component {
    state = {
        nameFilter: "",
        regionFilter: "",
    }

    componentDidMount() {
        this.props.fetchCountries();
    }


    render() {
        return (
           <>
               <div className="header">
                   <h1 className="header__title">Where in the World?</h1>
                   <button className="header__button">Dark Mode</button>
               </div>
               <div className="controls">
                    <input
                        type="text"
                        name="nameFilter"
                        value={this.state.nameFilter}
                        onChange={this.handleNameFilterChange}
                    />
                    <input
                        list="regions"
                        name="regionFilter"
                        onChange={this.handleRegionFilterChange}
                        onClick={this.handleRegionFilterClick}
                        value={this.state.regionFilter}
                    />
                    <datalist id="regions">
                        <option value="Africa" />
                        <option value="America" />
                        <option value="Asia" />
                        <option value="Europe" />
                        <option value="Oceania" />
                    </datalist>
               </div>
   
               {/* Country Grid */}
               {this.renderCountries()}
           </>
       )
    }

    renderCountries() {
        if (!this.props.countries) {
            return null
        }

        return (
            <div className="countries">
                {this.props.countries
                    .filter( (x) => !this.state.nameFilter || 
                        x.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
                    .filter( (x) => !this.state.regionFilter || 
                        x.region.toLowerCase().includes(this.state.regionFilter.toLowerCase()))
                    .map( (x) =>
                    <CountryCard
                        name={x.name}
                        // toLocaleString adds commas separators to numbers
                        population={x.population.toLocaleString()}
                        region={x.region}
                        capital={x.capital}
                        key={x.numericCode}
                    />)
                }
            </div>
        )
    }

    
    handleNameFilterChange = (event) => {
        this.setState({nameFilter: event.target.value})
    }
    
    handleRegionFilterChange = (event) => {
        this.setState({regionFilter: event.target.value})
    }

    handleRegionFilterClick = () => {
        this.setState({regionFilter: ""})
    }
}

const mapStateToProps = (state) => {
    return {countries: state.countries}
}


export default connect(mapStateToProps, {fetchCountries})(App)