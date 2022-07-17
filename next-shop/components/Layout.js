import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "../utils/styles";
import { CssBaseline, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Layout({ children, title, description }) {
	const classes = useStyles();
	const theme = createTheme({
		typography: {
			h1: {
				fontSize: "1.6rem",
				fontWeight: 400,
				margin: "1rem 0",
			},
			h2: {
				fontSize: "1.4rem",
				fontWeight: 400,
				margin: "1rem 0",
			},
		},
		palette: {
			type: "light", // darkMode ? "dark" : "light"
			primary: {
				main: "#f0c000",
			},
			secondary: {
				main: "#208080",
			},
		},
	});

	return (
		<div>
			<Head>
				<title>
					{title
						? `${title} - Next Shop`
						: `Next Shop - eCommerce website using NEXT JS`}
				</title>
				{description && <meta name="description" content={description} />}
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
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
							<a
								href="https://sohan.pro"
								target="_blank"
								style={{ color: "red" }}
							>
								Sohan
							</a>
						</Typography>
					</footer>
				</Container>
			</ThemeProvider>
		</div>
	);
}
