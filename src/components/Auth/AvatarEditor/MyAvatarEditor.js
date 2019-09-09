import React, { useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { useModal } from "../../../states/ModalState";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Paper,
  Container,
  Grid,
  Slider,
  Tooltip
} from "@material-ui/core";
import { styles } from "../../../services/styleProvider";
import { flexbox } from "@material-ui/system";

const MyAvatarEditor = props => {
  const { classes } = props;
  const  modal  = useModal();

  let editor = useRef();
  const [image, setImage] = React.useState();
  const [scale, setScale] = React.useState(1);
  const [imageBlob, setImageBlob] = props.imageBlobState;

  const onClickSave = async () => {
    if (editor) {
      const canvas = editor.current.getImage().toDataURL();
      const blob =  await fetch(canvas).then(res => res.blob());
      setImageBlob(blob);
      modal.close("avatarEditor");
    }
  };
  const handleFileInput = e => {
    setImage(e.target.files[0]);
  };

  return (
    <Container className={classes.main}>
      <Paper className={classes.paper}>
        <input
          accept="image/*"
          className={classes.input}
          id="raised-button-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
        <AvatarEditor
          ref={editor}
          image={image}
          width={200}
          height={200}
          border={25}
          scale={scale}
          borderRadius={1000}
        />
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          direction="row"
        >
          <i class="far fa-image"></i>
          <Slider
            min={0.8}
            max={1.8}
            step={0.005}
            onChange={(e, value) =>setScale(value)}
            value={scale}
            style={{ width: "80%" }}
          />
          <i class="far fa-image fa-2x"></i>
        </Grid>
        <Grid container justify="space-between">
          <label htmlFor="raised-button-file">
            <Button
              variant={image == null ? "contained" : "outlined"}
              color="secondary"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
          {image == null ? (
            ""
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onClickSave}
            >
              Ok
            </Button>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default withStyles(styles)(MyAvatarEditor);
