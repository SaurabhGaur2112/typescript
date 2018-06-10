exports.devServer = ({ host, port } = {}) => ({
    devServer: {
      stats: "errors-only",
      host, // Defaults to `localhost`
      port, // Defaults to 8080
      overlay: {
        errors: true,
        warnings: true
      },
      hot: true,
      // contentBase: './build/index.html',
          //     headers: {},//Attach custom headers to your requests here.
  
      //     proxy: {},//If you are using multiple servers, you have to proxy WDS to them. The proxy setting accepts an object of proxy mappings (e.g., { "/api": "http://localhost:3000/api" }) that resolve matching queries to another server. Proxy settings are disabled by default.
  
      //     contentBase: ['/'] // Assuming you don't generate index.html dynamically and prefer to maintain it yourself in a specific directory, you need to point WDS to it. contentBase accepts either a path (e.g., "build")
    }
  });
  