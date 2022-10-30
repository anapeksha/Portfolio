import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ISpeedDialProps from "../interfaces/ISpeedDialProps";
import CustomSpeedDial from "../styles/CustomSpeedDial.style";

const BasicSpeedDial: React.FC<ISpeedDialProps> = (props) => {
	return (
		<CustomSpeedDial
			ariaLabel="SpeedDial Menu"
			icon={<MenuRoundedIcon />}
			direction="right"
		>
			{props.actions.map((action, i) => (
				<SpeedDialAction
					sx={{
						backgroundColor: "#686868",
					}}
					key={i}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={() => (window.location.href = action.url)}
				/>
			))}
		</CustomSpeedDial>
	);
};

export default BasicSpeedDial;
