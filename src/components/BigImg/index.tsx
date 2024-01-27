import { useEffect, useMemo, useRef, useState } from "react";
import http from "../../http";
import { Spin } from "antd";

type BigImgReturn = {
	id: number;
	base64_1: string;
	base64_2: string;
	base64_3: string;
};
function BigImg() {
	const cacheDataRef = useRef<BigImgReturn[]>([]);
	const [data, setData] = useState<BigImgReturn[]>([]);
	const [pageData, setPageData] = useState({ pageNumber: 1, pageSize: 30 });
	const imgIdsRef = useRef<number[]>([]);
	async function getData() {
		// 需要请求页面的数据存在，不需要请求，直接获取
		const isExist = isRequestPageDataExist(pageData.pageNumber);
		console.log("isExist", isExist);
		if (isExist) {
			handleImgData();
			return;
		}
		console.log("request");
		// 将请求获得的数据存入缓存数组中
		const res: BigImgReturn[] = await http.post("/image/page", pageData);
		cacheDataRef.current.push(...res);
		getImgIds();
		handleImgData();
	}

	/**
	 * 获取当前缓存的图片id
	 */
	function getImgIds() {
		cacheDataRef.current.forEach(item => {
			if (!imgIdsRef.current?.includes(item.id))
				imgIdsRef.current.push(item.id);
		});
	}

	const under = useMemo(() => {
		return (pageData.pageNumber - 1) * pageData.pageSize + 1;
	}, [pageData]);

	const floor = useMemo(() => {
		return under + pageData.pageSize - 1;
	}, [pageData]);

	const a = () => {
		const vari = "this is a str varible";
		console.log(1);
	};

	/**
	 * 请求页面的数据是否存在
	 */
	function isRequestPageDataExist(pageNumber: number): boolean {
		// 判断请求页的第一个id是否存在 imgIdsRef 中
		// pageNumber 1 => 1 - 30
		// pageNumber 2 => 31 - 60
		// pageNumber 3 => 61 - 90
		console.log("imgIdsRef", imgIdsRef.current);
		return imgIdsRef.current.includes(under);
	}

	/**
	 * 处理真正渲染在页面上的图片数据
	 */
	function handleImgData() {
		const res = cacheDataRef.current.slice(under - 1, floor);
		console.log("Range", under, floor, res);
		setData(res);
	}

	useEffect(() => {
		getData();
	}, [pageData]);

	return (
		<div>
			<div>
				<button
					onClick={() =>
						setPageData({
							...pageData,
							pageNumber: --pageData.pageNumber,
						})
					}>
					上一页
				</button>
				<button
					onClick={() =>
						setPageData({
							...pageData,
							pageNumber: ++pageData.pageNumber,
						})
					}>
					下一页
				</button>
				<div>{pageData.pageNumber}</div>
			</div>
			<div>
				{data.length ? (
					data.map((item, index: number) => {
						return item.base64_1 ? (
							<img
								width={30}
								key={index}
								src={item.base64_1.replace("'", "")}
							/>
						) : (
							<Spin />
						);
					})
				) : (
					<Spin />
				)}
			</div>
		</div>
	);
}

export default BigImg;
