import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import InterestsTable from "./components/InterestsTable/InterestsTable";
import { useState } from "react";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const onSaveInterestsData = (data) => {
    setYearlyData(data);
  };
  const onResetInterestsData = () => {
    setYearlyData([]);
  };
  return (
    <div>
      <Header />
      <InputForm
        onSaveInterestsData={onSaveInterestsData}
        onResetInterestsData={onResetInterestsData}
      />
      {yearlyData.length > 0 ? (
        <InterestsTable yearlyData={yearlyData} />
      ) : (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
    </div>
  );
}

export default App;
