import { SiTrpc } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

import domkyLandingPage from "./assets/static/domky/domky_lading_page.png";
import domkyListingDetails from "./assets/static/domky/listing_details_1.png";

import kawaTrawaLandingPage from "./assets/static/kawa_trawa/kawa_trawa.png";

import portfolioLandingPage from "./assets/static/portfolio/portfolio.png";

const projects = {
	domky: {
		title: "Domky",
		images: [domkyLandingPage, domkyListingDetails],
		description: `A web application that allows accommodation booking for
		people in need in Poland. The application allows users to
		create accounts, share their offers and search other
		listings based on availability, location and number of
		guests. The decision to share an accommodation is up to the
		host and is based on user communication, facilitated by a
		built-in real time socket chat system. The application uses
		Google Maps API for specyfing and displaying locations of
		the accomodation. It stores user data in a MySQL Database
		and an image bucket Cloudinary, allows safe user
		authorization with GitHub and Google accounts and is fully
		written in TypeScript(Next.js with tRPC).`,
		technologies: [
			<>
				tRPC
				<SiTrpc className="ml-3 inline" size={36} />
			</>,
			<>
				Next.js
				<TbBrandNextjs className="ml-3 inline" size={36} />
			</>,
			<>
				MySQL
				<DiMysql className="ml-3 inline" size={36} />
			</>,
		],
	},
	kawa_trawa: {
		title: "Kawa i trawa",
		images: [kawaTrawaLandingPage],
		description: " ",
		technologies: [],
	},
	portfolio: {
		title: "Web portfolio",
		images: [portfolioLandingPage],
		description: " ",
		technologies: [],
	},
};

export default projects;
