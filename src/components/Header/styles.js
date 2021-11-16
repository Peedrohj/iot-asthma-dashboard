import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // backgroundColor: "#8ad144",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    flexGrow: 1,
  },
  iconMenu: {
    color: "#C1C1C1",
    width: "35px",
    height: "35px",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "36px",
  },
  subtitle: {
    flexGrow: 1,
    fontSize: "24px",
  },
}));

export default useStyles;
