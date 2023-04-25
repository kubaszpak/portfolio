import {
	SiDocker,
	SiJsonwebtokens,
	SiMui,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiSocketdotio,
	SiTrpc,
	SiTypescript,
} from "react-icons/si";
import { TbBraces, TbBrandNextjs, TbMapSearch } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

import domkyLandingPage from "./assets/static/domky/domky_lading_page.png";
import domkyListingDetails from "./assets/static/domky/listing_details_1.png";

import kawaTrawaLandingPage from "./assets/static/kawa_trawa/kawa_trawa.png";

import portfolioLandingPage from "./assets/static/portfolio/portfolio.png";

const projects = {
	domky: {
		title: "Domky",
		images: [domkyLandingPage, domkyListingDetails],
		description: (
			<>
				A web application that allows accommodation booking for people in need
				in Poland. The application allows users to create accounts, share their
				offers and search other listings based on availability, location and
				number of guests. The decision to share an accommodation is up to the
				host and is based on user communication, facilitated by a built-in real
				time socket managed chat system. The application uses Google Maps API
				for specyfing and displaying locations of the accomodation. It stores
				user data in a MySQL Database handled by Prisma ORM and an image bucket
				Cloudinary, allows safe user authentication with GitHub and Google
				accounts and is fully written in TypeScript(Next.js with an end-to-end
				typesafe API in{" "}
				<a
					className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
					href="https://trpc.io/"
				>
					tRPC
				</a>
				).
			</>
		),
		technologies: [
			<>
				<a
					className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
					href="https://trpc.io/"
				>
					tRPC
				</a>
				<SiTrpc className="ml-3 inline" size={36} />
			</>,
			<>
				Next.js
				<TbBrandNextjs className="ml-3 inline" size={36} />
			</>,
			<>
				React
				<SiReact className="ml-3 inline" size={36} />
			</>,
			<>
				MySQL
				<DiMysql className="ml-3 inline" size={36} />
			</>,
			<>
				Prisma
				<SiPrisma className="ml-3 inline" size={36} />
			</>,
			<>
				Google Maps API
				<TbMapSearch className="ml-3 inline" size={36} />
			</>,
			<>
				Pusher
				<SiSocketdotio className="ml-3 inline" size={36} />
			</>,
		],
		codeLink: "https://github.com/kubaszpak/domky",
		siteLink: "https://domky.vercel.app/",
	},
	kawa_trawa: {
		title: "Kawa i trawa",
		images: [kawaTrawaLandingPage],
		description: (
			<>
				Design of a fully functional Ecommerce web shop in Polish with frontend
				in React and backend in Node Express API with Typescript. The project
				was completed as a group assignment in college, and then expanded and
				led by me. Authentication based on JSON Web Token standard with email
				verification using Ethereal. All data is stored in a dockerized Postgres
				database. Typeorm is used as an interface to the database. Access to
				individual API endpoints is granted on the basis of three user types:
				admin, employee, and customer. A user can also be verified by email or
				banned.
			</>
		),
		technologies: [
			<>
				React
				<SiReact className="ml-3 inline" size={36} />
			</>,
			<>
				Material UI
				<SiMui className="ml-3 inline" size={36} />
			</>,
			<>
				Node
				<SiNodedotjs className="ml-3 inline" size={36} />
			</>,
			<>
				Postgres
				<SiPostgresql className="ml-3 inline" size={36} />
			</>,
			<>
				Typeorm
				<TbBraces className="ml-3 inline" size={36} />
			</>,
			<>
				JWT
				<SiJsonwebtokens className="ml-3 inline" size={36} />
			</>,
			<>
				Docker
				<SiDocker className="ml-3 inline" size={36} />
			</>,
		],
		codeLink: "https://github.com/kubaszpak/kawa-trawa",
		siteLink: "#",
	},
	portfolio: {
		title: "Web portfolio",
		images: [portfolioLandingPage],
		description:
			"A React frontend-only website designed to represent the skills learned in programming so far. The application uses Tailwind CSS for styling with the Flowbite add-on",
		technologies: [
			<>
				React
				<SiReact className="ml-3 inline" size={36} />
			</>,
			<>
				Typescript
				<SiTypescript className="ml-3 inline" size={36} />
			</>,
		],
		codeLink: "https://github.com/kubaszpak/portfolio",
		siteLink: "#",
	},
};

export default projects;
