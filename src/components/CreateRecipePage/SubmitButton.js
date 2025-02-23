import React from 'react';
import Button from '../ui/Button';


const SubmitButton = ({ onSubmit }) => {
  return (
    <Button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition" onClick={onSubmit}>
      Add Recipe
    </Button>
  );
};

export default SubmitButton;
