exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          VIN: "QWERTYUIOPPIUYTR",
          make: "Toyota",
          model: "corolla",
          mileage: "12254",
          transmissionType: "Manual",
          titleStatus: "Salvaged"
        },
        {
          VIN: "QWERTYUIO1234UYTR",
          make: "Nissan",
          model: "Morano",
          mileage: "124",
          transmissionType: "Manual",
          titleStatus: "Salvaged"
        }
      ]);
    });
};
