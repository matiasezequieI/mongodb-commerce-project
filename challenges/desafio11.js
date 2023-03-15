db.produtos.find(
  {
   nome: { $nin: ["Big Mac", "McChicken"] },
  },
  { _id: 0, curtidas: 1, nome: 1, vendidos: 1 },
 );