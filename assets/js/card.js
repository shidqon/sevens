window.SevensCard = {
  template: `
    <div class="card" :class="[cardClass, positionClass]"></div>
  `,
  props: {
    type: {
      type: String,
      default: '',
    },
    weight: {
      type: String,
      default: '',
    },
    flipped: {
      type: Boolean,
      default: false,
    },
    asDown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      positionDown: ['2', '3', '4', '5', '6'],
      positionUp: ['j', 'q', 'k', 'a',],
    };
  },
  watch: {
    asDown() {
      if (this.asDown) {
        this.positionUp.splice(3, 1);
        this.positionDown.unshift('a');
      }
    },
  },
  computed: {
    positionClass() {
      let posClass = '';
      if (this.positionDown.includes(this.weight)) {
        posClass = 'card--down';
      } else if (this.positionUp.includes(this.weight)) {
        posClass = 'card--up'
      }
      return posClass;
    },
    cardClass() {
      const cardClass = this.flipped ? 'card--back' : `card--${this.type}--${this.weight}`;
      return cardClass;
    },
  },
};
