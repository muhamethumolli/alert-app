import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userStart } from "../actions/user-actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useLayoutEffect(() => {
    dispatch(userStart());
  }, []);

  const splitString = (_) => {
    const array = data.name.split(" ");
    return array.map((el) => el.charAt(0));
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <a>
            PWD<span className="font-normal">RESET</span>
          </a>
        </div>
        {!!data && (
          <div className="nav-name">
            <p className="name">{data.name}</p>
            <span className="circle">{splitString()}</span>
          </div>
        )}
        <div className="add">
          <span className="plus">+</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
