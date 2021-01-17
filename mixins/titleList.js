export const titleList = {
  data() {
    return {
      titleList: data
    }
  },
  methods: {
    convertToSlug(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      let from =
        "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;";
      let to =
        "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

      return str;
    }
  },
  computed: {
    titleListWithSlug() {
      return this.titleList.map(item => ({
        ...item,
        slug: this.convertToSlug(item.title)
      }));
    }
  }
}

const data = [
  { id: 1, 
    title: "JWT(JsonWebToken)", 
    diff: "hard" },
  {
    id: 2,
    title: "Vee-validation",
    diff: "intermediate"
  },
  {
    id: 3,
    title: "Api common status",
    diff: "basic"
  },
  {
    id: 4,
    title: "Loading icon",
    diff: "tip"
  },
  {
    id: 5,
    title: "SSR(server-side rendering) techs",
    diff: "intermediate"
  },
  {
    id: 6,
    title: "meta/schematags/google analytics",
    diff: "basic"
  },
  {
    id: 7,
    title: "moment.js",
    diff: "basic"
  },
  {
    id: 8,
    title: "Check property",
    diff: "basic"
  },
  {
    id: 9,
    title: "Different between ForEach and Map",
    diff: "tip"
  },
  {
    id: 10,
    title: "Useful Filters",
    diff: "intermediate"
  },
  {
    id: 11,
    title: "Useful Plugin",
    diff: "intermediate"
  },
  {
    id: 12,
    title: "Mixins in vue",
    diff: "basic"
  },
  {
    id: 13,
    title: "GraphQL",
    diff: "advanced"
  },
  {
    id: 14,
    title: "Nuxt-auth",
    diff: "intermediate"
  }
];