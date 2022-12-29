module.exports = function(eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // Copy all posts images
  eleventyConfig.addPassthroughCopy("posts/*/*.jpg");

  return {
    templateFormats: ['html', 'liquid', 'md']
  };
}