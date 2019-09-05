import React, { useRef } from 'react'
import AvatarEditor from "react-avatar-editor";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from '@material-ui/core';
import { styles } from "../../../services/styleProvider"

const MyAvatarEditor = (props) => {


  const { classes } = props;


  let editor = useRef();
  const [image,setImage] = React.useState();
  const [editorToggle,setEditorToggle] = React.useState(false);

  const onClickSave = () => {
    if (editor) {
      const canvas = editor.getImage()
      console.log(canvas);
    }
  }
const handleFileInput = (e) => {
  setImage(e.target.files[0])
}

  return (
    <>
       <input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileInput}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="secondary" component="span" className={classes.button}>
          Upload
        </Button>
      </label> 
      {image==null?"":
      <><AvatarEditor
          ref={editor}
          image={image}
          width={250}
          height={250}
          border={50}
          borderRadius={1000}
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Save Image
        </Button></>
      }
      </>
  )
}

export default withStyles(styles)(MyAvatarEditor);
