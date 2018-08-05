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
        cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a',],
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
            this.cards.splice(12, 1);
            this.cards.unshift('a');
          }
        },
      },
      methods: {
        isShow(type, num) {
          return this.showList[type].includes(num);
        }
      },
      mounted() {

      }
    });

  });
}(window, Vue));
