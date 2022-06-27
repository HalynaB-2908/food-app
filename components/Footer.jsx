import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.callButton}>
        <Image src="/img/phone-solid.svg" alt="" width="32" height="32" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>Order now</div>
        <div className={styles.text}>068 313 64 74</div>
      </div>
    </div>
  );
};

export default Footer;
