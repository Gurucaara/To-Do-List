import React, { useState } from "react";
import Button from "./Button";
import { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import ToDoModal from "./ToDoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button
        variant="primary"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <ToDoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default AppHeader;
