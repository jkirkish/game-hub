import { extendTheme, ThemeConfig } from "@chakra-ui/react";
//https://chakra-ui.com/docs/styled-system/color-mode
const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config });

export default theme;


