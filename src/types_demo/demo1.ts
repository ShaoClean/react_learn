// 1.定义一个JS类型的关系映射，实现根据字符串的类型得到真正的类型标注
type JSTypeNamesMap = {
	string: string;
	number: number;
	boolean: boolean;
	symbol: symbol;
	null: null;
	undefined: undefined;
	object: object;
	bigint: bigint;
};

type JSTypeNames = keyof JSTypeNamesMap;

type ArgsType<T extends JSTypeNames[]> = {
	[I in keyof T]: T[I] extends T[I] ? JSTypeNamesMap[T[I]] : never;
};
/**
 * 函数的参数不定量，0个或者无数个
 * 最后一个参数一定是一个函数，最后一个函数的参数就是前面的参数
 */
declare function addImpl<T extends JSTypeNames[]>(
	...args: [...T, (...R: ArgsType<T>) => any]
): unknown;

// 测试用例（但是没有实现数量严格要求相同）
addImpl("string", (a: string) => {});
addImpl("string", "number", (a, b) => {});
addImpl("string", "number", "boolean", (a, b, c) => {});
