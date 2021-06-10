import restCountries from "../apis/restCountries"

export const fetchCountries = () => async dispatch => {
    const response = await restCountries.get('/all')

    dispatch({type: "FETCH_COUNTRIES", payload: response.data})
};
