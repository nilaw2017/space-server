"use strict";

/**
 * blog router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
module.exports = createCoreRouter("api::blog.blog");

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/blogs/:BlogTitle",
//       handler: "blog.findOne",
//     },
//     {
//       method: "GET",
//       path: "/blogs",
//       handler: "blog.find",
//     },
//   ],
// };

// module.exports = createCoreRouter("api::blog.blog", {
//   config: {
//     routes: [
//       {
//         method: "GET",
//         path: "/blogs/:uid",
//         handler: "blog.findOne",
//       },
//       {
//         method: "GET",
//         path: "/blogs",
//         handler: "blog.find",
//       },
//     ],
//   },
// });
