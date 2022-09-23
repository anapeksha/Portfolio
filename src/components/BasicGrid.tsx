import { Box, Grid } from "@mui/material";
import IGridProps from "../interfaces/IGridProps";
import Cards from "./Cards";

const BasicGrid: React.FC<IGridProps> = (props) => {
	return (
		<Box
			style={{
				display: "flex",
				margin: "1.5vw",
				flexGrow: 1,
			}}
		>
			<Grid container spacing={2}>
				{props.data.map((d, i) => {
					return (
						<Grid item xs={6} sm={4} md={3}>
							<Cards
								title={d.title}
								description={d.description}
								githubUrl={d.githubUrl}
								techs={d.techs}
								key={i}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default BasicGrid;
