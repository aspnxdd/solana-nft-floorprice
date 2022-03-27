import { useEffect, useState, useMemo } from "react";
import collections from "../../components/cards/collections";
import { useRouter } from "next/router";

export default function useGetFloorPrices() {
  const getFloorPrices = async (id) => {
    const res = await fetch(
      `${
        window.origin == "http://localhost:3000"
          ? "http://localhost:8080"
          : "https://nft-api-rust.herokuapp.com"
      }/load`,
      {
        headers: {
          id,
        },
      }
    );

    const data = await res.json();
    const digitalEyesData = data.filter((e) => e.marketplace === "de")[0];
    const solanartData = data.filter((e) => e.marketplace === "so")[0];
    return {
      digitalEyesData,
      solanartData,
    };
  };
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [dataForChart, setDataForChart] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setLoading(true);
      getFloorPrices(router.query.id).then((data) => {
        setData(data);
      });
    }
  }, [router.query.id]);

  const dataToReturn = useMemo(() => {
    setLoading(false);
    setInfoData(collections.find((e) => e.url == [router.query.id]));
    setDataForChart(data);
    return {
      loading,
      infoData,
      dataForChart,
    };
  }, [loading, infoData, dataForChart, data]);
  return dataToReturn;
}
