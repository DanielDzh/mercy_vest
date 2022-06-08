import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useTrans } from "../../hooks/useTrans";
import ButtonBlue from "../ButtonBlue";
import Header from "../Header/index";
import styles from "./Slider.module.scss";

export default function HeroSlider() {
  const { trans } = useTrans();

  let now_price = '128 700';
  let end_count_vest = 1500;
  let now_count_vest = 585;

  let interest = now_count_vest * 100 / end_count_vest;


  return (
    <div className={styles["slider-area"]}>
      <div className={styles["container-slider"]}>
        <Header />
        <div className={styles["hero"]}>
          <div className={styles["hero_container"]}>
            <div className={styles["hero_abs"]}>
              <div className={styles["hero_abs_text"]}>
                <p>{trans("slider_already_sent_1")}</p>
                <h2>{trans("slider_already_sent_2")}</h2>
              </div>
              <div className={styles["hero_abs_line"]}>
                <img src="images/icons/LineOnVest.png" alt="" className={styles["hero_abs_line_1"]} loading="lazy" />
                <img src="images/icons/hero_line_mobile.png" alt="" className={styles["hero_abs_line_2"]} loading="lazy" />
              </div>
            </div>
            <div className={styles["hero_img_mobile"]}>
              <img src="images/backHeroMobile.png" alt="" loading="lazy" />
            </div>
            <div className={styles["hero_text"]}>
              <div className={styles["hero_title"]}>
                <h1>{trans("slider_title_1")}</h1>
                <h1>
                  <span>{trans("slider_title_2")}</span>
                  <span>{trans("slider_title_3")}</span>
                </h1>
                <h1>{trans("slider_title_4")}</h1>
              </div>

              <p>{trans("slider_desc")}</p>



              <div className={styles["hero_target"]}>
                <div className={styles["hero_target_over"]}>
                  <span>0</span>
                  <div className={styles["hero_target_over_end"]}>
                    <img src="images/icons/dollar-circle.png" alt="" className={styles["hero_target_over_img_dollar"]} />
                    <span>330 000</span>
                  </div>
                </div>
                <div className={styles["hero_target_line"]}>
                  <div className={styles["hero_target_line_active"]} style={{ width: `${interest}%` }}>
                    <div className={`${styles.hero_target_process} ${styles.hero_target_process_first}`}>
                      <img src="images/icons/dollar-circle_active.png" alt="" className={styles["hero_target_over_img_dollar"]} />
                      <span>{now_price}</span>
                    </div>
                    <div className={`${styles.hero_target_process} ${styles.hero_target_process_second}`}>
                      <img src="images/icons/vest_target_active.png" alt="" className={styles["hero_target_over_img_vest"]} />
                      <span>{now_count_vest}</span>
                    </div>
                  </div>
                </div>
                <div className={styles["hero_target_over"]}>
                  <span>0</span>
                  <div className={styles["hero_target_over_end"]}>
                    <img src="images/icons/vest_target.png" alt="" className={styles["hero_target_over_img_vest"]} />
                    <span>1500</span>
                  </div>
                </div>
              </div>




              <Link
                to="details"
                smooth={true}
                duration={2000}
                activeClass="active"
                spy={false}
                offset={5}
              >
                <ButtonBlue title={trans("slider_button_blue")} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
