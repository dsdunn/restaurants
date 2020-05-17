export const filter = (restaurants, criteria = {}) => {
  return restaurants.sort((jointA, jointB) => {
    return jointA.name > jointB.name ? 1 : -1;
  })
}