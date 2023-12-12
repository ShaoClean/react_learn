import { useEffect, useState } from "react";
import http from "../http";

const Demo1 = () => {
	const [data, setData] = useState<any>();
	const getImgByIdApi = (id: number) => {
		return http.get(`/image?id=${id}`);
	};
    const postImgByIdApi = (id: number) => {
		return http.post('/image/get',{id});
	};
	const getAllImg = () => {
		return http.get("/image/all");
	};

	const loadImgToPage = async (isAll?: boolean) => {
		const res = isAll ? await getAllImg() : await getImgByIdApi(63);
		console.log(res);
		// const img1 = <img src={res.base64_1} alt="" />;
		// const img2 = <img src={res.base64_2} alt="" />;
		// const img3 = <img src={res.base64_3} alt="" />;
		// const resData = (
		// 	<div>
		// 		{img1}
		// 		{img2}
		// 		{img3}
		// 	</div>
		// );

		// setData(resData);
	};

	useEffect(() => {
		loadImgToPage(true)
	}, []);

	return <div>{data}</div>;
};

export default Demo1;
