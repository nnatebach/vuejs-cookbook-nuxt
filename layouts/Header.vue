<template>
  <header>
    <h1 class="header-logo">
      <nuxt-link to="/" class="home">
        &lt;/dom&gt;
      </nuxt-link>
    </h1>
    <div class="search-section">
      <input class="search-box" type="text" placeholder="Filter">
      <div class="magnifier">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
  header
    display: flex
    justify-content: space-between
    margin-bottom: 160px
    .header-logo
      color: #fff
      background: #000
      border-radius: 3px
      padding: .76rem .3rem
      font-size: 30px
    .home
      color: #fff
    .search-section
      display: flex
      .search-box
        outline: none
        border-width: 0 0 1px 0
        font-size: 16px
        width: 384px
        border-top: 0
        border-left: 0
        border-right: 0
        border-bottom: 1px solid rgba(0,0,0,.1)


@media (min-width: 640px)
  .header-logo
    font-size: 1.875rem
</style>