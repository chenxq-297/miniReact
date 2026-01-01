/* eslint-disable @typescript-eslint/no-explicit-any */
export type ElementType = any;
export type Ref = any;
export type Props = any;
export type Key = any;

// symbol环境
const supportSymbol = typeof Symbol === 'function' && Symbol.for;
export const ReactElementTypeSymbol = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;

export interface ReactElementType {
	$$type: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Props;
	owner: string;
}
