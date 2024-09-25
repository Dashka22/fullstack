"use client";

export default function Home() {
  const BACKEND_ENDPOINT = "http://localhost:8888/sign-in";

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();

    console.log(data);
  };
  return (
    <div>
      <h1>FS file write</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <input className="border" name="name" type="text" />
        <input className="border" name="password" type="password" />
        <button className="btn">Log in user</button>
      </form>
    </div>
  );
}
