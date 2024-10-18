import React, { createContext, useState, useContext, useEffect } from 'react';

const FormRightsContext = createContext();

export const useFormRights = () => useContext(FormRightsContext);

export const FormRightsProvider = ({ children }) => {
  const [formRights, setFormRights] = useState(() => {
    // Initialize state from localStorage or empty array if not found
    const storedRights = localStorage.getItem('formRights');
    return storedRights ? JSON.parse(storedRights) : [];
  });

  // Update localStorage whenever formRights changes
  useEffect(() => {
    localStorage.setItem('formRights', JSON.stringify(formRights));
  }, [formRights]);

  return (
    <FormRightsContext.Provider value={{ formRights, setFormRights }}>
      {children}
    </FormRightsContext.Provider>
  );
};