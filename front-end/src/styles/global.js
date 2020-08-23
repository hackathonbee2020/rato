import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #35aef2;
        --primary-hover: #218bc7;

        --success: #70ae77;
        --success-hover: #519058;

        --danger: #ff3636;
        --danger-hover: #f12d2d;
        
        --dark: #051520;
        --white: #FFFFFF;
        --grey-1: #d6d6ca;

        --border-radius-1: 6px;
        --border-radius-2: 10px;
        --border-radius-3: 20px;

        --heading-1: #313648;
        --body-1: #47484c;
        --body-2: rgba(120, 130, 140);

        --menu-color: rgba(211, 214, 222);
        --menu-hover: rgba(48, 56, 67);

        --input-focus: #ecece8;
        --input-border: #dedede;
        --input-border-hover: #cccccc;

        --card-border: #efefef;

        --workspace: rgba(245, 249, 250);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body, html, #root {
        height: 100%;
        overflow: hidden;
    }

    button {
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    .sb-avatar__image {
        object-fit: cover !important;
    }
`;
export default GlobalStyles;