import React from 'react';

const ApiCalling = async () => {

  const res = await fetch(`${process.env.API_CALLING_URL}/data.json`);
    const data = await res.json();
    return data;
};

export default ApiCalling;