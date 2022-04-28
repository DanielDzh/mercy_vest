import React, { useEffect } from "react";
import styles from "./OurTeam.module.scss";
import { useTrans } from "../../hooks/useTrans";




const SocialMedia = ({ url, icon }) => (
  <a href={url}>
    <img loading="lazy" src={icon} alt="" />
  </a>
);

const Telegram = ({ url }) => (
  <SocialMedia url={url} icon="images/iconTelegram.png" />
);

const Facebook = ({ url }) => (
  <SocialMedia url={url} icon="images/icon/iconFacebook.png" />
);

const Instagram = ({ url }) => <SocialMedia url={url} icon="images/iconInst.png" />;

export default function OurTeam() {

  const { trans } = useTrans();

  const people = [
    {
      photo: "images/team/derkach.png",
      name: trans("Derkach"),
      profession: trans("Derkach_spec"),
      // telegram: "",
      // instagram: "https://www.instagram.com/vo.taniusha/",
      // facebook: "",
    },
    {
      photo: "images/team/Jaik.png",
      name: trans("Jaik"),
      profession: trans("Jaik_spec"),
      // telegram: "",
      // instagram: "https://instagram.com/cherniakvasia?utm_medium=copy_link",
      // facebook: "https://www.facebook.com/cherniakvasyl",
    },
    {
      photo: "images/team/Shkurko.png",
      name: useTrans().trans("Shkurko"),
      profession: useTrans().trans("Shkurko_spec"),
      // telegram: "https://t-do.ru/@daniilbogatiuk",
      // instagram: "https://www.instagram.com/daniil.bogatiuk/",
      // facebook: "https://www.facebook.com/daniil.bogatiuk",
    },
    {
      photo: "images/team/Ruvim.png",
      name: trans("Ruvim"),
      profession: trans("Ruvim_spec"),
      // telegram: "https://t-do.ru/@hrystichka",
      // instagram: "https://instagram.com/hrystichka?utm_medium=copy_link",
      // facebook: "https://www.facebook.com/profile.php?id=100017174077914",
    },
    {
      photo: "images/team/Pavlo.png",
      name: trans("Pavlo"),
      profession: trans("Pavlo_spec"),
      // telegram: "https://t-do.ru/@dariatytarchuk",
      // instagram: "https://instagram.com/dariatytarchuk?utm_medium=copy_link",
      // facebook: "https://www.facebook.com/profile.php?id=100010570006326",
    },
    {
      photo: "images/team/Viktor.png",
      name: trans("Viktor"),
      profession: trans("Viktor_spec"),
      // telegram: "https://t-do.ru/@danonedz",
      // instagram: "https://instagram.com/danone.dz?utm_medium=copy_link",
      // facebook: "",
    }
  ];

  return (
    <div id="ourTeam">
      <div className={styles["ourTeam_container"]}>
        <h1 className={styles["ourTeam_title"]}>
          {trans('our_team')}
          <span>{trans('our_team_2')}</span>
        </h1>
        <div className={styles.ourPeople}>
          {people.map((item, index) => (
            <div className={styles.human} key={index}>
              <div className={styles["human_img"]}>
                <img loading="lazy" src={item.photo} alt="" />
                <div className={styles["hover"]}>
                  {item.telegram && <Telegram url={item.telegram} />}
                  {item.facebook && <Facebook url={item.facebook} />}
                  {item.instagram && <Instagram url={item.instagram} />}
                </div>
              </div>
              <div className={styles["human_desc"]}>
                <h3>{item.name}</h3>
                <p>{item.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
