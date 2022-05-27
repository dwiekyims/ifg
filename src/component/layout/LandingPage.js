import React, { Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import { Popover, Dialog, Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { doSignoutRequest } from "../../redux-saga/actions/User";
// import Carousel from "../molekul/Carousel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const { isLoggedIn, userProfile } = useSelector((state) => state.userState);

  const onSignout = () => {
    dispatch(doSignoutRequest());
    navigate(from, { replace: true });
  };

  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white shadow-md z-10">
          {({ open }) => (
            <>
              <div style={{backgroundColor:"blue"}} className="flex justify-between bg-blue items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <div className="text-2xl"><p style={{color:"white"}}> <b style={{color:"white"}}>GitHub</b>Jobs</p></div>
                    {/* <img className="h-14 w-auto sm:h-14" src="./assets/images/codeid.png" alt="codeid" /> */}
                </div>
              </div>
            </>
          )}
        </Popover>
      </header>
    </div>
  );
}
