<template>
  <div>
    <div v-if="itemBySlug" class="category-page">
      {{itemBySlug.id + "/" + titleListWithSlug.length}}
    </div>
    <h1 class="page-title" v-if="itemBySlug">
       {{itemBySlug.title}}
    </h1>
    <v-container>
      <h2 class="page-section">1. Document</h2>
      <p>
        <a
          href="https://vee-validate.logaretm.com/v3"
          target="_blank"
          rel="noopener"
          >https://vee-validate.logaretm.com/v3</a
        >
      </p>

      <h2 class="page-section">2. Install</h2>
      <p>npm install vee-validate --save</p>

      <h2 class="page-section">3. Registering</h2>

      <!-- show code 1 -->
      <v-btn text color="blue">Locally (recommended) <br /></v-btn>
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code 1 -->

      <!-- show code 2 -->
      <v-btn text color="blue">Globally</v-btn>
      <prism-editor
        class="my-editor mb-6"
        v-model="code2"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code 2 -->

      <h2 class="page-section">4. Avaiable rules</h2>
      <p>
        <a
          href="https://vee-validate.logaretm.com/v3/guide/rules.html#rules"
          target="_blank"
          rel="noopener"
          >https://vee-validate.logaretm.com/v3/guide/rules.html#rules</a
        >
      </p>

      <h2 class="page-section">5. Custom rules</h2>
      <p>
        <a
          href="https://vee-validate.logaretm.com/v3/guide/basics.html#adding-rules"
          target="_blank"
          rel="noopener"
          >https://vee-validate.logaretm.com/v3/guide/basics.html#adding-rules</a
        >
      </p>

      <h2 class="page-section">6. Example code</h2>
      <!-- show code 3 -->
      <prism-editor
        class="my-editor mb-6"
        v-model="code3"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code 3 -->

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
import {titleList} from '../mixins/titleList';
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

  export default {
    components: {
      PrismEditor
    },
    data() {
      return {
        code1: `import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)`,
      code2: `export default {
  metaInfo() {
    return {
      title: 'XXX',
      meta: [
        {
          name: 'description',
          content: 'XXX',
        },
        {
          property: 'og:title',
          content: 'XXX',
        },
        { property: 'og:site_name', content: 'XXX' },
        { property: 'og:type', content: 'XXX' },
      ],
    };
  }
}`,
      code3: `export default {
   metaInfo() {
    return {
      title: this.title,
    };
  },`,
      code4: `<script type="application/ld+json">
    {
      "@context": "xxxx",
....
    }`,
      code5: `import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})`,
      code6: `id: ['UA-XXX-X', 'UA-XXX-B'],`,
      code7: `import VueAnalytics from 'vue-analytics'
const isProd = process.env.NODE_ENV === 'production'
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})`
      }
    },
    mixins: [titleList],
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