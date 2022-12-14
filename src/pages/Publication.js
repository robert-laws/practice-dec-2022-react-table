import React from 'react';
import { useParams } from 'react-router-dom';

export const Publication = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Publication</h3>
      <p>ID: {id}</p>
    </div>
  );
};
