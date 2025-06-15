import React from 'react';
import Router from "./routes/router";

// InterFace For The Component Props
interface App {}

const App: React.FC<App> = () => {
  return (
    <>
     <Router />
    </>
  );
};

export default App;