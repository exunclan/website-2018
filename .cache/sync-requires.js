// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/somesh/github/website/src/pages/404.js")),
  "component---src-pages-about-index-js": preferDefault(require("/home/somesh/github/website/src/pages/about/index.js")),
  "component---src-pages-alumni-index-js": preferDefault(require("/home/somesh/github/website/src/pages/alumni/index.js")),
  "component---src-pages-archive-index-js": preferDefault(require("/home/somesh/github/website/src/pages/archive/index.js")),
  "component---src-pages-faculty-index-js": preferDefault(require("/home/somesh/github/website/src/pages/faculty/index.js")),
  "component---src-pages-index-js": preferDefault(require("/home/somesh/github/website/src/pages/index.js")),
  "component---src-pages-members-index-js": preferDefault(require("/home/somesh/github/website/src/pages/members/index.js"))
}

