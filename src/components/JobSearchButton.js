import { useMemo } from "react";
import styles from "./JobSearchButton.module.css";

const JobSearchButton = ({
  text,
  article,
  whatIfFamousBrandsHadRegu,
  frame,
  sarthakKamra,
  group2,
  propWidth,
  propDisplay,
  propPaddingRight,
  propLineHeight,
  propMinWidth,
  propOverflow,
  propDisplay1,
  propDisplay2,
  propDisplay3,
}) => {
  const articleStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      paddingRight: propPaddingRight,
    };
  }, [propWidth, propDisplay, propPaddingRight]);

  const whatIfFamousStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const iveWorkedInStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const sarthakKamraStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const kViewsStyle = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  return (
    <div className={styles.jobSearchButton}>
      <div className={styles.jobSearchButtonChild} />
      <img className={styles.textIcon} loading="eager" alt="" src={text} />
      <div className={styles.innovaccerLogoFrame}>
        <div className={styles.article} style={articleStyle}>
          {article}
        </div>
        <div className={styles.noidaIndiaText}>
          <h3 className={styles.whatIfFamous} style={whatIfFamousStyle}>
            {whatIfFamousBrandsHadRegu}
          </h3>
          <img
            className={styles.noidaIndiaTextChild}
            loading="eager"
            alt=""
            src="/group-3@2x.png"
            style={groupIconStyle}
          />
        </div>
        <h3 className={styles.iveWorkedIn} style={iveWorkedInStyle}>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </h3>
      </div>
      <div className={styles.rectangleShape}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameIcon}
            loading="eager"
            alt=""
            src={frame}
          />
          <div className={styles.sarthakKamra} style={sarthakKamraStyle}>
            {sarthakKamra}
          </div>
        </div>
        <div className={styles.groupFrame}>
          <div className={styles.visibilityToggle}>
            <img
              className={styles.iconactionvisibility24px}
              loading="eager"
              alt=""
              src="/iconactionvisibility-24px@2x.png"
            />
            <div className={styles.kViews} style={kViewsStyle}>
              1.4k views
            </div>
          </div>
          <img
            className={styles.groupFrameChild}
            loading="eager"
            alt=""
            src={group2}
          />
        </div>
      </div>
    </div>
  );
};

export default JobSearchButton;
