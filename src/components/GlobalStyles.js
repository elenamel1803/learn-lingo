import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

const GlobalStyles = createGlobalStyle`
:root {
  --font-family: "Roboto", sans-serif;
	--button:  #f4c550;
  --button-hover: #ffdc86;
	--text: #121417;
}

#root {
  padding: 0;
}

@font-face {
       font-family: "Roboto";
       src: url(${RobotoRegular}) format('truetype');
       font-weight: normal;
       font-style: normal;
     }

     @font-face {
       font-family: "Roboto";
       src: url(${RobotoMedium}) format('truetype');
       font-weight: 500;
       font-style: normal;
     }

     @font-face {
       font-family: "Roboto";
       src: url(${RobotoBold}) format('truetype');
       font-weight: 700;
       font-style: normal;
     }

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
}

textarea {
    font-family: "Roboto", sans-serif ; 
  }

textarea::placeholder {
    font-family: "Roboto", sans-serif ; 
  }

input {
    font-family: "Roboto", sans-serif ; 
  }

input::placeholder {
    font-family: "Roboto", sans-serif ; 
  };
`;

export default GlobalStyles;
