const {injectBabelPlugin} = require('react-app-rewired');

const deepClone = (object) => {
  return JSON.parse(JSON.stringify(object));
};

const getLoader = (rules, matcher) => {
  let match;

  rules.some(rule => {
    return (match = matcher(rule)
      ? {rules, rule}
      : getLoader(rule.use || rule.oneOf || [], matcher));
  });

  return match;
};

const rewireStylus = (config, env) => {
  const {rule: cssRule, rules} = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  );

  const stylusRule = deepClone(cssRule);
  stylusRule.test = /\.styl$/;
  if (env === 'production') {
    stylusRule.loader.splice(3, 0, require.resolve('stylus-loader'));
  } else {
    stylusRule.use.splice(2, 0, require.resolve('stylus-loader'));
  }
  rules.splice(rules.indexOf(cssRule), 0, stylusRule);

  return config;
}

const antdBabelConfig = ['import',
  {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }
]
module.exports = function override(config, env) {
  config = injectBabelPlugin(antdBabelConfig, config);
  rewireStylus(config, env);
  return config
}
