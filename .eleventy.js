const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Manage plugins
  eleventyConfig.addPlugin(pluginRss);

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy all posts images
  eleventyConfig.addPassthroughCopy("src/posts/*/*.jpg");

  // Copy error page
  eleventyConfig.addPassthroughCopy("src/error.html");

  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}