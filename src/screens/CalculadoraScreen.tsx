import React, { useRef, useState } from "react";
import { ButtonCalc } from "../components/ButtonCalc";
import { useCalculator } from "../hooks/useCalculator";
import { styles } from "../theme/appTheme";

export const CalculadoraScreen = () => {
  const {
    buildNumber,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    operation,
    number,
    secondNumber,
  } = useCalculator();

  return (
    <div style={styles.calculatorContainer}>
      <div style={styles.resultContainer}>
        <p style={styles.secondNumber}>{secondNumber}</p>
        <p style={styles.result}>{number}</p>
      </div>

      {/* Row buttons */}
      <div style={styles.row}>
        <ButtonCalc text="C" color="usable" action={clean} />
        <ButtonCalc text="+/-" color="usable" action={positiveNegative} />
        <ButtonCalc text="del" color="usable" action={btnDelete} />
        <ButtonCalc text="/" color="operator" action={btnDivide} />
      </div>

      {/* Row buttons */}
      <div style={styles.row}>
        <ButtonCalc text="7" color="number" action={buildNumber} />
        <ButtonCalc text="8" color="number" action={buildNumber} />
        <ButtonCalc text="9" color="number" action={buildNumber} />
        <ButtonCalc text="X" color="operator" action={btnMultiply} />
      </div>

      {/* Row buttons */}
      <div style={styles.row}>
        <ButtonCalc text="4" color="number" action={buildNumber} />
        <ButtonCalc text="5" color="number" action={buildNumber} />
        <ButtonCalc text="6" color="number" action={buildNumber} />
        <ButtonCalc text="-" color="operator" action={btnSubtract} />
      </div>

      {/* Row buttons */}
      <div style={styles.row}>
        <ButtonCalc text="1" color="number" action={buildNumber} />
        <ButtonCalc text="2" color="number" action={buildNumber} />
        <ButtonCalc text="3" color="number" action={buildNumber} />
        <ButtonCalc text="+" color="operator" action={btnAdd} />
      </div>

      {/* Row buttons */}
      <div style={styles.row}>
        <ButtonCalc text="0" color="number" action={buildNumber} wide />
        <ButtonCalc text="." color="number" action={buildNumber} />
        <ButtonCalc text="=" color="operator" action={operation} />
      </div>
    </div>
  );
};
