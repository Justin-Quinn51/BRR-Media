import Header from "./components/Header";
import RequestForm from "./components/RequestForm";
import TicketTable from "./components/TicketTable";
import "./index.css";

function App() {
  return (
    <main className="">
      <Header />
      <TicketTable />
      <RequestForm />
    </main>
  );
}

export default App;
