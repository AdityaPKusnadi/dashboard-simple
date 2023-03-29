import './index.css';
import Header from './templates/Header';
import Sidebar from './templates/Sidebar';
import Content from './templates/Content';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Content />
        </div>
      </div>
    </div>
    );
}

export default App;
