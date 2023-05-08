import BasicGrid from "../components/BasicGrid";

const gridProps = [
	{
		title: "Cineflick",
		description: "A full stack movie searching app",
		githubUrl: "https://github.com/anapeksha/cineflick",
		url: "https://cineflick-anapeksha.netlify.app",
		techs: ["Mui", "Next.js", "SSR", "Emotion"],
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
	}
];

const Work: React.FC = () => {
	return (
		<div id="work">
			<BasicGrid data={gridProps} />
		</div>
	);
};

export default Work;
