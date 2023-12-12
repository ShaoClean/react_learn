import { useEffect, useMemo, useState } from "react";

function PrimesWithMemo() {
	const [selectedNum, setSelectedNum] = useState(100);
    
	const time = useTime();

	console.log("PrimesWithMemo is re-render");

	const allPrimes = useMemo(() => {
		const allPrimes = [];
		for (let counter = 2; counter < selectedNum; counter++) {
			if (isPrime(counter)) {
				allPrimes.push(counter);
			}
		}
		return allPrimes;
	}, [selectedNum]);

	return (
		<>
			<p className="clock">{time.toString()}</p>
			<form>
				<label htmlFor="num">Your number:</label>
				<input
					type="number"
					value={selectedNum}
					onChange={event => {
						let num = Math.min(100_000, Number(event.target.value));

						setSelectedNum(num);
					}}
				/>
			</form>
			<p>
				There are {allPrimes.length} prime(s) between 1 and{" "}
				{selectedNum}:{" "}
				<span className="prime-list">{allPrimes.join(", ")}</span>
			</p>
		</>
	);
}

function isPrime(n: number) {
	const max = Math.ceil(Math.sqrt(n));

	if (n === 2) {
		return true;
	}

	for (let counter = 2; counter <= max; counter++) {
		if (n % counter === 0) {
			return false;
		}
	}

	return true;
}

function useTime() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, []);

	return time;
}

export default PrimesWithMemo;
