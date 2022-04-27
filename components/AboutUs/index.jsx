import React, { useState } from "react";
import CustomList from "../CustomList";
import styles from "./AboutUs.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PaymentForm from "../PaymentForm";
import Slider from "react-slick";



export default function AboutUs() {
  const [activeSlides, setActiveSlides] = useState(0);
  const { trans } = useTrans();

  const sliderPaths = [
    {
      img: 'images/vestInWork/img_1.png',
      title: `${trans('armored_plate')}`,
      desc: `${trans('armored_plate_desc')}`
    },
    {
      img: 'images/vestInWork/img_2.png',
      title: `${trans('splinter_proof')}`,
      desc: `${trans('splinter_proof_desc')}`
    },
    {
      img: 'images/vestInWork/img_3.png',
      title: `${trans('internal_coating')}`,
      desc: `${trans('internal_coating_desc')}`
    },
    {
      img: 'images/vestInWork/img_4.png',
      title: `${trans('plate_carrier')}`,
      desc: `${trans('plate_carrier_desc')}`
    },
    {
      img: 'images/vestInWork/img_5.png',
      title: `${trans('testing_of')}`,
      desc: `${trans('testing_of_desc')}`
    },
    {
      img: 'images/vestInWork/img_6.png',
      title: `${trans('system_of_urgent')}`,
      desc: `${trans('system_of_urgent_desc')}`
    }
  ]







  const settings = {
    className: styles["about_slide"],
    infinite: true,
    slidesToShow: 1.64,
    speed: 300,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        }
      },
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "unset",
          borderRadius: "10px",
          padding: "10px",
          marginTop: '2vw'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <a>
        <div className={styles["custom_paging"]}
          style={{
            backgroundColor: `${i === activeSlides ? '#FFBC15' : "#525252"}`,
            // boxShadow: `${i === activeSlide ? '0px 0px 7px rgb(255 188 21 / 50%)' : "0px 0px 7px rgb(16 166 249 / 30%)"}`,

          }}
        >
          {/* {i + 1} */}
        </div>
      </a>
    ),
    beforeChange: next => setActiveSlides(next),
    afterChange: current => setActiveSlides(current),
  };

  return (
    <div id="minutiae">
      <div className={styles["aboutUs_container"]}>
        <h1 className={styles["aboutUs_title"]}>
          <span>{trans('aboutUs_title')}</span>
          <span>{trans('aboutUs_title_2')}</span>
        </h1>

        <div className={styles["aboutUs_blocks"]}>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_1.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('armored_plate')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('armored_plate_desc')}
            </p>
          </div>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_2.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('splinter_proof')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('splinter_proof_desc')}
            </p>
          </div>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_3.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('internal_coating')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('internal_coating_desc')}
            </p>
          </div>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_4.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('plate_carrier')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('plate_carrier_desc')}
            </p>
          </div>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_5.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('testing_of')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('testing_of_desc')}
            </p>
          </div>
          <div className={styles["aboutUs_block"]}>
            <div className={styles["aboutUs_block_img"]}>
              <img src="images/vestInWork/img_6.png" alt="" />
            </div>
            <h2 className={styles["aboutUs_block_h2"]}>
              {trans('system_of_urgent')}
            </h2>
            <p className={styles["aboutUs_block_p"]}>
              {trans('system_of_urgent_desc')}
            </p>
          </div>
        </div>
        <div className={styles["reviews_slider"]}>
          <Slider {...settings}>
            {sliderPaths.map((item, index) => (
              <div className={styles["slider_wrapp"]} key={index + 1}>
                <div className={styles["slider_wrapp_img"]}>
                  <img loading="lazy"
                    src={item.img}
                    key={index}
                    alt=""
                  />
                </div>
                <div className={styles["slide_desc"]}>
                  <h2 className={styles["slide_desc_cont"]}>
                    {item.title}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
