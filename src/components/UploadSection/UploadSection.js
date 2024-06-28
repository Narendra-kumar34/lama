import React from "react";
import styles from "./UploadSection.module.css";
import YTimg from "../../assets/YTimg.png";
import SpotifyImg from "../../assets/SpotifyImg.png";
import RSSimg from "../../assets/RSSimg.png";
import UploadModal from "../modals/UploadModal/UploadModal";

const data = [
    {
        platformImage: YTimg,
        platformName: "Youtube Video"
    },
    {
        platformImage: SpotifyImg,
        platformName: "Spotify Podcast"
    },
    {
        platformImage: RSSimg,
        platformName: "RSS Feed"
    },
    {
        platformImage: YTimg,
        platformName: "Youtube Video"
    },
    {
        platformImage: SpotifyImg,
        platformName: "Spotify Podcast"
    },
    {
        platformImage: RSSimg,
        platformName: "RSS Feed"
    },
]

export default function UploadSection() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{color: "var(--color-primary)", paddingBottom: "2rem"}}>Upload</h1>
      <div className={styles.modalsWrapper}>
        {data.map((platform, idx) => <UploadModal platformImage={platform.platformImage} platformName={platform.platformName} key={idx} />)}
      </div>
    </div>
  );
}
