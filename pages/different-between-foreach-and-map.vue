<template>
  <div>
    <div v-if="itemBySlug" class="category-page">
      {{itemBySlug.id + "/" + titleListWithSlug.length}}
    </div>
    <h1 class="page-title" v-if="itemBySlug">{{ itemBySlug.title }}</h1>

    <!-- start content here -->
    <v-container style="width: 900px">
      <h2 class="page-section">1. Return</h2>

      <ul class="mb-6">
        <li>
          forEach() — executes a provided function once for each array element.
        </li>
        <li>
          map() — creates a new array with the results of calling a provided
          function on every element in the calling array.
        </li>
      </ul>
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>

      <h2 class="page-section">2. Chainable</h2>
      <prism-editor
        class="my-editor mb-6"
        v-model="code2"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>

      <h2 class="page-section">3. Performance speed</h2>
      <p>
        Depends on our operation of the code and data. But maybe map is faster
        than forEach
      </p>
      <v-img :src="require('~/assets/images/forEach_map_img_01.png')"></v-img>

      <h2 class="page-section">4. Should we forEach or map ?</h2>
      <p>
        If your only purpose is to iterate the array and perform some operations
        on the elements, it is better to use the forEach() method
      </p>
      <p>
        On the other hand, if you need to transform the elements from the array
        then you should use the map() method, also if you want to filter the
        data after modifying it, map() method is better option, because it will
        create a new array, and you can perform operations on it.
      </p>

      <h2 class="page-section">5. Total</h2>
      <p>
        I think we shouldn't be using the forEach() method until the map()
        method cannot do the required task. Just use map() with its powerful.
      </p>
      <p>
        <span class="red--text">Note</span>: Both map() and forEach() methods
        are worse then the standard for() loop when the speed is considered. But
        sometimes we may want to sacrifice speed for better code readability
        (cleaner code).
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
      code1: `let arr = [1,2,3,4];

let result = arr.forEach(item => item * 2);
// undefined
let result = arr.map(item => item * 2);
// [2,4,6,8]`,
      code2: `let arr = [1,2,3,4,0];

let result = arr.forEach(item => item * 2).sort();
// TypeError: Cannot read property 'sort' of undefined
let result = arr.map(item => item * 2).sort()
// [0, 2, 4, 6, 8]
// so on arr.map(item => item * 2).sort().reduce().filter......`
    };
  }
};
</script>
