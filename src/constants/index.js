import {
	// Logos
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	// Tech
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	docker,
	freelance,
	worldPrint,
	sabio,
	aws,
	// Icons
	jobit,
	tripguide,
	threejs,
	// People
	valentinaCaprini,
	jonPrice,
	jakeKim,
	// Projects,
	floemaLanding,
	graphQL,
	workingWithDog,
	// Socials
	github,
	linkedIn,
	// Certifications
	hackerrankNode,
	problemSolvingInt,
	problemSolvingBasic,
	python,
	sqlInt,
	sqlBasic,
	reactBasic,
	cssCert,
	jsBasic,
	jsInt,
	softwareCareerEssentials,
	// Courses
	dotNetDI,
	advSQLQueryProcessingP1,
	cSharpDelegatesEventsLambdas,
	gitFromScratch,
	introToCareerSkillsSWE,
	jsAsync,
	learningKubernetes,
	jsUnderTheHood,
	programmingFoundations,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
	{
		id: 'socials',
		title: 'Socials',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Data Architect',
		icon: creator,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Teacher',
		icon: mobile,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'Docker',
		icon: docker,
	},
	{
		name: 'AWS',
		icon: aws,
	},
	{
		name: 'GraphQL',
		icon: graphQL,
	},
];

const experiences = [
	{
		title: 'Web Developer / Software Engineer',
		company_name: 'Freelance',
		icon: freelance,
		iconBg: '#383E56',
		date: 'Dec 2019 - Sep 2021',
		points: [
			'Successfully completed a wide range of projects for diverse clients, including e-commerce websites, portfolio sites, and corporate web applications.',
			'Collaborating closely with clients, I provided custom solutions, addressed technical challenges, and delivered projects on time and within budget, resulting in consistently high client satisfaction ratings.',
			'With a strong focus on problem-solving, I implemented effective SEO strategies, optimized website performance, and integrated third-party APIs, resulting in improved search rankings and enhanced user experiences.',
		],
	},
	{
		title: 'Full Stack Software Engineer',
		company_name: 'World Print',
		icon: worldPrint,
		iconBg: '#383E56',
		date: 'Sep 2021 - Feb 2022',
		points: [
			'Crafted a seamlessly integrated system empowering end-users to effortlessly unleash their creativity with their very own shirt designs and create and save their unique work.',
			'Elevated UX to new heights, data retrieval and management from the Pixabay API seamlessly empowered end-users with the ability to effortlessly add and personalize unique clipart, forging an unforgettable interactive journey.',
			'Ensured design was responsive and cross-browser compatible.',
			'Implemented sorting, ﬁltering, routing, and mapping of components enabling users to: Add and edit clipart from a third-party API or create meaningful text to add to their shirt designs.',
		],
	},
	{
		title: 'Full Stack Software Engineer / Instructor',
		company_name: 'Sabio School of Software Engineering',
		icon: sabio,
		iconBg: '#E6DEDD',
		date: 'Jan 2022 - Present',
		points: [
			"Designed and implemented a seamless automated system to test students’ ability to create and manage RESTful APIs in .NET for Sabio's core .NET curriculum.",
			"Designed and implemented an optimized automated SQL testing software for Sabio's core SQL curriculum.",
			"Contributed to the design and implementation of an automated React testing software for Sabio's core React curriculum.",
			'Debugged, created and re-factored a wide-range of features part of Sabio’s LISA software that serve both Admin and Student users.',
			`Served as an instructor to help teach and guide students' for the sole goal to empower and guide aspiring students towards a successful career in software engineering. I provide comprehensive instruction and mentoring to help build a strong foundation in programming concepts, problem-solving skills, and industry best practices.`,
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Victor proved me wrong.',
		name: 'Valentina Caprini',
		designation: 'Founder',
		company: 'Floema',
		image: valentinaCaprini,
	},
	{
		testimonial:
			'Victor is enthusiastic, upbeat, and fun to be around. There is no problem he can’t solve or obstacle he can’t overcome! He is an expert at building user friendly features in React.js and developing elegant algorithms to solve complex, recursive problem sets. I would actively pursue an opportunity to work with him again',
		name: 'Jon Price',
		designation: 'Full Stack Software Engineer',
		company: 'Accenture',
		image: jonPrice,
	},
	{
		testimonial:
			'I had the pleasure of working with Victor for the past year. He is very passionate about his work and always strives to deliver the best possible product. He is also a great communicator and always willing to help others. Victor is a great asset to any team and I would love to work with him again in the future.',
		name: 'Jake Kim',
		designation: 'Full Stack Software Engineer / Instructor',
		company: 'Sabio',
		image: jakeKim,
	},
];

const projects = [
	{
		name: 'Floema',
		description:
			'Harnessing the power of vanilla JS, WebGL, and SCSS, we crafted a visually stunning interface that pushes the boundaries of web design. With seamless integration of Prismic for content management and Express for a smooth backend, our website delivers a dynamic and engaging experience that will leave you inspired and wanting more.',
		tags: [
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'WebGL',
				color: 'green-text-gradient',
			},
			{
				name: 'SCSS',
				color: 'pink-text-gradient',
			},
			{
				name: 'Pug',
				color: 'violet-text-gradient',
			},
			{
				name: 'Prismic',
				color: 'aqua-text-gradient',
			},
			{
				name: 'Express',
				color: 'orange-text-gradient',
			},
		],
		image: floemaLanding,
		source_code_link: 'https://www.floemajewelry.com/',
	},
	// {
	// 	name: 'Full-stack Quote Generator',
	// 	description:
	// 		'A full stack quote generator app powered by Next.js and TypeScript. Harnessing the scalability and security of AWS Amplify, Lambda, Cognito, and IAM, a seamless UX is delivered. With a robust CI/CD pipeline leveraging AWS and GitHub integration, I can ensure continuous deployment.',
	// 	tags: [
	// 		{
	// 			name: 'Next.JS',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'TypeScript',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'AWS: Amplyify | Lambda | Cognito | IAM',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'ZenQuotes API',
	// 			color: 'violet-text-gradient',
	// 		},
	// 		{
	// 			name: 'GraphQL',
	// 			color: 'aqua-text-gradient',
	// 		},
	// 		{
	// 			name: 'Node',
	// 			color: 'orange-text-gradient',
	// 		},
	// 		{
	// 			name: 'CI/CD',
	// 			color: 'maroon-text-gradient',
	// 		},
	// 	],
	// 	image: jobit,
	// 	source_code_link: 'https://github.com/',
	// },
	{
		name: 'Quiz App (work in progress)',
		description:
			'Powered by Redux, this Quiz App seamlessly handles complex state management, ensuring a flawless UX. By leveraging efficient HTTP request handling, ChatGPT API integration, O-Auth, Firebase Auth, a super responsive design, and the flexibility of Sass, this website delivers an immersive and dynamic platform.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Sass',
				color: 'pink-text-gradient',
			},
			{
				name: 'ADO.NET',
				color: 'aqua-text-gradient',
			},
			{
				name: 'SSMS',
				color: 'orange-text-gradient',
			},
			{
				name: 'Redux',
				color: 'violet-text-gradient',
			},
			{
				name: 'OpenAI ChatGPT API',
				color: 'maroon-text-gradient',
			},
		],
		image: workingWithDog,
		source_code_link: '',
	},
];

