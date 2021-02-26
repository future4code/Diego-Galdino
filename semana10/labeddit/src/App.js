import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import Router from "./routes/Router"
import React from "react";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Router />
    </ChakraProvider>
  )
}

export default App;
