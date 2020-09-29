import React from "react";
import styled from "styled-components";
import Radium from "radium";
import "./App.css";

const inputFieldStyle = {
  padding: "15px 30px",
  outline: "none",
  textDecoration: "none",
  borderRadius: "100px",
  marginRight: "10px",
};

const textStyle = {
  classess: [],
};

console.log(textStyle.classess);

const ShowPerson = styled.button`
  margin: 2em 0;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 100px;
  outline: none;
  background-color: #ffffff;
  padding: 15px 30px;
  display: inline-block;
  color: #808080;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const AppDiv = styled.div`
  max-width: 50%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [persons, setPersons] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [profession, setProfession] = React.useState([]);

  function onSubmit() {
    setPersons([
      ...persons,
      { name: name, email: email, profession: profession },
    ]);
  }

  return (
    <AppDiv>
      <FormDiv>
        <input
          style={inputFieldStyle}
          key="key1"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          style={inputFieldStyle}
          key="key2"
          type="text"
          placeholder="Profession"
          onChange={(event) => setProfession(event.target.value)}
        />
        <input
          style={inputFieldStyle}
          key="key3"
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormDiv>
      <ShowPerson onClick={onSubmit}>show person card</ShowPerson>
      <div className="cardsContainer">
        <PersonCard persons={persons} />
      </div>
    </AppDiv>
  );
}

function PersonCard({ persons }) {
  let personCard = null;
  if (persons.length === 0) {
    textStyle.classess.push("text", "text-1");
    personCard = (
      <div className={textStyle.classess.join(" ")}>
        <p>The number of person cards that you can display is three maximum.</p>
      </div>
    );
  } else if (persons.length >= 1 && persons.length <= 3) {
    personCard = persons.map((personObject, index) => {
      return (
        <div key={index + 1} className={` card card-${index + 1}`}>
          <p>{personObject.name}</p>
          <p>{personObject.profession}</p>
          <p>{personObject.email}</p>
        </div>
      );
    });
  } else if (persons.length > 3) {
    textStyle.classess.push("text", "text-2");
    personCard = (
      <div className={textStyle.classess.join(" ")}>
        <p>Reached the maximum number of displayed cards.</p>
      </div>
    );
  }
  return personCard;
}

export default Radium(App);
