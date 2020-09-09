export function addToFavorites(dog) {
  return {
    type: '@favorites/ADD',
    dog,
  };
}
