import { useState } from "react";

function LogInForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [islogged, setIsLogged] = useState(false);

  const handleInputs = (e) => {
    e.preventDefault();
    setIsLogged(!islogged);
  };
  return (
    <div>
      <h2>Log In </h2>

      {islogged && (
        <h3>
          welcome Back , {userName}

          <br />
          <br />
          <button onClick={handleInputs}> logOut </button>
        </h3>
      )}

      <div>
        {!islogged && (
          <form onSubmit={handleInputs}>
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <br></br>
            <label htmlFor="password">password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <br />
            <button type="submit"> {islogged ? "logOut" : "logIn "}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LogInForm;
