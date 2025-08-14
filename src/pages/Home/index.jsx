import BarChart from "@/pages/Home/components/BarChart";

const Home = () => {
  return (
    <div>
      <BarChart
        title={"三大框架满意度"}
        xData={["Vue", "Angular", "React"]}
        yData={[320, 100, 350]}
      />
      <BarChart
        title={"三大框架使用度"}
        xData={["Vue", "Angular", "React"]}
        yData={[20, 300, 350]}
      />
    </div>
  );
};

export default Home;
