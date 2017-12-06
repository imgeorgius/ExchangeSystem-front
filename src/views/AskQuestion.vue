<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">

        <h2>Задать вопрос</h2>

        <div class="ask-question-form">
          <b-form-group label="Имя:">
            <b-form-input v-model="askQuestionFormData.name"
                          placeholder="Ваше имя" />
          </b-form-group>

          <b-form-group label="E-mail:">
            <b-form-input v-model="askQuestionFormData.email"
                          placeholder="Ваш e-mail" />
          </b-form-group>

          <b-form-group label="Сообщение:">
            <b-form-textarea v-model="askQuestionFormData.message"
                             placeholder="Ваше сообщение"
                             :rows="3"
                             :max-rows="6">
            </b-form-textarea>
          </b-form-group>

          <b-button @click="submitAskForm" size="lg" variant="outline-primary">Отправить</b-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AskQuestion',

    data () {
      return {
        askQuestionFormData: {
          name: null,
          email: null,
          message: null
        }
      }
    },

    methods: {
      submitAskForm () {
        alert('Thank you for your question!')
        console.log(this.askQuestionFormData)
        for (let formEl in this.askQuestionFormData) {
          this.askQuestionFormData[formEl] = null
        }
      }
    }
  }
</script>
