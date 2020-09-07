export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const POST_CAR = 'POST_CAR';
export const DELETE_CAR = 'DELETE_CAR';
const URL = 'https://wagon-garage-api.herokuapp.com/';
const API_KEY = 'garage4649';

export function fetchCars() {
  const promise = fetch(`${URL}${API_KEY}/cars`).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${URL}cars/${id}`).then(r => r.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(body, callback) {
  const request = fetch(`${URL}${API_KEY}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json()).then(callback);

  return {
    type: POST_CAR,
    payload: request
  };
}

export function deleteCar(id, callback) {
  const request = fetch(`${URL}cars/${id}`, {
    method: 'DELETE' }).then(r => r.json()).then(callback);

  return {
    type: DELETE_CAR,
    payload: request
  };
}
