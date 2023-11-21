import React from 'react';
import { Outlet } from 'react-router-dom';
import "./index.js";

export default function Root() {
  return (
    <>
        <Outlet />
    </>
  )
}
