import { Line } from "react-chartjs-2";

function App() {

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [5.8, 6.4, 6.2, 7.1, 7.7, 7.3, 8.1],
        fill: true,
        background: "linear-gradient(180deg, rgba(159, 255, 100, 0.3) -8.12%, rgba(181, 242, 51, 0) 99.63%)",
        borderColor: "#78D85B",
        tension: 0.3,
        pointHoverRadius: 8,
      },
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <div className="App">
      <p className="text">
        Satisfaction collaborateurs
      </p>
      <p className="rating">
        <span>8,4</span>/10
      </p>
      <Line data={chartData} options={chartOptions}/>
    </div>
  );
}

export default App;
