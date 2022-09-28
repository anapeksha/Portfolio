import { PDFObject } from "react-pdfobject";
import IPdfRendererProps from "../interfaces/IPdfRendererProps";
const pdf = require("../assets/resume/resume.pdf");

const PdfRenderer: React.FC<IPdfRendererProps> = (props) => {
	return <PDFObject url={pdf} width={props.width} height={props.height} />;
};

export default PdfRenderer;
