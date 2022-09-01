import { useState } from 'react';

import { StyledForm } from './inputQuery.styled.js';

export const InputQuery = ({ onSubmitFunc }) => {
  const [query, setQuery] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    onSubmitFunc(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="choose you movie"
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Find</button>
    </StyledForm>
  );
};
