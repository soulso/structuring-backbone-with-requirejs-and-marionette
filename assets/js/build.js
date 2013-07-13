// installed node package with
// npm install requirejs

// command used to build:
// ~/Documents/dev/requireJS_book_app_second_try$ node r.js -o assets/js/build.js

({
    baseUrl: ".", // needed to overwrite baseUrl in mainConfigFile, or libs are looked for in assets/js/assets/js
//     paths: {
//         //jquery: "some/other/jquery"
//     },
    name: "require_main",
    mainConfigFile: "require_main.js",
    out: "require_main.built.js"
})