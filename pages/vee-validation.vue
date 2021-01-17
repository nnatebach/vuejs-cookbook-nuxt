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
      <p text color="blue">Locally (recommended) <br /></p>
      <prism-editor
        class="my-editor mb-6"
        v-model="code1"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <!-- end of code 1 -->

      <!-- show code 2 -->
      <p text color="blue">Globally</p>
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
        code1: `<script>
        //add rules name
        import { required, email, alpha } from 'vee-validate/dist/rules';
        //add extend, ValidationObserver, ValidationProvider
        import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
        //custom message
        extend('required', {
          ...required,
          message: '{_field_} can not be SAM1234',
        });
        //default message
        extend('email', email);
        extend('alpha', alpha);
        export default {
          components: {
            ValidationObserver,
            ValidationProvider,
          }
        }
        <\/script>`,
      code2: `import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
      //add all rule
      import * as rules from 'vee-validate/dist/rules';

      Object.keys(rules).forEach(rule => {
        extend(rule, rules[rule]);
      });
      Vue.component('ValidationProvider', ValidationProvider);
      Vue.component('ValidationObserver', ValidationObserver);`,
            code3: `<template>
        <ValidationObserver  ref="observer" v-slot="{ handleSubmit }">
          <!-- handleSubmit to Validate forms before submitting is a must in form validation. -->
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <input v-model="email" type="email" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
              <input v-model="firstName" type="text" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
              <input v-model="lastName" type="text" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <button @click="handleSubmit(submitForm)" >Submit</button>
            <button @click="resetForm">Reset</button>
        </ValidationObserver>
      </template>

      <script>
      //add rules name
      import { required, email, alpha } from 'vee-validate/dist/rules';
      //add extend, ValidationObserver, ValidationProvider
      import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
      //if you want to add mode
      // import { setInteractionMode } from 'vee-validate';
      // setInteractionMode('eager');
      //custom message
      extend('required', {
        ...required,
        message: '{_field_} can not be SAM1234',
      });
      //default message
      extend('email', email);
      extend('alpha', alpha);

      export default {
        components: {
          ValidationObserver,
          ValidationProvider,
        },
        data() {
          return {
            email: '',
            firstName: '',
            lastName: '',
          };
        },
        methods: {
          submitForm() {
            //this.$axios.... do something here
            console.log('123');
          },
          async resetForm() {
            this.firstName = this.lastName = this.email = '';
            requestAnimationFrame(() => {
              this.$refs.observer.reset();
            });
          },
        },
      };
      <\/script>
      <style scoped>
      input {
        border: 1px solid;
        display: block;
      }
      button{
        margin-right: 10px
      }
      span {
        display: block;
      }
      </style>`
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