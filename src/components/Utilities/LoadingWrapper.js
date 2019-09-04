import React from "react";
import { ClipLoader } from "react-spinners";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";

const LoadingWrapper = props => {
  const { classes } = props;

  const { isLoading } = props;
  if (!isLoading) return <div> {props.children} </div>;
  else
    return (
      <div className={classes.paper}>
        <ClipLoader
          sizeUnit={"px"}
          size={120}
          color={props.theme.palette.secondary.main}
          loading={true}
        />
      </div>
    );
};

export default withStyles(styles, {withTheme: true})(LoadingWrapper);
