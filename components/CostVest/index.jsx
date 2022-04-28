import React from "react";
import styles from "./CostVest.module.scss";
import { useTrans } from "../../hooks/useTrans";

export default function CostVest() {

  const { trans } = useTrans();

  return (
    <div id={styles.cost}>
      <div className={styles["cost"]}>
        <div className={styles["cost_container"]}>
          <div className={styles["cost_text"]}>
            <div className={styles["cost_title"]}>
              <h1>
                <span>{trans("cost_title_1")}</span>
                <span>{trans("cost_title_2")}</span>
              </h1>
            </div>
            <img src="images/costBackMobile.png" alt="" className={styles["costBack_mobile"]} loading="lazy" />
            <p className={styles["cost_desc_p"]}>{trans("cost_desc_p")}</p>
            <div className={styles["cost_desc_span"]}>
              <p>{trans("cost_desc_span_1")}</p>
              <p>{trans("cost_desc_span_2")}</p>
              <p>{trans("cost_desc_span_3")}</p>
              <p>{trans("cost_desc_span_4")}</p>

            </div>
          </div>
          <div className={styles["warning"]}>
            <img src="images/icons/warning.png" alt="" loading="lazy" />
            <h2>{trans("warninng")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
