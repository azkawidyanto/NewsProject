<template>
  <div>
    <b-navbar id="navbg" toggleable="lg">
      <b-navbar-brand href="#" id="title">NEWSSSZZZ</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" id="tab">Categories</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button size="md" type="submit" id="button">Log In or Sign Up</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar id="searchbg" toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <b-nav-form>
            <b-form-input size="sm" id="searchfield" placeholder="Search"></b-form-input>
            <b-button size="sm" id="searchbutton" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navbg {
    background-color: #e0e1f5;
  }

  #title {
    color: #0d2137;
    font-size: 2rem;
    font-weight: bolder;
    margin: auto 30px;
  }

  #tab {
    font: #0d2137;
    font-size: 1.3 rem;
    font-weight: normal;
    margin: auto 30px;
  }

  #searchbg {
    background-color: #0d2137;
  }

  #button {
    margin: auto 30px;
    background-color: #ff8b2e;
    color: #0d2137;
    border-width: 0px;
  }

  #searchfield {
    width: 900px;
    margin: 5px auto;
  }
</style>
