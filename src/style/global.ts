import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;

        --primary-color: #cfd8dc;
        --secondary-color: #ffffff;
        --positive-color: #cfff95cf;
        --fontPositive-color: #009409;

        --button-confirm-color: #1976d2;
        --color-hover-button-confirm: #1565c0;

        --font-primary: 'Poppins', sans-serif;
    }
    
    body{
        background-color: var(--primary-color);
    }
    
`