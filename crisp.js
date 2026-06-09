// Crisp support chat — loaded on every docs page.
// Mintlify automatically includes any .js file in the content directory.
// Website ID is shared with the app (app/src/app/layout.tsx).
window.$crisp = [];
window.CRISP_WEBSITE_ID = "ac051aa4-935b-45a5-89f5-fc0c1de02461";
(function () {
  var d = document;
  var s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
