const initialState = {
  tiles: [
    { name: 'People', link: '/people', icon: 'people.png' },
    { name: 'Films', link: '/films', icon: 'films.png' },
    { name: 'Starships', link: '/starships', icon: 'starships.png' },
    { name: 'Vehicles', link: '/vehicles', icon: 'vehicles.png' },
    { name: 'Species', link: '/species', icon: 'species.png' },
    { name: 'Planets', link: '/planets', icon: 'planets.png' }
  ]
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
