import React from 'react';
import { useRouteError } from "react-router-dom";

const errorPage: React.FC<any> = () => {
  const catchError = useRouteError();
  return (
    <>
    <div>error-page</div>
    </>
  );
};

export default errorPage;