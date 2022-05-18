import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, TextField } from "@mui/material";
import { Oval } from "react-loader-spinner";

import { NOT_COMPLETED_STATUSES } from "../../config/data/EstimatorData";
import {
  clearEntities,
  getSubtaskEntities,
  toggleEntitySelected,
  toggleEntityTypeSelected,
} from "../../store/subtasksSlice";

import "./subtasks.css";

const SubtasksPage = () => {
  const [appKey, setAppKey] = useState(null);
  const [taskId, setTaskId] = useState(null);

  const { status, error, entities, entityTypes } = useSelector(
    (state) => state.subtasks
  );
  const dispatch = useDispatch();

  const handleGetEntities = async () => {
    dispatch(clearEntities());
    dispatch(getSubtaskEntities(appKey));
  };

  const handleCreateSubtasks = () => {};

  const handleOnChangeAppKey = (e) => {
    setAppKey(e.target.value);
  };

  const handleOnChangeTaskId = (e) => {
    setTaskId(e.target.value);
  };

  return (
    <div>
      <div className="subtask-menu">
        <div className="appKey-form">
          <div className="input-form">
            <TextField
              id="standard-basic"
              label="Enter Application Key"
              variant="standard"
              required
              style={{ width: 400 }}
              value={appKey}
              onChange={handleOnChangeAppKey}
            />
            <Button variant="contained" onClick={handleGetEntities}>
              Get Entities
            </Button>
          </div>

          <div className="checkbox-form">
            {entityTypes.map((item) => (
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.title}
                  checked={item.isSelected}
                  onChange={() => dispatch(toggleEntityTypeSelected(item.id))}
                />
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="taskId-form">
          <div className="input-form">
            <TextField
              id="standard-basic"
              label="Enter Task Id"
              variant="standard"
              required
              style={{ width: 150 }}
              value={taskId}
              onChange={handleOnChangeTaskId}
            />
            <Button variant="contained" onClick={handleCreateSubtasks}>
              Create Subtasks
            </Button>
          </div>
          <div className="checkbox-form">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="isSample"
                name="isSample"
                checked="false"
              />
              Is Sample Migration?
            </div>
          </div>
        </div>
      </div>

      <div className="result-box">
        <div className="status-bar">
          {!NOT_COMPLETED_STATUSES.includes(status) && (
            <Oval color="green" height={15} width={15} />
          )}
          <p>{status}</p>
        </div>
        <div className="entities-box">
          {entities.map((item) => (
            <div className="entities-checkbox-item">
              <input
                type="checkbox"
                id={item.id}
                name={item.entity}
                checked={item.isSelected}
                onChange={() => dispatch(toggleEntitySelected(item.id))}
              />
              {item.entity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubtasksPage;
