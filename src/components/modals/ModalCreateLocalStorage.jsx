import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useLocalStorage from '../custom-hooks/createlocalStorage'
import '../../assets/styles/modals/ModalCreateLocalStorage.scss'
import Message from '../Message';
import AllMessage from '../../constants/Message.json'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#323232',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:'white'
  };

const ModalCreateLocalStorage = ()  => {
  const [open, setOpen] = useState(false);
  const [name,setName] = useState(false);
  const [value,setValue] = useLocalStorage("value");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isError,setIsError] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)    
 
  function handleSubmit(e) {
    e.preventDefault();
    setValue(name)
    setIsSuccess(true)
  }

  return (
    <div>
      <Button className="buttonCreate" onClick={handleOpen}>create new list</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalCreateList"
      >
        <form onSubmit={handleSubmit}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create new list
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="row">
                         List name&nbsp;
                        <input type="text" id="textList" onChange={(e) => setName(e.target.value)} />
                    </div>
                </Typography>
                <div className="col text-center mt-3 mb-3">
                    <Button type="submit" className="buttonCreate mr-3 ml-3 p-2">create new list</Button>
                </div>
                <Message isError={isError} isSuccess={isSuccess} successMessage={AllMessage.messageSuccessList} errorMessage={AllMessage.messageErrorList}/>
            </Box>
        </form>
      </Modal>
    </div>
  );
}

export default ModalCreateLocalStorage;
