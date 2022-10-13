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
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				{props.data.map((d, i) => {
					return (
						<Grid item xs={6} sm={4} md={3} key={i}>
							<Cards
								title={d.title}
								description={d.description}
								githubUrl={d.githubUrl}
								url={d.url}
								techs={d.techs}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default BasicGrid;
