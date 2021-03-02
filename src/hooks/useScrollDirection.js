import { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";

const SCROLL_UP = "UP";
const SCROLL_DOWN = "DOWN";

const useScrollDirection = ({
	initialScrollDirection,
	thresholdPixels,
} = {}) => {
	const lastScrollPos = useRef(0);
	const [direction, setDirection] = useState(initialScrollDirection);

	useEffect(() => {
		const threshold = thresholdPixels || 0;

		const handleScroll = throttle(() => {
			if (Math.abs(window.pageYOffset - lastScrollPos.current) < threshold)
				return;
			setDirection(
				window.pageYOffset > lastScrollPos.current ? SCROLL_DOWN : SCROLL_UP
			);
			lastScrollPos.current = window.pageYOffset;
		}, 100);

		document.addEventListener("scroll", handleScroll);
		return () => document.addEventListener("scroll", handleScroll);
	}, [initialScrollDirection, thresholdPixels]);

	return direction;
};

export default useScrollDirection;
