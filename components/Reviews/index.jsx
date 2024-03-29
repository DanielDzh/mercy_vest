import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { Link } from "react-scroll";

const sliderPaths = [
   {
      img: "images/reviews/1.jpg",
   },
   {
      img: "images/reviews/2.jpg",
   },
   {
      img: "images/reviews/3.jpg",
   },
   {
      img: "images/reviews/4.jpg",
   },
   {
      img: "images/reviews/5.jpg",
   },
   {
      img: "images/reviews/6.jpg",
   },
   {
      img: "images/reviews/7.jpg",
   },
   {
      img: "images/reviews/8.jpg",
   },
   {
      img: "images/reviews/9.jpg",
   },
   {
      img: "images/reviews/10.jpg",
   },
   {
      img: "images/reviews/11.jpg",
   },
   {
      img: "images/reviews/12.jpg",
   },
   {
      img: "images/reviews/13.jpg",
   },
   {
      img: "images/reviews/14.jpg",
   },
   {
      img: "images/reviews/15.jpg",
   },
   {
      img: "images/reviews/16.jpg",
   },
   {
      img: "images/reviews/17.jpg",
   },
   {
      img: "images/reviews/18.jpg",
   },
   {
      img: "images/reviews/19.jpg",
   },
   {
      img: "images/reviews/20.jpg",
   },
   {
      img: "images/reviews/21.jpg",
   },
   {
      img: "images/reviews/22.jpg",
   },
   {
      img: "images/reviews/23.jpg",
   }
];
const count = sliderPaths.lenght;
export default function Reviews() {

   const [activeSlide, setActiveSlide] = useState(0);

   const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '43%', bottom: '-27%', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset', zIndex: 2 }}
            onClick={onClick}
         >
            <img loading="lazy" style={{ height: '100%' }} src="images/icons/back.png" alt="" />
         </div>
      );
   };
   const SampleNextvArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '43%', bottom: '-27%', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset' }}
            onClick={onClick}
         >
            <img loading="lazy" style={{ height: '100%' }} src="images/icons/next.png" alt="" />
         </div>
      );
   };

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 300,
      arrows: true,
      dots: false,
      responsive: [
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 3,
               infinite: true,
               arrows: false,
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 2,
               infinite: true,
               arrows: false,
            }
         },
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
               marginTop: '4vw'
            }}
         >
            <ul style={{ margin: "0px" }}> {dots} </ul>
         </div>
      ),
      customPaging: i => (
         <a>
            <div className={styles["custom_paging"]}
               style={{
                  backgroundColor: `${i === activeSlide ? '#10A6F9' : "#525252"}`,
                  // boxShadow: `${i === activeSlide ? '0px 0px 7px rgb(255 188 21 / 50%)' : "0px 0px 7px rgb(16 166 249 / 30%)"}`,

               }}
            >
               {/* {i + 1} */}
            </div>
         </a>
      ),
      beforeChange: next => setActiveSlide(next),
      afterChange: current => setActiveSlide(current),
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextvArrow />,
   };

   const { trans } = useTrans();

   return (
      <div id="reviews">
         <div className={styles["reviews_container"]}>
            <div className={styles["reviews_title"]}>

               <h1 className={styles["reviews_title_h1"]}>
                  {trans("reviews_title")}
               </h1>
               <p className={styles["reviews_title_p"]}>
                  {trans("reviews_title_2")}
               </p>
               <div className={styles["reviews_title_block"]}>
                  <span>{trans("reviews_desc_1")}</span>
                  <span className={styles["reviews_title_block_span_yellow"]}>{trans("reviews_desc_2")}</span>
                  <span>{trans("reviews_desc_3")} </span>
                  <span className={styles["reviews_title_block_span_yellow"]}>{trans("reviews_desc_4")} </span>
                  <span>{trans("reviews_desc_5")}</span>
               </div>
            </div>
            <div className={styles["reviews_slider"]}>
               <Slider {...settings}>
                  {sliderPaths.map((item, index) => (
                     <div className={styles["slider_wrapp"]} key={index + 1}>
                        <div className={styles["slider_wrapp_img"]}>
                           <img loading="lazy"
                              className={styles['reviews_slide']}
                              src={item.img}
                              alt=""
                           />
                        </div>
                        {/* <div className={styles["slide_desc"]}>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/date.png" alt="" loading="lazy" />
                              <p>{item.date}</p>
                           </div>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/amount.png" alt="" loading="lazy" />
                              <p>{item.amount}</p>
                           </div>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/city.png" alt="" loading="lazy" />
                              <p>{item.city}</p>
                           </div>
                        </div> */}
                     </div>
                  ))}
               </Slider>
            </div>

            <Link
               className={styles["link"]}
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
   );
}
