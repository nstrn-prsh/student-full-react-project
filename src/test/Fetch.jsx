import { useState, useEffect } from "react";
import axios from "axios";

const FetchComponent = (props) => {
     const [data, setData] = useState(null);

     useEffect(() => {
          axios.get("props.url")
               .then((res) => setData(res.data))
               .catch((error) => console.log(error));
     }, [props.url]);

     if (!data) return <span data-testid="loading">...loading</span>;

     return <span data-testid="resolved">{data}</span>;
};

export default FetchComponent;
