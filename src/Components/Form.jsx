import { useState } from "react";

const Form = () => {
  // inputs du form //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // message d'erreur si pas tous les champs remplis//
  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChange1 = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (password === passwordConfirm && name === useState) ||
      email === useState ||
      password === useState
    ) {
      setErrorMessage("");
      alert("Votre compte a été créé");
    } else {
      setErrorMessage("Le mot de passe n'est pas idéntique");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Name</span>
      <input
        placeholder="Jean Dupont"
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <span>Email</span>
      <input
        placeholder="Email"
        type="email"
        name="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <span>Password</span>
      <input
        placeholder="password"
        type="password"
        name="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <span>Confirm your password</span>
      <input
        placeholder="confirm password"
        type="password"
        name="confirmPassword"
        onChange={handlePasswordChange1}
        value={passwordConfirm}
      />
      <button type="submit" value="Register">
        Register
      </button>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
      )}
    </form>
  );
};

export default Form;
