"use client";

import { Card, CreateModal, EditModal } from "@/components/ui";

export default function Home() {
  // const BACKEND_ENDPOINT = "http://localhost:8888/sign-in";

  // const handleOnSubmit = async (event) => {
  //   event.preventDefault();

  //   const userData = {
  //     name: event.target.name.value,
  //     password: event.target.password.value,
  //   };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   };

  //   const response = await fetch(BACKEND_ENDPOINT, options);
  //   const data = await response.json();
  // };
  return (
    <div className="flex justify-center w-full p-6">
      <div className="max-w-[1200px]">
        <div className="flex justify-end ">
          <CreateModal />
        </div>
        <div className="flex flex-wrap justify-between gap-5 mt-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
