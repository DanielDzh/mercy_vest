import React from "react";
import SectionTitle from "../SectionTitle";
import CustomList from "../CustomList";
import styles from "./AboutUs.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";

export default function AboutUs() {

  const { trans } = useTrans();

  return (
    <div id="aboutUs">
      <div className={styles["aboutUs-container"]}>
        <div className={styles["aboutUs-img"]}>
          <img src="images/we.png" alt="" loading="lazy" className={styles["aboutUs-img-img"]} />
          <div className={styles["aboutUs_desc_tablet"]}>
            <SectionTitle
              title={trans("aboutUs_title")}
              desc={trans("aboutUs_desc_under_title")}
            />
            <CustomList />
          </div>
        </div>
        <div className={styles["aboutUs-info"]}>
          <div className={styles["aboutUs_desc_desktop"]}>
            <SectionTitle
              title={trans("aboutUs_title")}
              desc={trans("aboutUs_desc_under_title")}
            />
            <CustomList />
          </div>
          <img src="images/we.png" alt="" loading="lazy" className={styles["aboutUs-img-mobile"]} />
          <p>
            {trans("aboutUs_desc_under")}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonBlue title={trans("aboutUs_button")} />
          </div>
        </div>
      </div>
    </div>
  );
}
