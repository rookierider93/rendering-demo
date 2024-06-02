"use client";
import { useEffect, useState } from "react";

function csr() {
  const [message, SetMessage] = useState("");

  useEffect(() => {
    SetMessage("This is Client site rendering!");
  }, []);
  return (
    <>
      <div className="">
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default csr;
