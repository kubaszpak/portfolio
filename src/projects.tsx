import {
	SiDocker,
	SiJsonwebtokens,
	SiMui,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiSocketdotio,
	SiTailwindcss,
	SiTrpc,
	SiTypescript,
} from "react-icons/si";
import { TbBraces, TbBrandNextjs, TbMapSearch } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

import domkyLandingPage from "./assets/static/domky/domky_lading_page.png";
import domkyAuth from "./assets/static/domky/domkyAuthentication.png";
import domkySearchQueryResult from "./assets/static/domky/search_query_results.png";
import domkyListingDetails from "./assets/static/domky/listing_details_1.png";
import domkyCreatePage from "./assets/static/domky/create_up.png";
import domkyCrop from "./assets/static/domky/crop.png";
import domkyChat from "./assets/static/domky/chat_1.png";
import domkyProfilePage from "./assets/static/domky/profile_page.png";
import domkyReservationsModal from "./assets/static/domky/reservations_modal.png";

import kawaTrawaLandingPage from "./assets/static/kawa_trawa/kawa_trawa.png";
import kawaTrawaProducts from "./assets/static/kawa_trawa/kawa_trawa_products.png";
import kawaTrawaAuth from "./assets/static/kawa_trawa/kawa_trawa_auth.png";
import kawaTrawaRegisterConfirm from "./assets/static/kawa_trawa/kawa_trawa_register_confirm.png";
import kawaTrawaCart from "./assets/static/kawa_trawa/kawa_trawa_cart.png";
import kawaTrawaOrders from "./assets/static/kawa_trawa/kawa_trawa_orders.png";
import kawaTrawaEmpView from "./assets/static/kawa_trawa/kawa_trawa_emp_view_edit.png";
import kawaTrawaProductAdd from "./assets/static/kawa_trawa/kawa_trawa_product_add.png";

import portfolioLandingPage from "./assets/static/portfolio/portfolio.png";
import portfolioLight from "./assets/static/portfolio/portfolioLight.png";
import portfolioAbout from "./assets/static/portfolio/portfolioAbout.png";
import portfolioProjects from "./assets/static/portfolio/portfolioProjects.png";
import portfolioContact from "./assets/static/portfolio/portfolioContact.png";

const projects = {
	domky: {
		title: "Domky",
		images: [
			domkyLandingPage,
			domkyAuth,
			domkySearchQueryResult,
			domkyListingDetails,
			domkyCreatePage,
			domkyCrop,
			domkyChat,
			domkyProfilePage,
			domkyReservationsModal,
		],
		description: (
			<>
				A web application that allows accommodation booking for people in need
				in Poland. The application allows users to create accounts, share their
				offers and search other listings based on availability, location, and
				number of guests. The decision to share an accommodation is up to the
				host and is based on user communication, facilitated by a built-in
				real-time socket-managed chat system. The application uses Google Maps
				API for specifying and displaying the locations of the accommodation. It
				stores user data in a MySQL Database handled by Prisma ORM and an image
				bucket Cloudinary. The application allows safe user authentication with
				GitHub and Google accounts, and is fully written in TypeScript(Next.js
				with an end-to-end typesafe API in{" "}
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
				Tailwind CSS
				<SiTailwindcss className="ml-3 inline" size={36} />
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
		images: [
			kawaTrawaLandingPage,
			kawaTrawaProducts,
			kawaTrawaAuth,
			kawaTrawaRegisterConfirm,
			kawaTrawaCart,
			kawaTrawaOrders,
			kawaTrawaEmpView,
			kawaTrawaProductAdd,
		],
		description: (
			<>
				Design of a fully functional Ecommerce webshop in Polish with frontend
				in React and backend in Node Express API with Typescript. The project
				was completed as a group assignment in college and then expanded and led
				by me. Authentication based on JSON Web Token standard with email
				verification using Nodemailer. All data is stored in a dockerized
				Postgres database. Typeorm is used as an interface to the database.
				Access to individual API endpoints is granted based on three user types:
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
		siteLink: "https://kawa-trawa.pl",
	},
	portfolio: {
		title: "Web portfolio",
		images: [
			portfolioLandingPage,
			portfolioLight,
			portfolioAbout,
			portfolioProjects,
			portfolioContact,
		],
		description:
			"A React frontend-only website designed in Figma to represent the skills learned in programming so far. The application uses Tailwind CSS for styling with the Flowbite add-on.",
		technologies: [
			<>
				React
				<SiReact className="ml-3 inline" size={36} />
			</>,
			<>
				Typescript
				<SiTypescript className="ml-3 inline" size={36} />
			</>,
			<>
				Tailwind CSS
				<SiTailwindcss className="ml-3 inline" size={36} />
			</>,
		],
		codeLink: "https://github.com/kubaszpak/portfolio",
		siteLink: "#",
	},
};

export default projects;
