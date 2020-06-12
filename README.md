# Spell Tracker for D&D 5E

App for keeping track of spells and magic items in Dungeons and Dragons 5th Edition.
Work in progress app made by me, which will eventually use the Open5E API for spell info.
Using/will use Node.js, PostgreSQL, GraphQL, Apollo, Express, and React.

## Project aims

- Help users to track their spells
- Help users to track their remaining spell slots at each level
- Give users a quick and easy way to check the description of their spells (without having to google them every time or frantically flip through the handbook during combat)
- Allow users to add custom spells, eg. from homebrew, from magic items, or spells unavailable in the SRD (grrrr)
- Help users to keep track of remaining charges and recharge time on magic items
- Quick and easy reference so that a user can quickly scroll through their spell list to find a 'ritual' or 'bonus action' or 'reaction'
- Allows users to search for spells to add to their character

## But at the moment...

All this does is set up a GraphQL server that connects to a database (not included in this repo for obvious reasons), which holds references to a user's spells.

## Next steps...

- Connect up to a React frontend
- Create a simple UI to show a spell list, ordered by levels
- Allow users to search for spells and add them to their spell list
- Add spells to the database
- Retrieve spells from the database and API on loading the spell tracker
- Allow users to edit fields like whether it's from an item, recharge, race/class abilities etc.
