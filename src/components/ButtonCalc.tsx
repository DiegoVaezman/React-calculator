import React from "react";

interface Props {
  text: string;
  color: "number" | "operator" | "usable";
  wide?: boolean;
  action: (textNumber: string) => void;
}

export const ButtonCalc = ({ text, color, wide, action }: Props) => {
  return (
    <button
      onClick={() => {
        action(text);
      }}
      style={{
        ...styles.button,
        backgroundColor:
          color === "number"
            ? "#2D2D2D"
            : color === "operator"
            ? "#FF9427"
            : color === "usable"
            ? "#9B9B9B"
            : "",
        width: wide ? 180 : 80,
      }}
    >
      <p
        style={{
          ...styles.buttonText,
          color: color === "usable" ? "black" : "white",
        }}
      >
        {text}
      </p>
    </button>
  );
};

const styles = {
  button: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    cursor: "pointer",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    fontWeight: "300",
  },
} as const;
