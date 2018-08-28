const initialState = {
  tiles: [
    { name: 'People', link: '/people', icon: 'people.jpg' },
    { name: 'Films', link: '/films', icon: 'films.jpg' },
    { name: 'Starships', link: '/starships', icon: 'starships.jpg' },
    { name: 'Vehicles', link: '/vehicles', icon: 'vehicles.jpg' },
    { name: 'Species', link: '/species', icon: 'species.jpg' },
    { name: 'Planets', link: '/planets', icon: 'planets.jpg' }
  ]
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
