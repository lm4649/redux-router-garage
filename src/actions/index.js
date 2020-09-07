export const FETCH_CARS = 'FETCH_CARS';
export const POST_CAR = 'POST_CAR';
const URL = 'https://wagon-garage-api.herokuapp.com/';
const API_KEY = 'garage4649';

export function fetchCars() {
  const promise = fetch(`${URL}${API_KEY}/cars`).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(body) {
  const promise = fetchCars(`${URL}${API_KEY}/cars`, {
    method: 'POST',
    headers: { Content-Type: 'application/json'},
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_CAR,
    payload: promise
  }
}
