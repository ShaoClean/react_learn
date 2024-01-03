import { number } from "echarts";

const color = ["text-blue-600", "text-yellow-600", "text-red-600"] as const;

// infer 关键字用于推断类型，表示在 extends 条件语句中待推断的类型变量。
// 且只能在条件表达式中的True分支中使用
type ColorPicker<T extends string> = T extends `text-${infer R}-${infer C}`
	? R
	: T;

type Test = ColorPicker<"text-blue-11500">;

const testFun = (inputColor: ColorPicker<(typeof color)[number]>) => {
	return color.find(item => item.includes(inputColor));
};

testFun("blue");

//  ColorPicker<(typeof color)[number]> 的应用
const arr = [
	{
		label: "label1",
		value: 1,
	},
	{
		label: "label2",
		value: 2,
	},
] as const;

type MyArr = (typeof arr)[number]["label"];

// 扩展 in关键字
interface aa {
	a: number;
	b: string;
	c: boolean;
}
type bb = {
	[k in keyof aa as `${k}_prod`]: aa[k];
};
