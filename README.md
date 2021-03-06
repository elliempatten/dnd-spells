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

So far I've set up a GraphQL server with a React frontend that connects to a database (not included in this repo), which holds references to a user's spells. On loading the app, we then fetch these references and use them to get more information about the user's spells from the 5E Open SRD and a formatted list of the user's spells is displayed on the frontend, ordered by level.

If you click to add a spell, you'll see a list of spells available for the selected level.

## Next steps...

- Finish work to display spells from the srd to users:
  - style the list of spells fetched when trying to add
  - allow filtering by class
  - allow user to click to highlight a spell and mark as selected
  - when a user clicks a button add the selections to the DB and return to the main page, with a newly updated spell list
  - allow changing the level filter
  - allow multiple filters at a time (eg multiple levels allowed)
- Allow users to search for spells from 5E and add them to their spell list
- Add custom fields, and allow users to edit (eg. whether it's from an item, recharge time, race/class abilities etc.)
- Allow some kind of searching for bonus action spells or reaction spells etc.
