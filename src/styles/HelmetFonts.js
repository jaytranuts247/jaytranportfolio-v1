import React from "react";
import { Helmet } from "react-helmet";

const HelmetFonts = () => {
	return (
		<>
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Roboto:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
				/>
			</Helmet>
		</>
	);
};

export default HelmetFonts;
