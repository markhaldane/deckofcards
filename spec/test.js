describe('cardsModule', function () {
    var scope,
        controller,
        elem;

    var html = '<input type="number" ng-model="drawInput">';

    beforeEach(function () {
        module('cardsModule');
    });

    describe('mainController', function () {
        beforeEach(inject(function ($rootScope, $controller, $compile) {
            scope = $rootScope.$new();
            elem = $compile(html)(scope);
            scope.$digest();
            controller = $controller('mainController', {
                '$scope': scope
            });
        }));
        it('creates a deck of 52 cards', function () {
            scope.deck = scope.createDeck();
            expect(scope.deck.length).toBe(52);
        });
        it('checks the 5th card is the 6 of clubs', function () {
            scope.deck = scope.createDeck();
            expect(scope.deck[4].rank).toBe(6);
            expect(scope.deck[4].suit).toBe('Clubs');
        });
        it('shuffles the deck', function () {
            scope.deck = scope.createDeck();
            var a = scope.deck[0].value;
            scope.shuffle();
            var b = scope.deck[0].value;
            expect(a).not.toEqual(b);
        });
        it('draws top 5 cards from the deck into the hand', function () {
            scope.deck = scope.createDeck();
            scope.drawInput = 5;
            scope.$digest();
            var a = scope.deck[2].value;
            scope.drawCards();
            var b = scope.drawnCards[2].value;
            expect(scope.deck.length).toBe(47);
            expect(scope.drawnCards.length).toBe(5);
            expect(a).toEqual(b);

        });
        it('sorts a shuffled hand', function () {
            scope.deck = scope.createDeck();
            scope.shuffle();
            scope.drawInput = 10;
            scope.$digest();
            scope.drawCards();
            scope.sortHand();
            for (var i = 0; i < scope.drawnCards.length -1; i++) {
                var a = scope.drawnCards[i];
                var b = scope.drawnCards[i+1];
                expect(a.value).not.toBeGreaterThan(b.value);
            };
        });

    });
});
