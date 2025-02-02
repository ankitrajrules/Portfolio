import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Ankit",
	lastName: "Raj",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Software Engineer",
	avatar: "/images/avatar.jpg",
	location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	situated: "India, Delhi",
	languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: false,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on the
			intersection of creativity and engineering.
		</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/ankitrajrules",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/ankitrajrules",
	},
	{
		name: "X",
		icon: "x",
		link: "https://www.x.com/ankitrajrules",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:ankitraj.rndev@gmail.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: ["Software Engineer", "Fullstack Developer", "Problem Solver"],
	subline: (
		<>
			I'm Ankit Raj, a Software Developer in <InlineCode>BSES Delhi</InlineCode> ,
			<br />transforming ideas into coded solutions.
			<br />I can do Frontend, Backend Development and Integrating AI solutions.
		</>
	),
};

const about = {
	label: "About",
	title: "About me",
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				Ankit Raj is an India-based software developer and problem solver with a
				passion for building scalable
				<br /> solutions. He specializes in full-stack development, API design,
				and crafting seamless digital experiences.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "BSES Delhi",
				timeframe: "December 2024 - Present",
				role: "Software Development Engineer - Fullstack",
				achievements: [
					<>
						Reverse Engineered the whole Grid Automatic Meter Reading 
						System and fetching more than 4x more parameters resulting scalable and robust system resulting in 40% reduction of manual effort.
					</>,
					<>
						Revamped a legacy desktop app by integrating USB communication
						with SCP file transfers, boosting data speeds by 3x.
					</>,
				],
				images: [
					// // optional: leave the array empty if you don't want to display images
					// {
					// 	src: "/images/projects/project-01/cover-01.jpg",
					// 	alt: "Once UI Project",
					// 	width: 16,
					// 	height: 9,
					// },
				],
			},
			{
				company: "BSES Delhi",
				timeframe: "December 2023 - December 2024",
				role: "Graduate Engineer Trainee",
				achievements: [
					<>
						Successfully converted 20+ SOAP APIs into RESTful services 
						leading to a 24% increase in data processing speed.
					</>,
					<>
						Collaborated with backend and frontend teams to integrate JWT authentication 
						and silent refresh token functionality across multiple applications, 
						ensuring smooth interoperability and consistency.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Studies",
		institutions: [
			{
				name: "Delhi Technological University (DTU)/(DCE)",
				description: <>Studied computer science engineering.</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			// {
			// 	title: "Figma",
			// 	description: (
			// 		<></>
			// 	),
			// 	images: [
			// 		// {
			// 		// 	src: "/images/projects/project-01/cover-02.jpg",
			// 		// 	alt: "Project image",
			// 		// 	width: 16,
			// 		// 	height: 9,
			// 		// },
			// 		// {
			// 		// 	src: "/images/projects/project-01/cover-03.jpg",
			// 		// 	alt: "Project image",
			// 		// 	width: 16,
			// 		// 	height: 9,
			// 		// },
			// 	],
			// },
			{
				title: "NextJs",
				description: (
					<></>
				),
				images: [
					// {
					// 	src: "/images/projects/project-01/cover-04.jpg",
					// 	alt: "Project image",
					// 	width: 16,
					// 	height: 9,
					// },
				],
			},
			{
				title: "Express.js",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "React.js",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Node.js",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "MongoDB",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Java",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Spring Framework",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Python",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "FastAPI",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Django",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "PostgreSQL",
				description: (
					<></>
				),
				images: [],
			},
			{
				title: "Oracle DB",
				description: (
					<></>
				),
				images: [],
			},
		],
	},
};

const blog = {
	label: "Blog",
	title: "Writing about design and tech...",
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work = {
	label: "Work",
	title: "My projects",
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: "Gallery",
	title: "My photo gallery",
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: "/images/gallery/img-01.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-02.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-03.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-04.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-05.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-06.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-07.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-08.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-09.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-10.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-11.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-12.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-13.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-14.jpg",
			alt: "image",
			orientation: "horizontal",
		},
	],
};

export { person, social, newsletter, home, about, blog, work, gallery };
