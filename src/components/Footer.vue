<template>
  <footer class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <div class="footer-wrapper">
            <div class="row">
              <div class="col-sm-6">

                <p class="copyright-text">© Exchange System 2017</p>

              </div>
              <div class="col-sm-6 adminAccessBtn-col">

                <b-button id="adminAccessBtn" to="/admin" variant="warning">Административная панель</b-button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>
