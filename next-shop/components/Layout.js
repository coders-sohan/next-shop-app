import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "../utils/styles";
import { Link } from "@mui/material";

export default function Layout({ children }) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Next Shop - eCommerce website using NEXT JS</title>
			</Head>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<NextLink href="/" passHref>
						<Link style={{ textDecoration: "none" }}>
							<Typography className={classes.brand}>Next-Shop</Typography>
						</Link>
					</NextLink>
					<div className={classes.grow}></div>
					<div>
						<NextLink href="/cart" passHref>
							<Link style={{ textDecoration: "none" }}>Cart</Link>
						</NextLink>
						<NextLink href="/login" passHref>
							<Link style={{ textDecoration: "none" }}>Login</Link>
						</NextLink>
					</div>
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
