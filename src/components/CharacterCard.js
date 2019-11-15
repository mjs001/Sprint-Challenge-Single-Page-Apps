import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 4px double cyan;
  background-color: red;
  width: 300px;
  margin: 50px auto;
  box-shadow: 2px 2px 10px navy;
  transition: transform 300ms ease-in-out;
  color: white;
  h2 {
    font-size: 2rem;
    text-align: center;
    color: white;
    margin: 5px;

    h3 {
      font-size: 1.5rem;
      margin: 10px;
      color: white;
    }
  }
  &:hover {
    transform: translate(100px, 50px) rotate(20deg);
  }
`;
const ContentDiv = styled.div`
  display: flex;
  align-content: top;
  div {
    width: 50%;
    text-align: cemter;
    padding: 0px 20px;
  }
`;
function CharCard(props) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (props.charInfo === undefined) return <h2>Loading...</h2>;

  return (
    <div className="cardList">
      {props.charInfo.map(item => {
        return (
          <Card key={item.name}>
            <h2>{item.name}</h2>
            <ContentDiv>
              <div>
                <h3>STATUS: {item.status}</h3>
                <h3>SPECIES {item.species}</h3>
                <h3>TYPE: {capitalize(item.type)}</h3>
              </div>
            </ContentDiv>
          </Card>
        );
      })}
    </div>
  );
}

export default CharCard;
