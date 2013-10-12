Package.describe({
  summary: "Microsoft Translate API NPM Wrapper"
});

Npm.depends({ "mstranslator": "0.1.5" });

Package.on_use(function (api) {
  api.add_files("mstranslator.js", "server");

  if (api.export) 
    api.export('MsTranslator');
});
