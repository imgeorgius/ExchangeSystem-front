<template>
  <div class="sidebar">
    <b-card class="mb-4">
      <div class="row mb-3">
        <div class="col-sm-8">
          <h4 class="py-1">Курсы валют к</h4>
        </div>
        <div class="col-sm-4">
          <b-form-group>
            <b-form-select v-model="currencyRate" :options="currencies" @change="currencyRateChangeHandler" />
          </b-form-group>
        </div>
      </div>

      <b-table striped hover :items="currencyRatesItems" :fields="currencyRatesFields"></b-table>
    </b-card>

    <b-card class="text-center mb-4">
      <h4>Инфо блок</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique perspiciatis a voluptatem quo, quasi cum sed obcaecati dolorum voluptates nulla vel id, labore officia iste vitae ut tenetur fuga numquam! Sed, blanditiis, fugit. Natus praesentium, est illum consequatur error nesciunt obcaecati numquam, consequuntur sed deserunt molestias officiis similique unde! Tempore!</p>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',

    props: ['currencies'],

    data () {
      return {
        currencyRate: 'byn',
        currencyRatesFields: [ 'Валюта', 'Покупка', 'Продажа' ],
        currencyRatesItems: [
          { isActive: true, Валюта: 'USD', Покупка: '1.95', Продажа: '2.05' },
          { isActive: true, Валюта: 'EUR', Покупка: '1.95', Продажа: '2.05' },
          { isActive: true, Валюта: 'RUB', Покупка: '1.95', Продажа: '2.05' },
          { isActive: true, Валюта: 'BTC', Покупка: '1.95', Продажа: '2.05' }
        ]
      }
    },

    methods: {
      currencyRateChangeHandler (value) {
        console.log(value)
      }
    }
  }
</script>
