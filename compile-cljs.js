const compileCljs = Npm.require('clojurescript-compiler').compile;

function ClojureScriptCompiler() {}
ClojureScriptCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
    // process and add the output
    var output = compileCljs(file.getContentsAsString());
    // if(file.getPathInPackage() === 'src/interop.clj') {
    //   console.log('=================');
    //   console.log(output); 
    //   console.log('=================');
    // }
    file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
  });
};

Plugin.registerCompiler({
  extensions: ["cljs", "cjs", "clj", "cljc"],
  filenames: []
}, function () {
  var compiler  = new ClojureScriptCompiler();
  return compiler;
});