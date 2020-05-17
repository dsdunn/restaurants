export const filter = (restaurants, criteria = {}) => {
  if ( Object.values(criteria).find(criterion => criterion)) {
    restaurants = restaurants.filter(joint => {
      return matchesCriteria(joint, criteria);
    })
  }

  return restaurants;
};

export const getRestaurantsAndGenres = (restaurants = []) => {
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

  restaurants.sort((jointA, jointB) => {
    return jointA.name > jointB.name ? 1 : -1;
  });
  
  return ({
    formattedRestaurants: restaurants,
    genres: genres.sort()
  });
}

const matchesCriteria = (joint, criteria) => {
  let qualifies = true;
  let keys = Object.keys(criteria);

  for (let i = 0; i < keys.length; i++) {
    let criterion = keys[i];
    let value = criteria[criterion];

    if (!criteria[criterion]) continue;

    if (criterion === 'terms' && checkNameCityGenre(joint, criteria[criterion])) {
      continue;
    } else if (criterion !== 'terms' && joint[criterion].includes(value)) {
      continue;
    } else { 
      qualifies = false;
    }
  }
  return qualifies;
}

const checkNameCityGenre =  (joint, term) => {
  term = term.toLowerCase();

  return joint.name.toLowerCase().includes(term) || joint.city.toLowerCase().includes(term) || joint.genre.includes(term);
}




