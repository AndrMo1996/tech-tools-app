import React from "react";
import CustomFields from "./CustomFields";
import styles from "./EstimateView.module.scss";

const Entities = ({ entities }) => {
  console.log(entities);
  return (
    <div>
      {entities.map((entity) => {
        if (entity.customFields.count > 0) {
          return (
            <div className={styles.entity__info}>
              {`${entity.title} - ${entity.total}`}
              <br />
              <span className={styles.custom__field__title}>{`Custom fields - ${entity.customFields.count}`}</span>
              <br />
              <CustomFields fields={entity.customFields.fields} />
            </div>
          );
        }

        return <div className={styles.entity__info}>{`${entity.title} - ${entity.total}`}</div>;
      })}
    </div>
  );
};

export default Entities;
