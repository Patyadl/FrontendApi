import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoadingSpinner() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Alternar Spinner</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Cor do spinner"
      />
      <ClipLoader
        color={color}
        loading={loading}
        css={override}
        size={150}
        aria-label="Spinner de Carregamento"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner;
