// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/home/you/website/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-index-js": () => import("/home/you/website/src/pages/about/index.js" /* webpackChunkName: "component---src-pages-about-index-js" */),
  "component---src-pages-alumni-index-js": () => import("/home/you/website/src/pages/alumni/index.js" /* webpackChunkName: "component---src-pages-alumni-index-js" */),
  "component---src-pages-archive-index-js": () => import("/home/you/website/src/pages/archive/index.js" /* webpackChunkName: "component---src-pages-archive-index-js" */),
  "component---src-pages-contact-index-js": () => import("/home/you/website/src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-faculty-index-js": () => import("/home/you/website/src/pages/faculty/index.js" /* webpackChunkName: "component---src-pages-faculty-index-js" */),
  "component---src-pages-index-js": () => import("/home/you/website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-members-index-js": () => import("/home/you/website/src/pages/members/index.js" /* webpackChunkName: "component---src-pages-members-index-js" */)
}

exports.data = () => import("/home/you/website/.cache/data.json")

