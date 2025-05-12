module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
    pathPrefix: "/luridarc-site", // or your repo name like "/luridarc-site/" if using a subpath
  };
};
