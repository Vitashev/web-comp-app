import '@web-comp-app/shared/ui-components';

import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React App</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <wc-counter-value count={count}></wc-counter-value>
    </div>
  );
}

export default App;
