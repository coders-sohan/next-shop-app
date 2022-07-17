import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	navbar: {
		backgroundColor: "#203040",
		"& a": {
			color: "#ffffff",
			marginLeft: 10,
		},
	},
	brand: {
		fontWeight: "Bold",
		fontSize: "1.5rem",
	},
	grow: {
		flexGrow: 1,
	},
	main: {
		minHeight: "80vh",
	},
	footer: {
		textAlign: "center",
	},
	section: {
		margin: "10px 0",
	},
});

export default useStyles;