const socials = [
	{
		name: 'GitHub',
		icon: github,
		link: 'https://github.com/flipsflops',
	},
	{
		name: 'LinkedIn',
		icon: linkedIn,
		link: 'https://www.linkedin.com/in/victor-ibasco/',
	},
];

const certifications = [
	{
		name: 'Node',
		image: hackerrankNode,
		link: 'https://www.hackerrank.com/certificates/e1d170b93279',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'Problem Solving (Intermediate)',
		image: problemSolvingInt,
		link: 'https://www.hackerrank.com/certificates/f25bc94f4512',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'Problem Solving (Basic)',
		image: problemSolvingBasic,
		link: 'https://www.hackerrank.com/certificates/0be24be922e3',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'Python ',
		image: python,
		link: 'https://www.hackerrank.com/certificates/640255b2b010',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'SQL (Intermediate)',
		image: sqlInt,
		link: 'https://www.hackerrank.com/certificates/8b2ce4b3e930',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'SQL (Basic)',
		image: sqlBasic,
		link: 'https://www.hackerrank.com/certificates/d5d4db08cbf2',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'React (Basic)',
		image: reactBasic,
		link: 'https://www.hackerrank.com/certificates/c403bed75964',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'CSS',
		image: cssCert,
		link: 'https://www.hackerrank.com/certificates/b5e8258f48a9',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'JavaScript (Basic)',
		image: jsBasic,
		link: 'https://www.hackerrank.com/certificates/6cc75a8c46dd',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'JavaScript (Intermediate)',
		image: jsInt,
		link: 'https://www.hackerrank.com/certificates/4f20269e8fb1',
		issuer: 'HackerRank',
		type: 'Certification',
	},
	{
		name: 'Career Essentials in Software Development by Microsoft and LinkedIn',
		image: softwareCareerEssentials,
		link: 'https://www.linkedin.com/learning/certificates/d65026391e38205b55a57671a2e37e99c2f61abba3efaa51c29015f825a543ca',
		issuer: 'Microsoft & LinkedIn',
		type: 'Certification',
	},
];

