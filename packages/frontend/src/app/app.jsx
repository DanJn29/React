import Card from '../../pages/Overview/Components/Cards';
import Routes from './Routes';
import Layout from '../../layout';
import TimeCard from '../../pages/Overview/Components/TimeCard';

export function App() {
  return (
    // <>
    // <Card data = {{name: "Average of workload index", number: "69"}}/>
    // <TimeCard data = {{from:"10PM", to:"5PM"}}/>
    // </>
    <Layout>
      <Routes></Routes> 
    </Layout>
  );
}
export default App;
