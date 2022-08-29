import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Context } from "../shared/config/context";
import { createNotification } from "../shared/config/toast";
import "../assets/styles/publishSettings.scss";

const PublishSettings = (props: any) => {
  const { isFreshEntry } = props;
  const context = useContext(Context);
  const history = useHistory();

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePublishDraft = () => {
    context.currentEula["status"] = "Active";
    createNotification("success", "Draft has been published successfully");
    history.push("/");
  };

  const handleDeleteDraft = () => {
    setOpen(true);
  };

  const confirmDelete = () => {
    if (context.savedEula.length > 0) {
      let remainingEula: any = context.savedEula.filter(
        (eula: any) => eula.id !== context.currentEula.id
      );
      context.setSavedEula([...remainingEula]);
      createNotification("success", "Draft has been deleted successfully");
    } else {
      context.setSavedEula([]);
      createNotification("success", "Draft has been deleted successfully");
    }
    handleClose();
    history.push("/");
  };

  return (
    <>
      <Box mx={2} display="flex" flexDirection="column" width="40%">
        <Box my={1}>
          <Typography variant="h4" className="boldFontWeight">
            Publish Settings
          </Typography>
        </Box>
        <Box my={1}>
          <Box
            my={1}
            display="flex"
            width="100%"
            justifyContent="space-between"
            className="publishButton"
          >
            <Typography
              variant="h4"
              className="publishDraftText"
              onClick={() => handlePublishDraft()}
            >
              Publish Draft
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box my={1}>
          <Box
            my={1}
            display="flex"
            width="100%"
            justifyContent="space-between"
          >
            <Button
              disabled={
                Object.keys(context.currentEula).length === 0 || isFreshEntry
              }
              onClick={() => handleDeleteDraft()}
              className="deleteDraftButton"
            >
              Delete Draft
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box my={2}>
          <Box>
            <Typography variant="h4" className="boldFontWeight">
              Draft Details
            </Typography>
          </Box>
          <Box
            my={2}
            display="flex"
            width="100%"
            justifyContent="space-between"
          >
            <Typography variant="h5">Last Modified</Typography>
            <Typography variant="h5">{`${new Date().toLocaleDateString()}`}</Typography>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Delete Draft?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`You are about to delete your draft. Your data saved with this EULA will be lost.
            Please choose your action wisely.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ background: "#636e72", color: "white" }}
          >
            Disagree
          </Button>
          <Button
            onClick={() => confirmDelete()}
            variant="contained"
            style={{ background: "#0984e3", color: "white" }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PublishSettings;
