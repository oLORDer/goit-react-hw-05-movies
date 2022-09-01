import { useState } from 'react';

export const InputQuery = ({ onSubmitFunc }) => {
  const [query, setQuery] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    onSubmitFunc(query);
    setQuery(null);
  };

  // const onChangeInput = e => {
  //   setQuery(e.target.value);
  // };

  return (
    <form onSubmit={onSubmitFunc}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Q</button>
    </form>
  );
};
