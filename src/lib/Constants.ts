import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const homeTheme = createTheme({
  palette: {
    primary: { main: "#4b5486" },
    secondary: { main: "#c9cddf" },
    mode: "light",
  },
});

const aboutTheme = createTheme({
  palette: {
    primary: { main: "#9de6b1" },
    secondary: { main: "#e1f8e8" },
    mode: "light",
  },
});

const projectTheme = createTheme({
  palette: {
    primary: { main: "#ff00fe" },
    secondary: { main: "#bf00fe" },
    mode: "light",
  },
});

const connectTheme = createTheme({
  palette: {
    primary: { main: "#BD1E51" },
    secondary: { main: "#490B3D" },
    mode: "light",
  },
});

const homeTypewriterText = [
  "I",
  "build code.</>",
  "I",
  "create solutions.",
  "I",
  "shape innovation.",
];

const skills = [
  "Reactjs",
  "React Native",
  "Redux",
  "Nextjs",
  "Emotion",
  "SharePoint Online",
  "SPFx",
  "Power Automate",
];

const skillsHeading = "Technologies I work with";

const homeCardContent = [
  {
    heading: "Proven Track Record",
    body: "I have a track record of delivering high-quality software solutions for a wide range of clients and projects.",
  },
  {
    heading: "Technical Expertise",
    body: "With proficiency in various programming languages, frameworks, and tools, I can tackle diverse software development challenges.",
  },
  {
    heading: "Continuous Learning",
    body: "The tech world evolves rapidly, and I stay up-to-date with the latest trends and technologies to offer the best solutions.",
  },
  {
    heading: "Passion-Driven",
    body: "My passion for software development means I'm committed to delivering top-notch results and exceeding your expectations.",
  },
  {
    heading: "Adaptable",
    body: "Your project requirements may change, and I can adapt to suit your evolving needs. Flexibility is a strength.",
  },
  {
    heading: "Attention to Detail",
    body: "I pay close attention to every detail, ensuring that your software is reliable and functions smoothly.",
  },
  {
    heading: "Process Automation",
    body: "Time is money. I can automate complex processes which can save resources from manual labour.",
  },
];

const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "about" },
  { name: "Projects", url: "project" },
];

const connectHeader = "It starts with a conversation.";

const connectFormData = [
  {
    type: "text",
    label: "Name",
    name: "name",
    required: true,
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    required: true,
  },
  {
    type: "number",
    label: "Phone",
    name: "ph_no",
    required: false,
  },
  {
    type: "text",
    label: "Date and Time",
    name: "date_time",
    required: false,
  },
  {
    type: "text",
    label: "Message",
    name: "message",
    required: true,
  },
];

const footerContactData = [
  { url: "https://www.linkedin.com/in/anapeksha-mukherjee", icon: LinkedIn },
  { url: "https://www.github.com/anapeksha", icon: GitHub },
  { url: "mailto:anapeksha.mukherjee.work@gmail.com", icon: Mail },
];

interface ICarouselStep {
  label: string;
  description: string;
  tech: Array<string>;
  previewUrl: string;
  githubUrl: string;
}

const carouselSteps = [
  {
    label: "Cineflick",
    description:
      "A movie buff? This app will help you search movies and provide links to available torrent files.",
    tech: ["Nextjs", "MUI", "TMDb api", "YTS api", "SSR", "jwt auth"],
    previewUrl: "https://cineflick-anapeksha.netlify.app/",
    githubUrl: "https://github.com/anapeksha/Cineflick",
  },
  {
    label: "Pages",
    description:
      "A single page application with localstorage capabilities to save and persist notes on your device.",
    tech: ["Reactjs", "MUI", "Redux", "Redux Persist"],
    previewUrl: "https://anapeksha.github.io/Pages/",
    githubUrl: "https://github.com/anapeksha/Pages",
  },
  {
    label: "Python Proxy Server",
    description:
      "A simple forward proxy server built for enabling network hops.",
    tech: ["Python", "Socket.io"],
    previewUrl: "",
    githubUrl: "https://github.com/anapeksha/python-proxy-server",
  },
];

const emailJSConfig = {
  contact: {
    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID_NEWSLETTER,
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  },
};

const drawerWidth = 240;

export {
  aboutTheme,
  carouselSteps,
  connectFormData,
  connectHeader,
  connectTheme,
  drawerWidth,
  emailJSConfig,
  footerContactData,
  homeCardContent,
  homeTheme,
  homeTypewriterText,
  navItems,
  projectTheme,
  skills,
  skillsHeading,
  type ICarouselStep,
};
