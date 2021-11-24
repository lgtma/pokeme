import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePoke) => {},
  removeFavorite: (pokeId) => {},
  itemIsfavorite: (pokeId) => {}
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem('_userFavorites', JSON.stringify(userFavorites));
  }, [userFavorites])

  const addFavoriteHandler = (favoritePoke) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePoke);
    });
  }
  
  const removeFavoriteHandler = (pokeId) => {
    setUserFavorites( (prevUserFavorites) => {
      return prevUserFavorites.filter(poke => poke.id !== pokeId);
    })
  }

  const itemIsFavoriteHandler = (pokeId) => {
    return userFavorites.some(poke => poke.id === pokeId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsfavorite: itemIsFavoriteHandler
  };

  console.log('context ', context);

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>;
}

export default FavoritesContext;