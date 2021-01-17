<template>
  <footer>
    <div class="wrapper">
      <div class="subscribe-section">
        <p class="subscribe-title">
          Hit the Subscribe button for the latest news on my tools. No spam. Ever!
        </p>
        <address>
          <form action="#" class="subscribe-form">
            <input type="email" placeholder="Email address">
            <button class="subscribe-btn">Subscribe</button>
          </form>
        </address>
      </div>
      <div class="product-section">
        <h3 class="mb-2">Products</h3>
        <div class="product-list">
          <ul class="product-row">
            <li class="product-item">
              <a href="#">
                <p class="product-label">1LOC <span class="productlabel-new">new</span></p>
                <p class="product-description">favorite JavaScript utilities in single line of code</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">Blur Page</p>
                <p class="product-description">a browser extension to hide sensitive element on page</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">Check Browsers Support</p>
                <p class="product-description">a browser extension to check browser compatibility without leaving your tab</p>
              </a>
            </li>
          </ul>
          <ul class="product-row">
            <li class="product-item">
              <a href="#">
                <p class="product-label">CSS Layout</p>
                <p class="product-description">a collection of popular layouts and patterns made with CSS</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">Fake Numbers</p>
                <p class="product-description">a JavaScript library to fake a number</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">Form Validation</p>
                <p class="product-description">the best validation library for JavaScript</p>
              </a>
            </li>
          </ul>
          <ul class="product-row">
            <li class="product-item">
              <a href="#">
                <p class="product-label">HTML DOM</p>
                <p class="product-description">common tasks of managing HTML DOM with vanilla JavaScript</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">React PDF Viewer</p>
                <p class="product-description">a PDF viewer made for React</p>
              </a>
            </li>
            <li class="product-item">
              <a href="#">
                <p class="product-label">this VS that</p>
                <p class="product-description">the differences between ___ and ___ in the front-end development</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="follow-site">
        <h3 class="mb-2"><strong>Follow me</strong> I love building products!</h3>
        <div class="follow-network mb-3">
          <ul>
            <li class="network-sites">Twitter</li>
            <li>@nhanmb</li>
          </ul>
          <ul>
            <li class="network-sites">dev.to</li>
            <li>@nhanmb</li>
          </ul>
          <ul>
            <li class="network-sites">GitHub</li>
            <li>@nhanmb</li>
          </ul>
        </div>
      </div>
      <p>&copy; 2020 Bach Minh Nhan. All rights reserved</p>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>

footer
  margin-bottom: 64px


.subscribe-section
  text-align: center
  margin-bottom: 2.62rem
  address
    display: inline-block
    border: 1px solid rgba(0,0,0,.2)
    .subscribe-form
      width: 400px
      display: flex
      justify-content: space-between
    input
      border: none
      width: 100%
      padding-left: 8px
    button
      background-color: #3182ce
      color: #fff
      border: none
      padding: 14px
      width: 12rem
  .subscribe-title
    margin-bottom: 1rem

.mb-2
  margin-bottom: 1.38rem

.mb-3
  margin-bottom: 1rem

.product-section
  h3
    font-size: 24px
    font-weight: 600
  ul
    .product-item
      width: 34%
      .productlabel-new
        color: #fff
        background-color: #38a169
        font-weight: 100
        padding: 4px
        border-radius: 7px
      .product-label
        font-size: 16px
        font-weight: 600
      .product-description
        opacity: .7
        line-height: 1.4
  .product-list
    .product-row
      display: flex
      flex-direction: row
      margin-bottom: 1.5rem
      justify-content: space-between
      .product-item
        .product-label
          margin-bottom: 10px
.follow-site
  .follow-network
    display: flex
    flex-direction: row
    justify-content: space-between
    ul
      width: 30%
  h3
    font-size: 24px
  .network-sites
    font-size: 16px
    font-weight: 600
    line-height: 1.8
</style>