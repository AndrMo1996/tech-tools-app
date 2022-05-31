import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { EntityTypes } from "../../../../config/data/EstimatorData";

import { useScrollbar } from "../../../../hooks";
import Entities from "./Entities";
import styles from "./EstimateView.module.scss";

const EstimateView = () => {
  const { estimate } = useSelector((state) => state.estimate);

  const estimateWrapper = useRef(null);
  const hasScroll = true;

  useScrollbar(estimateWrapper, hasScroll);

  return (
    <div className={styles.estimate__view} ref={estimateWrapper}>
      <div>
        {EntityTypes.map((entityType) => {
          const entities = estimate.filter((entity) => {
            return entity.entityType === entityType.title;
          });
          return (
            <div className={styles.entity__type}>
              {`${entityType.title} entities`}
              <Entities entities={entities} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EstimateView;
