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
          diamonds: ['6', '7', 'a'],
          clubs: ['7'],
          hearts: ['7'],
          spades: ['7'],
        },
        asDown: false,
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
      },
      mounted() {
        this.createDeck();
        this.shuffleDeck();
      }
    });

  });
}(window, Vue));
