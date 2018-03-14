new Vue({
  el: '#shit1',
  data: {
    express: '1+2*4+5'.split('')
  },
  computed: {
    volume() {
      return parseInt(calc(this.express.join(''))) || '???'
    },
  },
})

new Vue({
  el: '#shit2',
  data: {
    volume: '13578901235'
  },
  methods:{
    submit(){
      alert(this.volume)
    }
  }
})