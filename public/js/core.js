angular.module('CardsModule', [])

.controller('MainCtrl', ['$scope', function MainCtrl($scope) {

    $scope.deck = [];
    $scope.drawnCards = [];

    //Initialise a deck of 52 cards
    $scope.createDeck = function () {
        for (var i = 0; i < 13; i++) {
            $scope.deck[i] = {
                "value": i + 1,
                "suit": "Clubs",
                "rank": i + 2
            };
            $scope.deck[i + 13] = {
                "value": i + 14,
                "suit": "Spades",
                "rank": i + 2
            };
            $scope.deck[i + 26] = {
                "value": i + 27,
                "suit": "Hearts",
                "rank": i + 2
            };
            $scope.deck[i + 39] = {
                "value": i + 40,
                "suit": "Diamonds",
                "rank": i + 2
            };
        }
        $scope.drawnCards.length = 0;
        return $scope.deck;
    };

    //Shuffle the Deck
    $scope.shuffle = function () {
        var m = $scope.deck.length, i, t;
        //While there are cards remaining to be shuffled
        while (m) {
            //Take a remaining card
            i = Math.floor(Math.random() * m--);
            //And swap it with the current card
            t = $scope.deck[m];
            $scope.deck[m] = $scope.deck[i];
            $scope.deck[i] = t;
        }
    };

    //Draw X cards from the deck to your hand
    $scope.drawCards = function () {
        if ($scope.deck.length >= $scope.drawInput) {
            for (var i = 0; i < $scope.drawInput; i++) {
                var card = $scope.deck[0];
                $scope.drawnCards.push(card);
                var index = $scope.deck.indexOf(card);
                $scope.deck.splice(index, 1);
            }
        } else {
            console.log("You are trying to draw more cards than the deck contains!");
        }
    };

    //Sort the cards in your hand
    $scope.sortHand = function () {
        $scope.drawnCards.sort(compare);
    };

    //Compare func for sorting, simple card.value increasing order
    function compare(a, b) {
        if (a.value < b.value) {
            return a.value - b.value;
        } else if (a.value > b.value) {
            return a.value;
        }
    }

    //Return string names for face cards (used for alt-text of images)
    $scope.getCardName = function (card) {
        if (this.card.rank == 11) {
            return "Jack";
        } else if (this.card.rank == 12) {
            return "Queen";
        } else if (this.card.rank == 13) {
            return "King";
        } else if (this.card.rank == 14) {
            return "Ace";
        } else {
            return this.card.rank;
        }
    };

}]);
