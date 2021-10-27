import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Select,MenuItem } from '@mui/material';
import '../../assets/styles/modals/ModalAddCharacterList.scss'
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

const ModalAddCharacterList = (props)  => {
const [open, setOpen] = useState(false);
const [value,setValue] = useState("Seleccionar")
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const items = props.localItems
const [isError,setIsError] = useState(false)
const [isSuccess,setIsSuccess] = useState(false)

function handleSubmit(e) {
    e.preventDefault();
    if(value !== "Seleccionar"){
        let local = JSON.parse(localStorage.getItem(value))
        local.push(props.infoCharacter)
        localStorage.setItem(value,JSON.stringify(local))
        setIsSuccess(true)
        setIsError(false)
    }else{
        setIsError(true)
        setIsSuccess(false)
    }
}

function onChange(e){
    e.preventDefault();
    setValue(e.target.value)
}

return (
    <div>
      <Button className="buttonCreate" onClick={handleOpen}>Add to list</Button>
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
                Add character to list
              </Typography>
              <div className="row p-3">
                  {items.length ? <Select className="SelectLists" labelId="demo-simple-select-label" id="demo-simple-select" onChange={onChange} value={value} style={{background:"white"}}>
                      <MenuItem value="Seleccionar" selected>Select</MenuItem>
                      {
                          items.map((e,i)=>{
                              return(
                                  <MenuItem key={i} value={e.name} selected>{e.name}</MenuItem>
                              )
                          })
                      }
                  </Select> 
                  : 
                   "You must create a list first."
                  }
                    <div className="">
                        <Button type="submit" className="buttonCreate mr-3 ml-3 p-2">Add to list</Button>
                    </div>
              </div>
              <Message isError={isError} isSuccess={isSuccess} successMessage={AllMessage.messageSuccessCharacter} errorMessage={AllMessage.messageErrorCharacter} />
            </Box>
        </form>
      </Modal>
    </div>
  );
}

export default ModalAddCharacterList;