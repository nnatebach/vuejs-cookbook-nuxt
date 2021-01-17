<template>
  <div>
    <div v-if="itemBySlug" class="category-page">
      {{itemBySlug.id + "/" + titleListWithSlug.length}}
    </div>
    <h1 class="page-title" v-if="itemBySlug">
      {{itemBySlug.title}}
    </h1>

    <v-container>
      <p>
        I think we should save token in Cookies. Because it’s safer than
        LocalStorage ( by httponly and secure flag). This option depends on
        clients ‘s requirement We have 2 type: token and refresh token
      </p>
      <h2 class="page-section">1. Reason to have 2 tokens</h2>
      <p>
        - If have only token: When the token expires users must login again.
        It’s bad for user experience. If auto renew token, when we lost token is
        lost account forever.
      </p>

      <p>
        - Have both token and refresh token: When the token expires, we will
        send refresh token in headers(like token) to get the new token. Usually
        token expires in short time (exp: 5 minutes , 1h , …). Refresh token
        expires in long time (exp: 1 week, 1 month). Token send into every
        endpoints and Refresh token send only the token expires. So Refresh
        token maybe safe than token. When we lost token, hacker can only use the
        token in the short time. And when refresh token expires, we will do
        depends on client’s requirement (login again or auto renew refresh token
        and token, ….)
      </p>
      <p>Please research for more information!</p>
      <h2 class="page-section">2. Examples</h2>
      <ul>
        <li>Login with bearer auth</li>
        <li>Login with cookie</li>
        <li>Refresh token</li>
      </ul>
      <p>
        The code below: I handle when the token expires, then send refresh token
        to renew token. And when refresh token expires, must login again. I
        tested with backend api that i wrote by Nodejs and it worked
      </p>
      <p class="code-file">Main.js</p>
      <!-- {{code1}} -->
      <prism-editor class="my-editor" v-model="code1" :highlight="highlighter" line-numbers></prism-editor>
      <p class="code-file">Methods - Vue file</p>
      <!-- {{code1}} -->
      <prism-editor class="my-editor" v-model="code2" :highlight="highlighter" line-numbers></prism-editor>

      <h2 class="page-section">3.NuxtJS</h2>
      <p>
        In NuxtJS please see
        <a href="/nuxt-auth">
          Nuxt-auth
        </a>
      </p>

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

  // import Prism Editor
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
        code1: `import VueCookies from 'vue-cookies';
      import jwt_decode from 'jwt-decode';

      Vue.use(VueCookies);
      let isValid = false;
      axios.interceptors.request.use(
        async function (config) {
          //care infinity loop
          if (isValid === true) {
            isValid = false;
            return config;
          }
          const token = Vue.$cookies.get('token');
          config.headers.common['Authorization'] = token;
          // Do something before request is sent
          const expToken = Vue.$cookies.get('token_exp');
          const expRefresh = Vue.$cookies.get('refresh_exp');
          //check expired
          let refreshTokenExpired = new Date() > new Date(expRefresh * 1000);
          let tokenExpired = new Date() > new Date(expToken * 1000);

          if (refreshTokenExpired) {
            Vue.$cookies.keys().forEach((cookie) => Vue.$cookies.set(cookie, false));
          }
          if (tokenExpired) {
            if (refreshTokenExpired) {
              Vue.$cookies
                .keys()
                .forEach((cookie) => Vue.$cookies.set(cookie, false));
              return config;
            }
            //refresh token
            isValid = true;
            const refresh = Vue.$cookies.get('refresh');
            const { data } = await axios.post(
              'http://localhost:3000/api/auth/refresh',
              {
                refresh,
              }
            );
            Vue.$cookies.set('token', 'Bearer ' + data.token, '4m');
            const decodeToken = jwt_decode(data.token);
            //time exp
            Vue.$cookies.set('token_exp', decodeToken.exp, '4m');
            config.headers.common['Authorization'] = 'Bearer ' + data.token;
          }
          return config;
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        }
      );`,
      code2: `methods: {
        async login() {
          try {
            let user = { email: 'thanh@gmail.com', password: '123' };
            let { data } = await this.axios.post(
              'http://localhost:3000/api/auth/login',
              user
            );
            // the name is depends on client's requirements
            this.$cookies.set('token', 'Bearer ' + data.token, '4m');
            this.$cookies.set('refresh', data.refresh, '4m');
            const decodeToken = jwt_decode(data.token);
            const decodeRefresh = jwt_decode(data.refresh);
            this.$cookies.set('token_exp', decodeToken.exp, '4m');
            this.$cookies.set('refresh_exp', decodeRefresh.exp, '4m');
            this.loading = false;
          } catch (err) {
            //....
          }
        },
        logout(){
          this.$cookies.keys().forEach((cookie) => this.$cookies.set(cookie, false));
          // this.$router .... index
        },
        async test() {
          let { data } = await this.axios.get(
            'http://localhost:3000/api/productOfCategory'
          );
          console.log(data.products);
        },
      },`
      }
    },
    mixins: [titleList],
    methods: {
      highlighter(code) {
        return highlight(code, languages.js); //returns html
      },
    },
    computed: {
      itemBySlug() {
        if (process.browser) { // detecting 'server' vs 'client' side - 'process.browser' returns 'true' for client-side and 'undefined' for server-side
          return this.titleListWithSlug.find(item => (item.slug = window.location.pathname.slice(1))
        )
      }
    }
  },
  mounted() {
    console.log(this.itemBySlug.id);
    console.log(JSON.stringify(this.itemBySlug.id))
  }
}
</script>

<style lang="sass" scoped>
</style>