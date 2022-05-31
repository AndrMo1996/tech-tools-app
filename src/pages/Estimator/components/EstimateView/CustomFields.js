import React from "react";
import styles from "./EstimateView.module.scss";

const CustomFields = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        return <div className={styles.custom__fields}>{`${field.title}`}<br /></div>;
      })}
    </div>
  );
};

export default CustomFields;
