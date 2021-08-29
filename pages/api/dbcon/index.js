import dbConnect from "../../../server/dbConnect";
import datafetched from "../../../models/datafetched";

export default async (req, res) => {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await datafetched.find({});
        return res.status(200).json({
          success: true,
          data: data,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
        });
      }
      break;

    case "POST":
      try {
        const solarianRes = await fetch(
          "https://offers.solarians.click/api/offers"
        );
        const solarianData = await solarianRes.json();
        let prices = solarianData.map(function (e) {
          //for DogesNFT
          if (
            e.Creators[0]?.Address ==
            "HwMBMB6QpPJNyFnbVtt2UKVmJQPGnKKsMfaxNUyWahmc"
          ) {
            return e.Price / 1000000000;
          }
        });
        // wipe the undefined values
        prices = prices.filter(function (el) {
          return el != undefined;
        });

        const floorPrice = Math.min.apply(Math, prices);
        let today = "";

        const date = new Date();
        today = date.toUTCString();

        console.log("today", today);
        const data = await datafetched.create({
          floorprice: floorPrice,
          time: today,
        });

        console.log("data", data);
        return res.status(201).json({
          success: true,
          data: data,
        });
      } catch (error) {
        console.log("error,", error);
        res.status(400).json({
          success: false,
        });
      }
      break;
    default:
      res.status(401).json({
        success: false,
      });
      console.log("c");
      break;
  }
};
