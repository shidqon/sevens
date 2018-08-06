(function SevensIIFE(window, Vue) {
  document.addEventListener("DOMContentLoaded", function(event) {
    window.Sevens = new Vue({
      el: '#vm__sevens',
      name: 'Sevens',
      components: {
        'card': window.SevensCard,
      },
      data: {
        types: ['diamonds', 'clubs', 'hearts', 'spades'],
        weights: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a',],
        deck: [],
        showList: {
          diamonds: [],
          clubs: [],
          hearts: [],
          spades: [],
        },
        asDown: false,
        playerDeck: [[], [], [], []],
        showDeck: false,
        activeIndex: '',
        showPlaceCard: false,
      },
      watch: {
        asDown() {
          if (this.asDown) {
            this.weights.splice(12, 1);
            this.weights.unshift('a');
          }
        },
      },
      methods: {
        isShow(type, weight) {
          return this.showList[type].includes(weight);
        },
        createDeck() {
          const self = this;
          this.deck = [];
          self.types.forEach(function (type) {
            self.weights.forEach(function (weight) {
              self.deck.push({ type, weight });
            });
          });
        },
        shuffleDeck() {
          for(let i = 0; i < 1000; i++) {
            let rndNo1 = Math.floor(Math.random() * (51));
            let rndNo2 = Math.floor(Math.random() * (51));
            let card = this.deck[rndNo1];
            this.deck[rndNo1] = this.deck[rndNo2];
            this.deck[rndNo2] = card;
          }
        },
        setPlayerDeck() {
          for(let i = 0; i < 13; i++) {
            this.playerDeck[0].push(this.deck[i]);
          }
          for(let i = 13; i < 26; i++) {
            this.playerDeck[1].push(this.deck[i]);
          }
          for(let i = 26; i < 39; i++) {
            this.playerDeck[2].push(this.deck[i]);
          }
          for(let i = 39; i < 52; i++) {
            this.playerDeck[3].push(this.deck[i]);
          }
        },
        selectCard(index) {
          this.activeIndex = index;
          this.openPlaceCard();
        },
        placeCard() {
          const activeCard = this.playerDeck[0][this.activeIndex];
          this.showList[activeCard.type].push(activeCard.weight);
          this.closePlaceCard();
          this.closeDeck();
        },
        openDeck() {
          this.showDeck = true;
        },
        closeDeck() {
          this.showDeck = false;
        },
        openPlaceCard() {
          this.showPlaceCard = true;
        },
        closePlaceCard() {
          this.showPlaceCard = false;
        },
      },
      mounted() {
        this.createDeck();
        this.shuffleDeck();
        this.setPlayerDeck();
      }
    });

  });
}(window, Vue));
