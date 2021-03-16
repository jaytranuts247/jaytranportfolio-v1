import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import { useViewportScroll } from "framer-motion";

const useIsTop = () => {
	const [isTop, setIsTop] = useState(true);
	const { scrollY } = useViewportScroll();

	const handleScroll = throttle((y) => {
		if (y === 0) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	}, 100);

	scrollY.onChange((y) => {
		handleScroll(y);
	});

	return isTop;
};

export default useIsTop;
