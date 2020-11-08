var vm = new Vue({
  el: '.main',
  data: {
    quote: '',
    colors: ['#F51720','#FA26A0','#F8D210','#B7AC44','#FF4500','#E90F63','#2b3595','#2b3595'],
    color: '',
    tweetQuote: ''
  },
  methods: {
      setResult(result) {
        this.quote = result
      },
      getQuote: async function() {
        // Fetch Quote
        const result = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        // JSON Quote
        const ready = await result.json()
        // Set Quote
        this.setResult(ready)
        // Set Color
        this.color = this.colors[Math.floor(Math.random() * 7)] 
        // Link for Tweet
        this.tweetQuote = this.quote.en.replace(/\s/g, '%20').replace(/,/g, '%2C').replace(/\\n/g,'%22')
      }
  },
  beforeMount(){
    this.getQuote()    
  },
})

// %20 - space replace(/\s/g, '%20');

// %2C - comma replace(/,/g, '%2C');

// %22 - enter replace(/\\n/g,'%22')