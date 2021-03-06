# Bringing it all together
The purpose of this application is to make an http request to get information about 3 pokemon and render that information in a reusable component.

Here's what You'll need to do:

**Create a text component**
- [ ] Create component that renders the following text:

> Starter Pokémon are the first Pokémon a Trainer receives. Throug that Pokémon Trainers learn friendship and trust. As such, even advanced Trainers may still use their starter Pokémon, and they will often be the most powerful Pokémon on their respective teams.
"
- [ ] Export the component and render it in `App.js`


**In `App.js`**
- [ ] Import the `PokemonList` component and render it inside the `article` tag

**In `PokemonList.js`**
- [ ] Use `React.useEffect` to make an 'http request' (it's a mock) when the component renders for the first time 
- [ ] Use `React.useState` to store the data that's returned from the request
- [ ] Use conditional rendering to render the `Pokemon` components if we have them stored, otherwise render a loading message

**Note:** you can pass all of the data from the request to the `Pokemon` component using the spread operator

**Note:** the response data will take this form: `[{...}, {...}, {...}]`

**In `Pokemon.js`**
- [ ] Add the pokemon's type as a `className`. (in the data it can be accessed using `types[0].type.name`
- [ ] Add the pokemon's name to the `h2` tag (in the data it can be accessed using `name`)
- [ ] Add the pokemon's picture as the image `src` (in the data it can be accessed using `sprites.other['official-artwork'].front_default`)


At the end the app should look like this:

![screenshot](./screenshot.png)