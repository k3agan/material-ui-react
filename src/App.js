import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './components/SimpleCard'



const useStyles  = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    background: 'linear-gradient(45def,#333, #999)',
    color: 'secondary'
    
  }
})

const CheckboxExample = () => {
  const [checked,setChecked ] = useState(true)
  return(
    <FormControlLabel 
    control = {<Checkbox
      checked = {checked}
      icon = {<DeleteIcon color = 'secondary' />}
      checkedIcon = {<SaveIcon color = 'primary'/>}
      onChange = {(e)=>setChecked (e.target.checked)}
      inputProps = {{
        'aria-label': 'secondary checkbox'
      }}
    />}
    label = 'testing'
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
        variant = 'filled'
        color = 'secondary'
        type = 'email'
        label = 'The time'
        placeholder = "test@test.ca"
        />

        <CheckboxExample/>
        <ButtonGroup 
        color = "primary"
        variant = "contained"
        size = 'large' >
        <Button 
        startIcon = {<SaveIcon/>}
        >
          Save
        </Button>
        <Button 
        startIcon = {<DeleteIcon/>}
        color = "secondary">
          Discard
        </Button>
        </ButtonGroup>

        <SimpleCard/> 

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
