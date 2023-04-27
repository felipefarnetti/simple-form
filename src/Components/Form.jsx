import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !passwordConfirm) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }
    if (password !== passwordConfirm) {
      setErrorMessage("Les mot de passe ne sont pas identiques");
      return;
    }
    setErrorMessage("");
    alert("Le compte a été créé");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Name</span>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span>Email</span>

      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <span>Password</span>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <span>Corfirm your password</span>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={passwordConfirm}
        onChange={handlePasswordConfirmChange}
      />
      <button type="submit">Register</button>
      {errorMessage && (
        <p
          style={{
            color: "red",
            fontSize: "12px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
