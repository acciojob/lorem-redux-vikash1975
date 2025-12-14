import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./LoremSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem()); // ✅ IMPORTANT
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
