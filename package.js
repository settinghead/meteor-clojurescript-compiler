Package.describe({
  "name": "settinghead:cljs-compiler",
  "summary": "ClojureScript compiler for Meteor",
  "git": "https://github.com/settinghead/meteor-clojurescript.git"
});

Npm.depends({
	'google-closure-library': '20150920.0.0',
	'brfs': '1.4.1'
});

Package.onUse(function (api) {
	api.use(['isobuild:compiler-plugin@1.0.0']);
});

Package.registerBuildPlugin({
	name: "compile-clojurescript",
	sources: [
		'compile-cljs.js'
	],
	npmDependencies: {
    "clojurescript-compiler": "1.1.4"
  }});