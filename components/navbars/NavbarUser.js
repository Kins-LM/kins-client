import NavbarMenu from './navbar util/NavbarMenu';
import styles from './Navbar.module.css';

const NavbarUser = () => {
  // hard coded data, will be replaced later
  const menuNames = ['Courier', 'My Store', 'My Account'];
  const links = [
    ['New Orders', 'In Progress', 'Completed Orders'],
    ['Store Website', 'Store Settings', 'Orders'],
    ['General', 'Orders', 'Settings', 'Log Out']
  ];
  const routes = [
    ['/', '/', '/'],
    ['/', '/', '/'],
    ['/', '/', '/', '/logout']
  ];
  const createMenus = () => {
    return menuNames.map((menuName, i) => {
      return (
        <NavbarMenu
          key={menuName}
          componentName={menuName}
          menuLinks={links[i]}
          linkRoutes={routes[i]}
        />
      );
    });
  };

  return (
    <div>
      <div className={styles['nav-bar']}>
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div className={styles['nav-buttons']}>
          {createMenus()}
          <div>
            <button
              className={styles.button}
              type="button"
              // onClick={}
            >
              Cart(icon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
