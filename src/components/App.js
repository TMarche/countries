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

    renderCountries() {
        if (!this.props.countries) {
            return null
        }

        return (
            <div className="countries">
                {this.props.countries
                    .filter( (x) => !this.state.nameFilter || 
                        x.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
                    .map( (x) =>
                    <CountryCard
                        name={x.name}
                        // Need name, population, region, and capital
                        population={x.population}
                        region={x.region}
                        capital={x.capital}
                        key={x.numericCode}
                    />)
                }
            </div>
        )
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
                       value={this.state.nameFilter}
                       onChange={this.handleNameFilterChange}
                   />
                   <input type="select"></input>
               </div>
   
               {/* Country Grid */}
               {this.renderCountries()}
           </>
       )
    }
    
    handleNameFilterChange = (event) => {
        this.setState({nameFilter: event.target.value})
    }
    
    handleRegionFilterChange = (event) => {
        this.setState({regionFilter: event.target.value})
    }
}

const mapStateToProps = (state) => {
    return {countries: state.countries}
}


export default connect(mapStateToProps, {fetchCountries})(App)