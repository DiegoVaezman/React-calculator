import React, { useRef, useState } from "react";

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [secondNumber, setSecondNumber] = useState("0");
  const [number, setNumber] = useState("0");
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber("0");
    setSecondNumber("0");
  };
  const buildNumber = (textNumber: string) => {
    if (number.includes(".") && textNumber === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (textNumber === ".") {
        setNumber(number + textNumber);
      } else if (textNumber === "0" && number.includes(".")) {
        setNumber(number + textNumber);
      } else if (textNumber !== "0" && !number.includes(".")) {
        if (number.startsWith("-0")) {
          setNumber("-" + textNumber);
        } else {
          setNumber(textNumber);
        }
      } else if (textNumber === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };
  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };
  const btnDelete = () => {
    if (number === "0") {
      return;
    } else if (
      number === "-0" ||
      number.length === 1 ||
      (number.length === 2 && number.includes("-"))
    ) {
      setNumber("0");
    } else {
      setNumber(number.slice(0, -1));
    }
  };
  const numberUp = () => {
    if (number.endsWith(".")) {
      setSecondNumber(number.slice(0, -1));
    } else {
      setSecondNumber(number);
    }
    setNumber("0");
  };
  const btnDivide = () => {
    if (number === "0") {
      return (lastOperation.current = Operators.divide);
    } else if (lastOperation.current !== Operators.divide) {
      numberUp();
      lastOperation.current = Operators.divide;
    }
  };
  const btnMultiply = () => {
    if (number === "0") {
      return (lastOperation.current = Operators.multiply);
    } else if (lastOperation.current !== Operators.multiply) {
      numberUp();
      lastOperation.current = Operators.multiply;
    }
  };
  const btnAdd = () => {
    if (number === "0") {
      return (lastOperation.current = Operators.add);
    } else if (lastOperation.current !== Operators.add) {
      numberUp();
      lastOperation.current = Operators.add;
    }
  };
  const btnSubtract = () => {
    if (number === "0") {
      return (lastOperation.current = Operators.subtract);
    } else if (lastOperation.current !== Operators.subtract) {
      numberUp();
      lastOperation.current = Operators.subtract;
    }
  };
  const operation = () => {
    const num1 = Number(number);
    const num2 = Number(secondNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;

      case undefined:
        break;
    }
    setSecondNumber("0");
    lastOperation.current = undefined;
  };

  return {
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
  };
};
