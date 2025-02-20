// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// // module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = (async () => {
//     const {
//       resolver: { sourceExts, assetExts },
//     } = await getDefaultConfig();
//     return {
//       transformer: {
//         babelTransformerPath: require.resolve('react-native-svg-transformer'),
//       },
//       resolver: {
//         assetExts: assetExts.filter(ext => ext !== 'svg'),
//         sourceExts: [...sourceExts, 'svg'],
//       },
//     };
//   })();

//! Actual 2nd code
// const { getDefaultConfig } = require('@react-native/metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg').concat(['png']),
//       sourceExts: [...sourceExts, 'svg', 'png'],
//     },
//   };
// })();

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
