import FeatherIcon from 'feather-icons-react';
import React, { useEffect, useState } from 'react';
import LogoutComponent from '../auth/LogoutComponent';
import './header.css';

const Header = ({
  title = 'title',
  onSearch = () => {},
  onLogout = () => {},
  onSelect = () => {},
  data = []
}) => {
  const [timeOutId, setTimeOutId] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const debouncing = (ms) => {
    return (callme) => {
      clearTimeout(timeOutId);
      let id = setTimeout(() => {
        callme();
      }, ms);
      setTimeOutId(() => id);
    };
  };

  useEffect(() => {
    // window.addEventListener('scroll', (e) => {
    //   console.log(e);
    //   debouncing(1000)(() => {
    //     console.log('stop scroll');
    //   });
    // });
    // return () => {
    //   window.removeEventListener('scroll', (e) => {});
    // };
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="search-container">
        <div className="search">
          <input
            placeholder="Search Products"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(() => e.target.value);
              setShowSearch(true);
              debouncing(1000)(() => onSearch(e.target.value));
            }}
            type="text"
          />
          <div>
            <FeatherIcon icon="search" />
          </div>
        </div>
        {showSearch && (
          <div className="search-result">
            {data.map((item) => (
              <p
                onClick={() => {
                  setSearchItem(item.title);
                  setShowSearch(false);
                  onSelect(item);
                }}>
                {item.title}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="logout">
        <LogoutComponent onLogout={onLogout} />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
