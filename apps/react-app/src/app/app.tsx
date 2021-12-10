import styles from './app.module.css';
import '@web-comp-app/shared/ui-components';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React App</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <wc-button count={count}></wc-button>
    </div>
  );
}

export default App;
