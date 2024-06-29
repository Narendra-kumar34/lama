import React from "react";
import styles from "./UploadSection.module.css";
import YTimg from "../../assets/YTimg.png";
import SpotifyImg from "../../assets/SpotifyImg.png";
import RSSimg from "../../assets/RSSimg.png";
import UploadModal from "../modals/UploadModal/UploadModal";
import DropBox from "../DropBox/DropBox";
import { useNavigate } from "react-router-dom";

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

const projectFiles = [
  {
    fileId: "1",
    name: "sample1",
    uploadTime: "29th June",
  },
  {
    fileId: "2",
    name: "sample2",
    uploadTime: "29th June",
  },
  {
    fileId: "3",
    name: "sample3",
    uploadTime: "29th June",
  },
  {
    fileId: "4",
    name: "sample4",
    uploadTime: "29th June",
  },
];

export default function UploadSection({ projectName = "sampleProject" }) {
  const navigate = useNavigate();

  const handleEdit = (fileId) => {
    navigate("/transcript", { state: { projectName: projectName, fileId: fileId } });
  }
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "var(--color-primary)", paddingBottom: "2rem" }}>
        {projectFiles.length === 0 ? "Upload" : projectName}
      </h1>
      {projectFiles.length === 0 ? (
        <div>
          <div className={styles.modalsWrapper}>
            {data.map((platform, idx) => (
              <UploadModal
                platformImage={platform.platformImage}
                platformName={platform.platformName}
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
              {projectFiles.map((file) => (
                <tr className={styles.tableRow} key={file.fileId}>
                  <td>{file.name}</td>
                  <td>{file.uploadTime}</td>
                  <td>Done</td>
                  <td>
                    <div className={styles.buttonsWrapper}>
                      <button className={styles.editButton} onClick={() => handleEdit(file.fileId)}>Edit</button>
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
