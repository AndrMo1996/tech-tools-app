import { Button, TextField } from "@mui/material";
import "./estimator.css"
import { TrujayAPI } from '../../api/trujay/TrujayAPI'

const EstimatorPage = () => {

    const handleClick = () => {
        TrujayAPI.get('/list').then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    return <div>
        <div className="control-menu">
            <TextField 
                id="standard-basic" 
                label="Enter API key" 
                variant="standard"
                required
                style = {{width: 400}}
            />
            <Button variant="contained" onClick={handleClick}>Start</Button>
        </div>
        
        <div className="result-display">
        <p>Loading...</p>
        <TextField className="logs"
            multiline
        />
        </div>
    </div>;
};

export default EstimatorPage;