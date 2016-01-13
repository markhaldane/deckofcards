#Deck of Cards
This application has been created to the following specification:


##Summary
As a magician, I'd like to shuffle, draw and sort cards so that I can perform magic tricks.

##Acceptance Criteria
- Can I shuffle the deck of cards.
- Can I draw any given number of cards from the deck, with the cards being removed from the original deck.
- Can I draw any given number of cards from the deck and then sort the drawn cards, with the cards being removed from the original deck.
- Sorted cards are sorted by suit: Clubs, Spades, Hearts, Diamonds; then by value: Ace is high.

##Technical Constraints
- Doesn't necessarily need a flashy UI (can be simple).
- Use an appropriate language/framework for the job role that you are applying for. If you are applying for a front end development role
then we expect that you write a web application, however if you are purely a backend developer, we will accept the application running
from the terminal, as well as from tests.
- With the exception of testing, Minimise the use of external frameworks.
- Use best in industry agile engineering practices. Ensure that your code is well tested.

#Instructions
- The application is running on an IBM Bluemix Node.js server at http://deckofcards.eu-gb.mybluemix.net

#Local installation and testing

- [Install Node.js and update npm](https://docs.npmjs.com/getting-started/installing-node)

- From the directory where you wish to clone the repository, run `git clone https://hub.jazz.net/git/markhaldane/deckofcards` (login with your Bluemix credentials)

- Navigate in to the newly created **/deckofcards** directory and run `npm install` to install the dependencies (will create the **/node_modules** directory)

- If you have not previously installed them, you may need to run `sudo npm install -g karma-cli` and `sudo npm install -g karma` for running the tests with Karma

- You can now start the Node.js application with `node app.js` then open the provided localhost URL within your browswer (i.e. *http://localhost:6000*)

- Jasmine tests (in **spec/test.js**) can be run with `karma start karma.conf.js` from the /deckofcards root directory