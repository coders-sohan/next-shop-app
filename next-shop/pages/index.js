import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import data from "../utils/data";
import {
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from "@mui/material";

export default function Home() {
	return (
		<>
			<Layout>
				<div>
					<h1>Products</h1>
					<Grid container spacing={3}>
						{data.products.map((product) => (
							<Grid item md={4} key={product.name}>
								<Card>
									<CardActionArea>
										<CardMedia
											component="img"
											image={product.image}
											title={product.name}
										/>
										<CardContent>
											<Typography variant="h6" color="initial">
												{product.name}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Typography variant="p" color="initial">
											${product.price}
										</Typography>
										<Button size="small" color="primary">
											Add to Cart
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</Layout>
		</>
	);
}
