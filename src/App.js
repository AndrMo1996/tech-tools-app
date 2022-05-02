import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank/Blank';
import EstimatorPage from './pages/Estimator/EstimatorPage';
import WorkHoursPage from './pages/WorkHours/WorkHoursPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Blank />} />
            <Route path='/estimator' element={<EstimatorPage />} />
            <Route path='/remover' element={<Blank />} />
            <Route path='/workhours' element={<WorkHoursPage />} />
            <Route path='/statistics' element={<Blank />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
