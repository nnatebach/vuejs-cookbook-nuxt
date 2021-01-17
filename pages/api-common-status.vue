<template>
  <div>
    <div v-if="itemBySlug" class="category-page">
      {{itemBySlug.id + "/" + titleListWithSlug.length}}
    </div>
    <h1 class="page-title" v-if="itemBySlug">
       {{itemBySlug.title}}
    </h1>
    <v-container>
      <h2 class="page-section">1. All common status</h2>

      <!-- show code 1 -->
      <v-btn text color="blue">Locally (recommended) <br /></v-btn>
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code 1 -->

      <h2 class="page-section">2. Common status should know</h2>
      <p>200, 401, 403, 404 and 500</p>

      <!-- PAGINATION -->
       <v-btn
        class="black--text float-left"
        v-if="itemBySlug.id - 2 >= 0"
        :to="titleListWithSlug[itemBySlug.id - 2].slug"
        ><v-icon dark left> mdi-arrow-left </v-icon
        >{{ titleListWithSlug[itemBySlug.id - 2].title }}</v-btn
      >
      <v-btn
        class="black--text float-right"
        v-if="itemBySlug.id < titleListWithSlug.length"
        :to="titleListWithSlug[itemBySlug.id].slug"
        ><v-icon dark left> mdi-arrow-right </v-icon
        >{{ titleListWithSlug[itemBySlug.id].title }}</v-btn
      >
    </v-container>
  </div>
</template>

<script>
  import {titleList} from '@/mixins/titleList';
  import { PrismEditor } from "vue-prism-editor";
  import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

  // import highlighting library (you can use any library you want just return html string)
  import { highlight, languages } from "prismjs/components/prism-core";
  import "prismjs/components/prism-clike";
  import "prismjs/components/prism-javascript";
  import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
  export default {
    mixins: [titleList],
    components: {
      PrismEditor
    },
    data() {
      return {
        code1: `  100 "continue"
        101 "switching protocols"
        102 "processing"
        200 "ok"
        201 "created"
        202 "accepted"
        203 "non-authoritative information"
        204 "no content"
        205 "reset content"
        206 "partial content"
        207 "multi-status"
        208 "already reported"
        226 "im used"
        300 "multiple choices"
        301 "moved permanently"
        302 "found"
        303 "see other"
        304 "not modified"
        305 "use proxy"
        307 "temporary redirect"
        308 "permanent redirect"
        400 "bad request"
        401 "unauthorized"
        402 "payment required"
        403 "forbidden"
        404 "not found"
        405 "method not allowed"
        406 "not acceptable"
        407 "proxy authentication required"
        408 "request timeout"
        409 "conflict"
        410 "gone"
        411 "length required"
        412 "precondition failed"
        413 "payload too large"
        414 "uri too long"
        415 "unsupported media type"
        416 "range not satisfiable"
        417 "expectation failed"
        418 "I'm a teapot"
        422 "unprocessable entity"
        423 "locked"
        424 "failed dependency"
        426 "upgrade required"
        428 "precondition required"
        429 "too many requests"
        431 "request header fields too large"
        500 "internal server error"
        501 "not implemented"
        502 "bad gateway"
        503 "service unavailable"
        504 "gateway timeout"
        505 "http version not supported"
        506 "variant also negotiates"
        507 "insufficient storage"
        508 "loop detected"
        510 "not extended"
        511 "network authentication required"`
      }
    },
    methods: {
      highlighter(code) {
        return highlight(code, languages.js)
      }
    },
    computed: {
      itemBySlug() {
        if (process.browser) {
          return this.titleListWithSlug.find(item => (item.slug === window.location.pathname.slice(1)))
        }
      }
    }
  } 
</script>

<style lang="scss" scoped>

</style>