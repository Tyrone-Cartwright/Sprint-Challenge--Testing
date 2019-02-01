exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { title: "Pacman", genre: "Arcade", releaseYear: 1980 },
        { title: "MSPacman", genre: "Arcade", releaseYear: 1981 },
        { title: "SpaceInvaders", genre: "Arcade", releaseYear: 1980 }
      ]);
    });
};
