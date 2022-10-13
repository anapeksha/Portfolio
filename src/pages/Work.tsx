import BasicGrid from "../components/BasicGrid";

const gridProps = [
	{
		title: "Finderbar",
		description: "A movie searching app",
		githubUrl: "https://github.com/anapeksha/finderbar",
		url: "https://anapeksha.github.io/Finderbar",
		techs: ["Mui", "React", "Animate.css", "Emotion", "PWA"],
	},
	{
		title: "Image Compressor",
		description: "Online image compressor tool",
		githubUrl: "https://github.com/anapeksha/image-compressor",
		url: "https://anapeksha.github.io/image-compressor",
		techs: ["Mui", "React", "Browser-Image-Compressor", "PWA"],
	},
	{
		title: "Python Proxy Server",
		description: "A forward proxy server",
		githubUrl: "https://github.com/anapeksha/python-proxy-server",
		url: "",
		techs: ["Python", "Socket", "Proxy"],
	},
	{
		title: "Foodzpah",
		description: "A food ordering app",
		githubUrl: "https://github.com/anapeksha/foodzpah-frontend",
		url: "https://anapeksha.github.io/foodzpah-frontend",
		techs: ["Mui", "React", "Redux", "Express", "Mongoose", "Node.js"],
	},
	{
		title: "Pages",
		description: "A simple notes taking app",
		githubUrl: "https://github.com/anapeksha/pages",
		url: "https://anapeksha.github.io/Pages",
		techs: [
			"Mui",
			"React",
			"Redux",
			"Redux-Persist",
			"Emotion",
			"Animate.css",
			"PWA",
		],
	},
	{
		title: "Password Generator",
		description: "Generate random passwords",
		githubUrl: "https://github.com/anapeksha/password-generator-frontend",
		url: "https://anapeksha.github.io/password-generator-frontend",
		techs: ["Mui", "React", "Express", "Crypto"],
	},
];

const Work: React.FC = () => {
	return (
		<div id="work">
			<BasicGrid data={gridProps} />
		</div>
	);
};

export default Work;
