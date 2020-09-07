const FETCH_CARS = 'FETCH_CARS';
const URL = 'https://wagon-garage-api.herokuapp.com/';
const API_KEY = 'garage4649';

export function fetchCars() {
  const promise = fetch(`${URL}${API_KEY}/cars`).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
