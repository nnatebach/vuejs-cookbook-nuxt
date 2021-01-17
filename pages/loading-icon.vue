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
    data() {
      return {
        code1: `<template>
          <div>
            <!-- custom loading here (v-model="loading")-->
            <div v-if="loading">Loading....</div>
            <ul :v-if="!loading && posts.length" v-for="post in posts" :key="post._id">
              {{post._id}}
            </ul>
          </div>
        </template>

        <script>
        import { mapActions, mapGetters } from 'vuex';
        export default {
          data() {
            return {
              posts: [],
              loading: true,
            };
          },
          async created() {
            try{
              let { data } = await this.axios.get(
              'https://domain.com/api/getPosts'
            );
            this.posts = data.getPosts;
            this.loading = false;
            }catch(err){
              this.loading = false;
              console.log(err)
            }
          },

        };
        <\/script>

        <style lang="scss" scoped></style>`,
              code2: `export default new Vuex.Store({
          state: {
            posts: [],
            loading: false,
          },
          mutations: {
            setPosts: (state, payload) => {
              state.posts = payload;
            },
            setLoading: (state, payload) => {
              state.loading = payload;
            },
          },
          actions: {
            getPosts: async ({ commit }) => {
              try {
                //set loading state is true
                commit('setLoading', true);
                let { data } = await axios.get(
                  'https://domain.com/api/getPosts'
                );
                //get data from actions to state via mutations
                //commit passes data from actions along to mutation functions
                commit('setPosts', data.getPosts);
                //set loading state is false
                commit('setLoading', false);
              } catch (err) {
                commit('setLoading', false);
                console.error(err);
              }
            },
          },
          getters: {
            posts: (state) => state.posts,
            loading: (state) => state.loading,
          },
        });`,
              code3: `<template>
          <div>
            <!-- custom loading here (v-model="loading")-->
            <div v-if="loading">Loading....</div>
            <ul :v-if="!loading && posts.length" v-for="post in posts" :key="post._id">
              {{post._id}}
            </ul>
          </div>
        </template>

        <script>
        import { mapActions, mapGetters } from 'vuex';
        export default {
          created() {
            this.getPosts();
          },
          methods: {
            ...mapActions(['getPosts']),
          },
          computed: {
            ...mapGetters(['posts','loading']),
          },
        };
        <\/script>`
      }
    },
    components: {
      PrismEditor
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