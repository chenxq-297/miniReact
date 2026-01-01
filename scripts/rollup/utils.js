import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const pkgPath = path.resolve(__dirname, '../../packages');
export const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgPathName, isDist) {
	if (!isDist) {
		return `${pkgPath}/${pkgPathName}`;
	} else {
		return `${distPath}/${pkgPathName}`;
	}
}

export function getPkgToJSON(pkgPathName) {
	const path = `${resolvePkgPath(pkgPathName)}/package.json`;
	const str = fs.readFileSync(path, {
		encoding: 'utf-8'
	});
	return JSON.parse(str);
}

export function getBaseRollupPlugins({ typescript: tsConfig = {} } = {}) {
	return [nodeResolve(), commonjs(), typescript(tsConfig)];
}
