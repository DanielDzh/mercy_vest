import React, { useState } from "react";
import styles from "./ClassVest.module.scss";
import { useTrans } from "../../hooks/useTrans";




const rating = [4];


export default function ClassVest() {

  const [active, setActive] = useState(4);

  const { trans } = useTrans();


  const vests = [
    {
      rating: 4,
      vets_img: '/images/vestsClass/class_5.png',
      desc: trans("levels_of_dody_desc_1")
    },
    // {
    //   rating: 5,
    //   vets_img: '/images/vestsClass/class_5.png',
    //   desc: trans("levels_of_dody_desc_1")

    // }
  ]

  return (
    <div id={styles.levels}>
      <div className={styles["levels_of_dody_container"]}>
        <h1 className={styles["levels_of_dody_title"]}>
          <span>{trans('levels_of_dody_title')}</span>
          {trans('levels_of_dody_title_2')}
        </h1>

        <div className={styles["levels_of_dody_body"]}>
          <div className={styles["images_vest"]}>
            {
              vests.map((item, index) =>
              (
                item.rating === active ?
                  <div key={index} className={styles["images_vest_wrapp"]}>
                    <div className={styles["images_vest_rating"]}>
                      {[...new Array(item.rating)].map((x, rowIndex) => (
                        <div className={styles["images_vest_rating_img"]} key={rowIndex}>
                          <img src="images/vestsClass/Vector.png" alt="" key={rowIndex} loading="lazy" />
                        </div>
                      ))}
                    </div>

                    <div className={styles["image_vest"]}>
                      <img src={item.vets_img} alt="" loading="lazy" />
                    </div>
                  </div>
                  :
                  <></>
              )
              )
            }
          </div>

          <div className={styles["vest_choice_and_desc"]}>
            <div className={styles["vest_choices"]}>
              {
                rating.map((item, index) => (
                  <div className={styles["vest_choice"]} onClick={() => setActive(item)} key={index} style={{ borderColor: item === active && '#FFBC15' }}>
                    <p style={{ color: item === active && '#fff' }}>
                      {item} {trans("levels_of_dody_class")}:
                    </p>
                  </div>
                ))
              }
            </div>
            <div className={styles["vest_desc"]}>
              {
                vests.map((item, index) => (
                  item.rating === active &&
                  <p key={index}>
                    {item.desc}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
