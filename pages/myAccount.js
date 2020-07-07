import {useEffect, useState, forwardRef, useRef} from 'react';
import Layout from '../components/Layout';
import MyAccountGeneral from '../components/myAccount/MyAccountGeneral';
import MyAccountBilling from '../components/myAccount/MyAccountBilling';
import MyAccountOrders from '../components/myAccount/MyAccountOrders';
import MyAccountSettings from '../components/myAccount/MyAccountSettings';

const Account = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleOptionClick = e => {
    setSelectedOption(e.target.innerText);
  };

  const showOptions = () => {
    switch (selectedOption) {
      case 'General': {
        return <MyAccountGeneral />;
      }
      case 'Billing': {
        return <MyAccountBilling />;
      }
      case 'Orders': {
        return <MyAccountOrders />;
      }
      case 'Settings': {
        return <MyAccountSettings />;
      }
      default: {
        return <MyAccountGeneral />;
      }
    }
  };

  return (
    <Layout>
      <div>
        <h1>My Account</h1>
        <div id="container">
          <div id="sidebar">
            <button
              className="sidebar-button"
              type="button"
              onClick={handleOptionClick}
            >
              General
            </button>
            <button
              className="sidebar-button"
              type="button"
              onClick={handleOptionClick}
            >
              Billing
            </button>
            <button
              className="sidebar-button"
              type="button"
              onClick={handleOptionClick}
            >
              Orders
            </button>
            <button
              className="sidebar-button"
              type="button"
              onClick={handleOptionClick}
            >
              Settings
            </button>
          </div>
          <div id="configuration-options">{showOptions()}</div>
        </div>
        <style jsx>
          {`
            h1 {
              text-align: center;
            }
            #container {
              display: flex;
              flex-direction: row;
            }
            #sidebar {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }
            .sidebar-button {
              border: none;
              background-color: transparent;
              padding: 1em;
              margin: 0 1em 0 1em;
            }
            .sidebar-button:focus,
            .sidebar-button:active,
            .sidebar-button:hover {
              border-bottom: 1px solid pink;
              outline: none;
            }
            #configuration-options {
              flex-grow: 2;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Account;
