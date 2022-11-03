const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [sveltePreprocess()],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
