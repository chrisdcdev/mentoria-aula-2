import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 500 16px Inter, sans-serif;

    }

    body{
        background: white;
        color: #000;
    }
`;