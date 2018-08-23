const initialState = {
  tiles: [
    { name: 'People', link: 'people', className: '' },
    { name: 'Films', link: 'films', className: '' },
    { name: 'Starships', link: 'starships', className: '' },
    { name: 'Vehicles', link: 'vehicles', className: '' },
    { name: 'Species', link: 'species', className: '' },
    { name: 'Planets', link: 'planets', className: '' }
  ]
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
