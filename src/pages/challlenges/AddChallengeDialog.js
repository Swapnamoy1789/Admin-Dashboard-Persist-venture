import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addChallenge } from "../../redux/challengesSlice";

const AddChallengeDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [challenge, setChallenge] = useState({
    title: "",
    funding: "",
    deadline: "",
    description: "",
  });

  const handleChange = (e) =>
    setChallenge({ ...challenge, [e.target.name]: e.target.value });

  const handleAdd = () => {
    dispatch(addChallenge({ ...challenge, id: Date.now() }));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add Challenge</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          label="Funding"
          name="funding"
          fullWidth
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          label="Deadline"
          name="deadline"
          type="date"
          fullWidth
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          margin="dense"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChallengeDialog;
