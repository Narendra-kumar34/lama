import React, { useEffect, useState } from "react";
import styles from "./UploadSection.module.css";
import YTimg from "../../assets/YTimg.png";
import SpotifyImg from "../../assets/SpotifyImg.png";
import RSSimg from "../../assets/RSSimg.png";
import UploadModal from "../modals/UploadModal/UploadModal";
import DropBox from "../DropBox/DropBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../App";

const data = [
  {
    platformImage: YTimg,
    platformName: "Youtube Video",
  },
  {
    platformImage: SpotifyImg,
    platformName: "Spotify Podcast",
  },
  {
    platformImage: RSSimg,
    platformName: "RSS Feed",
  },
  {
    platformImage: YTimg,
    platformName: "Youtube Video",
  },
  {
    platformImage: SpotifyImg,
    platformName: "Spotify Podcast",
  },
  {
    platformImage: RSSimg,
    platformName: "RSS Feed",
  },
];

const miniModalData = [
  {
    platformImage: YTimg,
    platformName: "Youtube Video",
  },
  {
    platformImage: SpotifyImg,
    platformName: "Spotify Podcast",
  },
  {
    platformImage: null,
    platformName: "Media or Text File",
  },
];

export default function UploadSection({ projectName = "sampleProject" }) {
  const navigate = useNavigate();
  const [episodes, setEpisodes] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const funct = async () => {
      await fetchEpisodes();
    }
    funct();
  }, []);

  const fetchEpisodes = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/projects/episodes`,{
        headers: {
          email: email,
          name: projectName
        }
      });
      const sortedEpisodes = response.data.sort((a, b) => new Date(b.uploadDateTime) - new Date(a.uploadDateTime));
      setEpisodes(sortedEpisodes);
    }
    catch(err) {
      console.log(err);
    }
  }

  const formatDateTime = (str) => {
    const date = new Date(str);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${day} ${month} ${year} | ${hours}:${minutes}`;
    return formattedDate;
  }

  const handleEdit = (episodeName) => {
    navigate("/transcript", { state: { projectName: projectName, episodeName: episodeName } });
  }
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "var(--color-primary)", paddingBottom: "2rem" }}>
        {episodes.length === 0 ? "Upload" : projectName}
      </h1>
      {episodes.length === 0 ? (
        <div>
          <div className={styles.modalsWrapper}>
            {data.map((platform, idx) => (
              <UploadModal
                platformImage={platform.platformImage}
                platformName={platform.platformName}
                projectName={projectName}
                setEpisodes={setEpisodes}
                key={idx}
              />
            ))}
          </div>
          <div className={styles.divider}>or</div>
          <DropBox />
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div className={styles.miniModalsWrapper}>
            {miniModalData.map((platform, idx) => (
              <UploadModal
                platformImage={platform.platformImage}
                platformName={platform.platformName}
                projectName={projectName}
                setEpisodes={setEpisodes}
                type="mini"
                key={idx}
              />
            ))}
          </div>
          <div className={styles.banner}>
            <div>All files are processed! Your widget is ready to go!</div>
            <button className={styles.bannerButton}>Try it out!</button>
          </div>
          <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr className={styles.tableRow}>
                <th>Name</th>
                <th>Upload Date & Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((file) => (
                <tr className={styles.tableRow} key={file.fileId}>
                  <td>{file.name}</td>
                  <td>{formatDateTime(file.uploadDateTime)}</td>
                  <td>Done</td>
                  <td>
                    <div className={styles.buttonsWrapper}>
                      <button className={styles.editButton} onClick={() => handleEdit(file.name)}>Edit</button>
                      <button className={styles.deleteButton}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      )}
    </div>
  );
}
