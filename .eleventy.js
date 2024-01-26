const pluginRss = require("@11ty/eleventy-plugin-rss");
const sass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
  // Manage plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(sass);

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/scripts");
  
  // Copy all posts images
  eleventyConfig.addPassthroughCopy("src/posts/*/*.jpg");
  
  // Copy error page
  eleventyConfig.addPassthroughCopy("src/error.html");
  
  // eleventyConfig.setBrowserSyncConfig({files: 'src/css/**/*.css'});

  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}