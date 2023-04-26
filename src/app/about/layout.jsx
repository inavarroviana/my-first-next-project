import styles from "./about.module.css";
function AboutLayout({ children }) {
  return (
    <>
      <marquee className={styles.banner}>
        The best blog in the whole world
      </marquee>
      {children}
    </>
  );
}

export default AboutLayout;
