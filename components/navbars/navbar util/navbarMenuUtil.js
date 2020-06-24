import {useEffect} from 'react';

export const openMenu = buttonRef => {
  buttonRef.current.style.color = '#8bc7c9';
  buttonRef.current.nextSibling.style.display = 'flex';
};

export const closeMenu = (buttonRef) => {
  // TODO: onMouseLeave cancels out onClick, when if statement below is included, moving to the next dropdown menu create ugly overlap of menus
  // if (!buttonRef.current.contains(document.activeElement)) {
  buttonRef.current.style.color = '#000000';
  buttonRef.current.nextSibling.style.display = 'none';
  // }
};

export const handleClick = (e, buttonRef, menuRef) => {
  if (menuRef.current && !menuRef.current.contains(e.target)) {
    menuRef.current.style.display = 'none';
    menuRef.current.previousSibling.style.color = '#000000';
  }
  if (buttonRef.current && buttonRef.current.contains(e.target)) {
    buttonRef.current.style.color = '#8bc7c9';
    buttonRef.current.nextSibling.style.display = 'flex';
  }
};

export const uE = (buttonRef, menuRef, ) => {
  useEffect(() => {
    // using 'mousedown' prevents the modal from closing if user started click inside modal but ended outside
    document.addEventListener('mousedown', e =>
      handleClick(e, buttonRef, menuRef)
    );
    return () => {
      document.removeEventListener('mousedown', e =>
        handleClick(e, buttonRef, menuRef)
      );
    };
  }, []);
};
