export const filter = (restaurants, criteria = {}) => {
  return restaurants.sort((jointA, jointB) => {
    return jointA.name > jointB.name ? 1 : -1;
  })
};

export const getGenres = (restaurants = []) => {
  let genres = [];
  let genreReducer = (genreList) => {
    genreList.forEach(genre => {
      if (!genres.includes(genre)){
        genres.push(genre);
      }
    })
  }

  restaurants.forEach(joint => {
    let { genre } = joint;

    if (genre) {
      let genreList = genre.split(',');

      genreReducer(genreList);

      joint.genre = genreList.sort().join(', ');
    }
  })
  return ({
    formattedRestaurants: restaurants,
    genres: genres.sort()
  });
}