const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'dndspellsapp'
});
client.connect();

const resolvers = {
  Query: {
    spells: async () => {
      try {
        const res = await client.query('SELECT * FROM spells;');
        return res.rows;
      } catch (err) {
        console.log(err.stack);
      }
    },
    spell: async (obj, args, context, info) => {
      try {
        const res = await client.query('SELECT * FROM spells WHERE id=$1;', [
          args.id
        ]);
        return res.rows[0];
      } catch (err) {
        console.log(err.stack);
      }
    }
  }
};

exports.resolvers = resolvers;
