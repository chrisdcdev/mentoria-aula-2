import styled from "styled-components";


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  white-space: nowrap;
  th {
    font-size: 1rem;
    font-weight: 700;
    color: #7a7571;
    height: 3rem;
    padding-right: 0.5rem;
    text-align: left;
  }

  td {
    font-size: 1rem;
    font-weight: 500;
    height: 3rem;
    padding-right: 0.5rem;
    text-align: left;
  }

  .status {
    width: 4rem;
    padding-right: 2rem;
    text-align: -webkit-center;
    
  }

  .userName {
    overflow: hidden;
    min-width: 15rem;
    max-width: 15rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .userOccupation {
    min-width: 8rem;
  }

  .featureIcon {
    text-align: center;
    min-width: 2.4rem;
  }

  .accessButton {
    background-color: #2DB4D8;
    border: none;
    width: 6rem;
    color: white;
    height: 1.8rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    cursor: pointer;

    :disabled {
      background-color: blue;
      cursor: default;
    }
  }

  .editButton {
    background: none;
    border: 2px solid #000;
    width: 6rem;
    color: #000;
    height: 1.8rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
  }

  .disableButton {
    background: #000;
    border: none;
    width: 6rem;
    color: white;
    height: 1.8rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;

    :disabled {
      background-color: #757575;
      cursor: default;
      color: #757575;
    }
  }
`;