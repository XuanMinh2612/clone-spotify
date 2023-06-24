import React, { useEffect, useState } from "react";
import axios from "axios";
function Content() {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const getPlayList = async () => {
      const options = {
        method: "GET",
        url: "https://shazam-core.p.rapidapi.com/v1/charts/country",
        params: { country_code: "VN" },
        headers: {
          "X-RapidAPI-Key":
            "25afd00c31msh690f22c6a3516c0p1799adjsn0eade0e56e0b",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlayList();
    console.log();
  }, []);
  return <div className="bg-blue-300 w-full h-full">Content</div>;
}

export default Content;
