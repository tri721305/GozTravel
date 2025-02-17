import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
// import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  // const day = new Date();
  const [postData, setPostData] = useState({
    // creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const history = useHistory();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      // creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      // history.push(`/posts/${}`)
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In create your Trip PLanner
        </Typography>
      </Paper>
    );
  }

  // console.log(day);

  return (
    // <Paper className={classes.paper}>
    //   <form
    //     autoComplete="off"
    //     noValidate
    //     className={`${classes.root} ${classes.form}`}
    //     onSubmit={handleSubmit}
    //   >
    //     <Typography variant="h6">
    //       {currentId ? `Editing "${post.title}"` : "Create your Trip Planner"}
    //     </Typography>
    //     {/* <TextField
    //       name="creator"
    //       variant="outlined"
    //       label="Creator"
    //       fullWidth
    //       value={postData.creator}
    //       onChange={(e) =>
    //         setPostData({ ...postData, creator: e.target.value })
    //       }
    //     /> */}
    //     <TextField
    //       name="title"
    //       variant="outlined"
    //       label="Title"
    //       fullWidth
    //       value={postData.title}
    //       onChange={(e) => setPostData({ ...postData, title: e.target.value })}
    //     />

    //     {/* Date Beginning */}
    //     <TextField
    //       name="startdate"
    //       variant="outlined"
    //       label="StartDate"
    //       fullWidth
    //       // value={postData.}
    //       format="MM/dd/yyyy"
    //       type="date"
    //       defaultValue="2017-05-24"
    //       // placeholder="StartDate"
    //       // onChange={(e) => setPostData({ ...postData, title: e.target.value })}
    //     />

    //     <TextField
    //       name="message"
    //       variant="outlined"
    //       // label="Message"
    //       label="Noi Dung"
    //       fullWidth
    //       multiline
    //       rows={4}
    //       value={postData.message}
    //       onChange={(e) =>
    //         setPostData({ ...postData, message: e.target.value })
    //       }
    //     />
    //     <TextField
    //       name="tags"
    //       variant="outlined"
    //       label="Tags (coma separated)"
    //       fullWidth
    //       value={postData.tags}
    //       onChange={(e) =>
    //         setPostData({ ...postData, tags: e.target.value.split(",") })
    //       }
    //     />
    //     <div className={classes.fileInput}>
    //       <FileBase
    //         type="file"
    //         multiple={false}
    //         onDone={({ base64 }) =>
    //           setPostData({ ...postData, selectedFile: base64 })
    //         }
    //       />
    //     </div>
    //     <Button
    //       className={classes.buttonSubmit}
    //       variant="contained"
    //       color="primary"
    //       size="large"
    //       type="submit"
    //       fullWidth
    //     >
    //       Submit
    //     </Button>
    //     <Button
    //       variant="contained"
    //       color="secondary"
    //       size="small"
    //       onClick={clear}
    //       fullWidth
    //     >
    //       Clear
    //     </Button>
    //   </form>
    // </Paper>
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
