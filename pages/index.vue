<template>
  <div class="container">
    <div class="article">
      <div class="article-description">
        <h2 class="page-section">how to manage <strong>HTML DOM</strong></h2>
        <h3>with <mark>vanilla JavaScript</mark> only?</h3>
        <h4 class="header-description description-mb"><em>for modern browsers and IE 11+</em></h4>
        <div class="github-info description-mb">
          <span class="github-title">
            GitHub
          </span>
          <span class="github-amount">
            3304
          </span>
        </div>
      </div>
      <ul class="discription-list">
        <li v-for="item in titleListWithSlug" :key="item.id">
          <v-btn :to="item.slug"  class="description-item">
            <dl class="category">
              <dt>
                {{ `${item.id} — ${item.title}` }}
              </dt>
              <dd>
                <v-chip
                :color="difficult(item.diff)">
                  {{item.diff}}
                </v-chip>
              </dd>
            </dl>
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {titleList} from '../mixins/titleList';
  export default {
    mixins: [titleList],
    methods: {
      difficult(diff) {
        diff = diff.toLowerCase()
        if(diff === 'basic') return 'grey'
        else if(diff === 'tip') return 'yellow'
        else if (diff === 'intermediate') return 'blue'
        else return 'red'
      }
    }
  }
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
/* http://meyerweb.com/eric/tools/css/reset/ 
 * v2.0 | 20110126
 * License: none (public domain)

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video
  margin: 0
  padding: 0
  border: 0
  font-size: 100%
  font: inherit
  vertical-align: baseline
  font-family: Noto Sans
  line-height: normal

/* HTML5 display-role reset for older browsers

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section
  display: block

body
  line-height: 1

ol, ul
  list-style: none

blockquote, q
  quotes: none

blockquote
  &:before, &:after
    content: ''
    content: none

q
  &:before, &:after
    content: ''
    content: none

table
  border-collapse: collapse
  border-spacing: 0

strong
  font-weight: 600

em
  font-style: italic

.container
  a
    text-decoration: none
    color: #000
  dl
    display: flex
    justify-content: space-between

.article
  margin-bottom: 2rem
  .article-description
    text-align: center
    line-height: 1.5
    margin-bottom: 22px
    h2
      font-size: 36px
      font-weight: 700
    h3
      font-size: 30px
      margin-bottom: 3px
    h4
      font-size: 20px
    .github-info
      font-size: 24px
      background-color: #cbd5e0
      display: inline-block
      border: 1px solid #cbd5e0
      padding: 3px 16px
      .github-title
        position: relative
        &:after
          content: ' \2022'
      .github-amount
        position: relative
        &:after
          content: ' \2605'
  .description-mb
    margin-bottom: 2.8rem

.v-btn
  display: block
  .v-btn__content
    display: block
    .v-chip__content
      color: #fff

.category
  align-items: center

.article
  .description-list
    li
      a
        margin-bottom: 12px
    .description-item
      background-color: #edf2f7
      padding: .5rem .5rem
      margin-bottom: .75rem
      dd
        .level-box
          border-radius: 5px
a
  margin-bottom: 12px
mark 
  background-color: #bee3f8

.v-chip
  border-radius: 6px!important

.header-logo, .category-page
  color: #fff
  background: #000
  border-radius: 3px
  padding: .76rem .3rem
  font-size: 30px
.category-page
  text-align: center
  display: inline-block
  position: absolute
  top: 5%
  left: 50%
  transform: translate(-50%, -50%)
.home, .category-page
  color: #fff

.page-title
  text-align: center
  font-size: 30px
  font-weight: 700

.page-section
  font-size: 30px

.my-editor 
  background: #2d2d2d
  color: #ccc
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace
  font-size: 14px
  line-height: 1.5
  padding: 5px
  .prism-editor__line-numbers
    font-size: inherit!important


.prism-editor__textarea:focus 
  outline: none

.code-file
  margin-bottom: 8px
</style>