import React from "react";
import { Link } from "react-scroll";
import { useTrans } from "../../hooks/useTrans";
import ButtonBlue from "../ButtonBlue";
import Header from "../Header/index";
import styles from "./Slider.module.scss";

export default function HeroSlider() {
  const { trans } = useTrans();


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
                <img src="images/LineOnVest.png" alt="" className={styles["hero_abs_line_1"]} />
                <img src="images/hero_line_mobile.png" alt="" className={styles["hero_abs_line_2"]} />
              </div>
            </div>
            <div className={styles["hero_img_mobile"]}>
              <img src="images/backHeroMobile.png" alt="" />
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
              <Link
                // className={styles["header_link"]}
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
