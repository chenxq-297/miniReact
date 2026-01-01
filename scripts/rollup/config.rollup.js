import { getPkgToJSON, resolvePkgPath, getBaseRollupPlugins } from './utils.js';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import alias from '@rollup/plugin-alias';

const { module: pkgModule } = getPkgToJSON('react');
const reactPkgPath = resolvePkgPath('react');
const reactDistPath = resolvePkgPath('react', true);

export default [
	// react 打包
	{
		input: `${reactPkgPath}/${pkgModule}`,
		output: {
			file: `${reactDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getBaseRollupPlugins(),
			alias({
				entries: [{ find: 'shared', replacement: resolvePkgPath('shared') }]
			}),
			generatePackageJson({
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime 打包
	{
		input: `${reactPkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${reactDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime',
				format: 'umd'
			},
			{
				file: `${reactDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime',
				format: 'umd'
			}
		],
		plugins: [
			...getBaseRollupPlugins(),
			alias({
				entries: [{ find: 'shared', replacement: resolvePkgPath('shared') }]
			})
		]
	}
];
