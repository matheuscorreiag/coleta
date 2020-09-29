exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "matheus",
          password: "0000",
          email: "matheuscorreia02@hotmail.com",
          cell: "99999999",
          center: "CI",
          city: "JP",
          state: "Paraíba",
        },
      ]);
    });
};
