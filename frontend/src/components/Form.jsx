import axios from "axios";
import React, { useRef, useState } from "react";

function Form() {
  const inputRef = useRef();
  const [msg, setMsg] = useState("Aucun upload effectué");
  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios
      .post("http://localhost:5000/api/avatar", formData)
      .then(() => {
        setMsg("Upload réussi !");
      })

      .catch(() => {
        setMsg("Upload échoué !");
      });
  };
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="monfichier" ref={inputRef} />

        <button type="submit">Envoyer</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Form;
