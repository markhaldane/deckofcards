angular.module('cardsModule', [])

.controller('mainController', ['$scope', function mainController($scope) {

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
        if ($scope.deck.length > 0) {
            for (var i = $scope.deck.length - 1; i; i--) {
                var rnd = Math.random() * i | 0;
                var tempCard = $scope.deck[i];
                $scope.deck[i] = $scope.deck[rnd];
                $scope.deck[rnd] = tempCard;
            }
        } else {
            console.log("You can't shuffle an empty deck!");
        }
        return $scope.deck;
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

    //Return drawn cards to the bottom of the deck
    $scope.returnDrawnCardsToDeck = function () {
        for (var i = 0; i < $scope.drawnCards.length; i++) {
            var card = $scope.drawnCards[i];
            $scope.deck.push(card);
        }
        $scope.drawnCards.length = 0;
    };


    //Sort the cards in your hand
    $scope.sortHand = function () {
        $scope.drawnCards.sort(compare);
    };

    function compare(a, b) {
        if (a.value < b.value) {
            return a.value - b.value;
        } else if (a.value > b.value) {
            return a.value;
        }
    }

    //Return string names for face cards
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
