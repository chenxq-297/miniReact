/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Key,
	Props,
	Ref,
	ElementType,
	ReactElementType,
	ReactElementTypeSymbol
} from 'shared/ReactType';

const ReactElement = function (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$type: ReactElementTypeSymbol,
		type,
		key,
		ref,
		props,
		owner: 'cxq'
	};
	return element;
};
export const jsx = function (
	type: ElementType,
	config: any,
	...maybeChildren: any
): ReactElementType {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDev = jsx;
