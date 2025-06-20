import { Modal, Box, Typography} from "@mui/material";

function VideoModal({ open, handleClose, video }) { 
    return ( <Modal open={open} onClose={handleClose}> 
    <Box className="modal-box"> 
        <Typography variant="h6">{video?.title}</Typography> 
        <Typography>{video?.description}</Typography> 
    </Box> 
    </Modal> ); }

export default VideoModal;