import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  link: {
    textDecoration: "none",
    color: "black",
  },
  container: {
    minWidth: "250px",

    height: "100%",
    paddingTop: "70px",
    position: "relative",
  },
  marsSideBar: {
    position: "absolute",
    bottom: "0",
  },
  childImage: {
    borderRadius: "50%",
    width: "70px",
  },
}));

export default useStyles;
