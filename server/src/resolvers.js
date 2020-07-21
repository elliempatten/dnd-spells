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

        // returns the details for the user's spells
        const listOfSpells = await Promise.all(
          userSavedSpellIds.map(id => {
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
                return (spellDetails = {
                  id: spell.slug,
                  duration: spell.duration,
                  description: spell.desc,
                  features: features,
                  castingTime: spell.casting_time,
                  range: spell.range,
                  name: spell.name,
                  level: spell.level_int
                });
              });
          })
        );

        const highestLevel = 9;
        const spellsByLevel = [];
        // creates an array of spells ordered by level that looks like [{level: 0, spells: []}, {level: 1, spells: []}, ...]
        for (level = 0; level <= highestLevel; level++) {
          filteredSpells = listOfSpells.filter(spell => {
            return spell.level === level;
          });
          spellsByLevel.push({ level: level, spells: filteredSpells });
        }
        return spellsByLevel;
      } catch (err) {
        console.log(err.stack);
      }
    }
  }
};

exports.resolvers = resolvers;
