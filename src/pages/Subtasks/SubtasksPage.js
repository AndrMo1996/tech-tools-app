import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, TextField } from "@mui/material";
import { Oval } from "react-loader-spinner";

import { NOT_COMPLETED_STATUSES } from "../../config/data/EstimatorData";
import { getEstimate, clearEstimate } from "../../store/estimateSlice";

import "./subtasks.css";

const SubtasksPage = () => {
  const [appKey, setAppKey] = useState(null);

  const { status, error, estimate } = useSelector((state) => state.estimate);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearEstimate(""));
    dispatch(getEstimate(appKey));
  };

  const handleOnChange = (e) => {
    setAppKey(e.target.value);
  };

  return (
    <div>
      <div className="control-menu">
        <div className="appKey-form">
          <TextField
            id="standard-basic"
            label="Enter Application Key"
            variant="standard"
            required
            style={{ width: 400 }}
            value={appKey}
            onChange={handleOnChange}
          />
          <Button variant="contained" onClick={handleClick}>
            Get Entities
          </Button>
        </div>

        <div className="taskId-form">
          <TextField
            id="standard-basic"
            label="Enter Task Id"
            variant="standard"
            required
            style={{ width: 150 }}
            value={appKey}
            onChange={handleOnChange}
          />
          <Button variant="contained" onClick={handleClick}>
            Create Subtasks
          </Button>
        </div>
      </div>

      <div className="result-display">
        <div className="status-bar">
          {!NOT_COMPLETED_STATUSES.includes(status) && (
            <Oval color="green" height={15} width={15} />
          )}
          <p>{status}</p>
        </div>
        <TextField className="logs" value={estimate} multiline maxRows={30} />
      </div>
    </div>
  );
};

export default SubtasksPage;