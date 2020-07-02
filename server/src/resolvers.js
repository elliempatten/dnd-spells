const { Client } = require('pg');
const fetch = require('node-fetch');

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
    },
    spellDetails: async () => {
      try {
        const res = await client.query('SELECT id FROM spells');
        const userSavedSpellIds = res.rows.map(({ id }) => id);

        const spellsApiBase = 'https://api.open5e.com/spells/';

        const listOfSpells = userSavedSpellIds.map(id => {
          return fetch(spellsApiBase + id)
            .then(res => res.json())
            .then(spell => {
              const features = [];
              if (spell.ritual === 'yes') {
                features.push('Ritual');
              }
              if (spell.concentration === 'yes') {
                features.push('Concentration');
              }
              return {
                id: spell.slug,
                duration: spell.duration,
                description: spell.desc,
                features: features,
                castingTime: spell.casting_time,
                range: spell.range,
                name: spell.name
              };
            });
        });
        return listOfSpells;
      } catch (err) {
        console.log(err.stack);
      }
    }
  }
};

exports.resolvers = resolvers;
