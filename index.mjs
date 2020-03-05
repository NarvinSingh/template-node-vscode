export default {
  installDevDeps:
    'npm i -D eslint eslint-config-airbnb-base eslint-plugin-import jest @babel/preset-env',
  'package.json': {
    type: 'module', // node: enable .js ES6 modules`
    scripts: {
      test: 'jest',
    },
  },
  '.eslintrc.json':
  {
    env: {
      jest: true, // detect jest types
    },
    extends: 'airbnb-base',
    rules: {
      'import/extensions': ['error', 'always'], // always require import extension
    },
  },
  '.bablerc.json':
  {
    presets: [
      [
        '@babel/preset-env', // jest: enable import statement
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  },
  'jest.config.json':
  {
    transform: {
      '^.+\\.m?js$': 'babel-jest', // transpile imports
    },
  },
  'vscode.settings.json':
  {
    'telemetry.enableTelemetry': false,
    'telemetry.enableCrashReporter': false,
    'editor.detectIndentation': false,
    'editor.tabSize': 2,
    'editor.rulers': [100],
    'files.eol': '\n',
  },
};
