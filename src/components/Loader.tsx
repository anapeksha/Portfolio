import ReactLoading from "react-loading";
import ILoaderProps from "../interfaces/ILoaderProps";
import CenteredBox from "../styles/CenteredBox.style";

const Loader: React.FC<ILoaderProps> = (props) => {
	return (
		<CenteredBox>
			<ReactLoading
				type={props.type}
				color={props.color}
				height={props.height}
				width={props.width}
			/>
		</CenteredBox>
	);
};

export default Loader;
