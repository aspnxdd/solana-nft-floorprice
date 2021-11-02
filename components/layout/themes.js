import {
    createGlobalStyle
} from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    cardBackgroundColor: "#fff",
    navBackgroundColor: "#fff",
    chartBorderColor: "#a2a2a2",
    search: "#fff",
    searchBorder: "#6e6e6e",
    searchResults: "#fff"
};

export const darkTheme = {
    body: "#15202b",
    fontColor: "#fff",
    cardBackgroundColor: "#445260",
    navBackgroundColor: "#445260",
    navFontColor: "#fff",
    chartBorderColor: "fff",
    a: "#88cbe1",
    search: "#406182",
    searchBorder: "#233547",
    searchResults: "#406182"
};

export const GlobalStyles = createGlobalStyle `

    body {
        background-color: ${(e)=> e.theme.body};
        color: ${e => e.theme.fontColor};
    }

    p{
        color: ${e => e.theme.fontColor};
    }
    a{
        color: ${e => e.theme.a};
    }

   

`