import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarsPage = () => {
  const [cars, setCars] = useState<any[]>([]);
  const navigate = useNavigate();

  const getCarsData = async () => {
    if (localStorage.getItem("token")) {
      let res = await axios({
        method: "get",
        url: "http://localhost:9595/api/cars/all",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token") ?? ""),
        },
      });
      const { data } = res;
      console.log(data);

      if (data && data.length > 0) {
        setCars(data);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div style={{ paddingTop: "100px" }}>
      <Header />

      {cars.map((car) => {
        return <h1>{car.brand}</h1>;
      })}
    </div>
  );
};

export default CarsPage;
