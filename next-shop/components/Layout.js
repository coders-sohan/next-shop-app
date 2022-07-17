import Head from "next/head";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "../utils/styles";

export default function Layout({ children }) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Next Shop - eCommerce website using NEXT JS</title>
			</Head>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<Typography variant="h6">Next-Shop</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<Container className={classes.footer}>
				<footer>
					<Typography variant="p" color="initial">
						&copy; {Date().slice(11, 15)} All right reserved by{" "}
						<a href="https://sohan.pro" style={{ color: "red" }}>
							Sohan
						</a>
					</Typography>
				</footer>
			</Container>
		</div>
	);
}
