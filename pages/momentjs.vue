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

      <!-- show code-->
      <v-btn text color="blue">Locally (recommended) <br /></v-btn>
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
       <!-- end of code -->

      <!-- show code -->
      <v-btn text color="blue">Globally</v-btn>
      <prism-editor
        class="my-editor mb-6"
        v-model="code2"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code -->

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
      <!-- show code -->
      <prism-editor
        class="my-editor mb-6"
        v-model="code3"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code -->

      PAGINATION
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
        code1: `<template>
  <div>
    <div v-for="item in test" :key="item.title">
      <h1>{{ item.title }}</h1>
      <h1>Date Join {{ item.createdDate | formatJoinDate }}</h1>
      <h1>Send from {{ item.createdDate | getTimeFromNow }}</h1>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      test: [
        {
          categories: ['art'],
          likes: 0,
          title: 'SAM',
          imageUrl: 'google.com',
          description: 'sam',
          createdDate: '2020-12-17T06:43:46.048Z',
          messages: [],
          __v: 0,
        },
        {
          categories: ['art'],
          likes: 0,
          title: 'a',
          imageUrl: 'google.com',
          description: 'A',
          createdDate: '2020-12-17T06:43:48.366Z',
          messages: [],
          __v: 0,
        },
      ],
    };
  },
  filters: {
    formatJoinDate(date) {
      return moment(new Date(date)).format('ll');
    },
    getTimeFromNow(time) {
      return moment(new Date(time)).fromNow();
    },
  },
};
<\/script>

<style lang="scss" scoped></style>`,
      code2: `const shipment = {
  normal: {
    price: 10.58,
    days: 7,
  },
  fast: {
    price: 40.15,
    days: 3,
  },
};
 
function shipmentOptions(shipment) {
  let dayArrival = moment()
    .add(shipment.days, 'd')
    .format('MMMM Do YYYY');
  return { dayArrival, price: shipment.price };
}
 
shipmentOptions(shipment.normal);
//today is 2020/12/22
//result { "dayArrival": "December 29th 2020", "price": 10.58 }`
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