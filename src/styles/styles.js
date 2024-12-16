import { createGlobalStyle  } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: "Poppins", serif; 
    }

    body {
        background: #f5f7fa;
        height: 70rem;
    }
`

export default GlobalStyle;