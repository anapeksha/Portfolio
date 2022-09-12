import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const BasicGrid: React.FC = (props: any) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{props.data.map((d: any, i: number) => {
					return (
						<Grid item xs={6}>
							{d}
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default BasicGrid;
