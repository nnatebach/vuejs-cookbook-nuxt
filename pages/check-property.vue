<template>
  <div>
    <div v-if="itemBySlug" class="category-page">
      {{itemBySlug.id + "/" + titleListWithSlug.length}}
    </div>
    <h1 class="page-title" v-if="itemBySlug">{{ itemBySlug.title }}</h1>

    <!-- start content here -->
    <v-container style="width: 900px">
      <h2 class="page-section">1. We have 3 ways to check property is exist or not</h2>
      <!-- display code 1 -->
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end display code 1 -->

      <h2 class="page-section">2. Functor &amp; Monad</h2>
      <p>
        If you want control more about this problems
      </p>
      <p>Please learn more about <b>Functor &amp; Monad</b></p>
      <p>
        <a
          href="https://www.notion.so/Functor-Monad-581ea4c0ed4e4e1f976896f26b077b45"
          target="_blank"
          rel="noopener"
        >
          https://www.notion.so/Functor-Monad-581ea4c0ed4e4e1f976896f26b077b45
        </a>
      </p>
      <p>
        for VietNamese:
        <a href="https://youtu.be/X_5rds0JJyw" target="_blank" rel="noopener">
          https://youtu.be/X_5rds0JJyw
        </a>
      </p>

      <!-- pagination -->
      <hr class="mb-6" />
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
import { titleList } from "@/mixins/titleList";
// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
export default {
  mixins: [titleList],
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }
  },
  computed: {
    itemBySlug() {
      return this.titleListWithSlug.find(
        item => item.slug === window.location.pathname.slice(1)
      );
    }
  },
  data() {
    return {
      code1: `module.exports = router;
const user = {
  id: '10',
  name: 'Monad'
};

console.log(user.hasOwnProperty('name'));   // => true
console.log(user.name !== 'undefined') //=> true
console.log('name' in user) //=> true`
    };
  }
};
</script>
