import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TaskDetail = ({ id, comments, task, isComplete, groups }) => (
  <div>
    <h2>{task.name}</h2>
    <input value={task.name}></input>
    <div>
      <button>Complete / Reopen Task</button>
    </div>
    <select>
      {groups.map(group => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
    <Link to="/dashboard">
      <div>
        <button>Done</button>
      </div>
    </Link>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
