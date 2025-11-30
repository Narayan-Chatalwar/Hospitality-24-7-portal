
import styles from "./Navbar.module.scss"

const Navbar = () => {

  return (
    <div class={styles.navbarWrapper}>
      <div class={styles.listWrapper}>
        <a class={styles.listItem} href="/"> <b>Hospital 24/7</b></a>
        <a class={styles.listItem} href="/hospitalsNearMe">Nearby Hospitals</a>
        <a class={styles.listItem} href="/bookAnAppointment">Book an Appointment</a>
      </div>
    </div>
  )
};

export default Navbar;
