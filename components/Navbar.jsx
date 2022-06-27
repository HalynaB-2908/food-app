import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.item}>
          <Image src="/img/logo.svg" alt="" width="100" height="100" />
        </div>
        <div className={styles.item}>
          <h1 className={styles.text}>Fast food for you</h1>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="/img/cart-shopping-solid.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
          <div className={styles.counter}>3</div>
        </div>
      </div>
    
  );
};

export default Navbar;
