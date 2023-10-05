import classes from "./InterestsTable.module.css";
const InterestsTable = ({ yearlyData }) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr key={0}>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData?.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.totalInterest}</td>
            <td>{data.yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InterestsTable;
