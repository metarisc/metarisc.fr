const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Manage plugins
  eleventyConfig.addPlugin(pluginRss);

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // Copy all posts images
  eleventyConfig.addPassthroughCopy("posts/*/*.jpg");

  // Copy error page
  eleventyConfig.addPassthroughCopy("error.html");

  return {
    templateFormats: ['html', 'liquid', 'md', 'njk']
  };
}