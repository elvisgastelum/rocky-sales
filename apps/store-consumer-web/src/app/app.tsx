import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

interface ConsumerHomeResponse {
  title: string;
  message: string;
}

interface HomeState {
  status: 'loading' | 'success' | 'error';
  data: ConsumerHomeResponse | null;
}

const initialHomeState: HomeState = {
  status: 'loading',
  data: null,
};

export function App() {
  const [homeState, setHomeState] = useState<HomeState>(initialHomeState);

  useEffect(() => {
    let isActive = true;

    const loadHomeData = async () => {
      try {
        const response = await fetch('/api/consumer/home');

        if (!response.ok) {
          throw new Error('Failed to load home data');
        }

        const data = (await response.json()) as ConsumerHomeResponse;

        if (isActive) {
          setHomeState({ status: 'success', data });
        }
      } catch {
        if (isActive) {
          setHomeState({ status: 'error', data: null });
        }
      }
    };

    void loadHomeData();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1>Rocky Store Consumer</h1>

      <br />
      <hr />
      <br />
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {homeState.status === 'loading' && (
                <p role="status">Loading store home data...</p>
              )}
              {homeState.status === 'error' && (
                <p role="alert">
                  We could not load home content. Please try again.
                </p>
              )}
              {homeState.status === 'success' && homeState.data && (
                <>
                  <h2>{homeState.data.title}</h2>
                  <p>{homeState.data.message}</p>
                </>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
