import Header from "./components/Header";
import RequestForm from "./components/RequestForm";
import StaffCard from "./components/StaffCard";
import TicketTable from "./components/TicketTable";
import "./index.css";

function App() {
  return (
    <main className="">
      <Header />
      <TicketTable />
      <RequestForm />
      <StaffCard />
    </main>
  );
}

export default App;