const courses = [
	{
		name: 'ASP.NET Core in .NET 6: Dependency Injection',
		image: dotNetDI,
		link: 'https://www.linkedin.com/learning/certificates/621eb8bfd905fafe206b9b18f9f214fed4ac6520c58b6bc37408ed8a996c6958',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'Advanced SQL: Logical Query Processing, Part 1',
		image: advSQLQueryProcessingP1,
		link: 'https://www.linkedin.com/learning/certificates/ce444dcc3d458435de3cc729356add7bf62211858e4a6c46ed6d480de8dc236c',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'C#: Delegates, Events, and Lambdas',
		image: cSharpDelegatesEventsLambdas,
		link: 'https://www.linkedin.com/learning/certificates/17728cf03500eef91fe0cb6cfd6fa6688f132afd79e4d4472aaa744d899353d9',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'Git from Scratch',
		image: gitFromScratch,
		link: 'https://www.linkedin.com/learning/certificates/85cfbf7366b226904674c0d3241cec8293b4ba3890b5bc4d293cdba5cea68723',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'Introduction to Career Skills in Software Development',
		image: introToCareerSkillsSWE,
		link: 'https://www.linkedin.com/learning/certificates/083fad9a6553008a8c962a2473233e167e534fe69ced14812867d5ef183ee0ae',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'JavaScript on the Go: Async',
		image: jsAsync,
		link: 'https://www.linkedin.com/learning/certificates/3c8b4193cf6baec4065b0d9ef5f5dd41d4eedc12bcfb19d866b0b6b533871081',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'Learning Kubernetes',
		image: learningKubernetes,
		link: 'https://www.linkedin.com/learning/certificates/2817b7cec58957d969d4dcc75c0aada2fe614ab6786a0369398f0a6b5dc05141',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: 'JavaScript: Under the Hood',
		image: jsUnderTheHood,
		link: 'https://www.linkedin.com/learning/certificates/3c8b4193cf6baec4065b0d9ef5f5dd41d4eedc12bcfb19d866b0b6b533871081',
		issuer: 'LinkedIn',
		type: 'Course',
	},
	{
		name: '	Programming Foundations: Fundamentals',
		image: programmingFoundations,
		link: 'https://www.linkedin.com/learning/certificates/29099a9d6d512b67bce2465fa9f594e32be7a7f8c39034e30d2d3531b5aa19d8',
		issuer: 'LinkedIn',
		type: 'Course',
	},
];

export {
	services,
	socials,
	technologies,
	experiences,
	testimonials,
	projects,
	certifications,
	courses,
};
