import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibraryDetails from './components/LibraryDetails';
import ExploreLibraries from './components/ExploreLibraries';
import HeaderMain from './components/HeaderMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderMain />} />
        <Route path="/libraries" element={<LibraryDetails />} />
        <Route path="/exploreLibraries" element={<ExploreLibraries />} />
      </Routes>
    </Router>
  );
}

export default App;