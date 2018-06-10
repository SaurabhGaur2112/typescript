const assets = require('./webpack.assets');
const webpack = require('webpack');

exports.commonConfig = () => ({
    name: 'Plus',
    entry: { build: assets.PATHS.client },
    output: {
      path: assets.PATHS.build,
      filename: "[name]-[chunkhash:6].js",
      chunkFilename: "[chunkhash:6].js",
      publicPath: '/assets/'
    },
    // target: 'node',
  //   externals: [nodeExternals({
  //     // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*` 
  //     whitelist: ['react', 'webpack/hot/dev-server', /^lodash/,]
  // })],  
    plugins: [new webpack.NamedModulesPlugin(),  
    //   new webpack.NamedChunksPlugin((chunk) => { 
    //   if (chunk.name) { 
    //     return chunk.name; 
    //   } 
    //   return chunk.modules.map(m => path.relative(m.context, m.request)).join("_"); 
    // }),
   ],//if need to hide info from client then use HashedModuleIdsPlugin  
    // devtool: 'source-map'
    recordsPath: assets.PATHS.recordsPath
  });

  