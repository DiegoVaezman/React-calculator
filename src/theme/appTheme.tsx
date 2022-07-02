export const styles = {
  background: {
    backgroundColor: "black",
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    backgroundColor: "black",
    width: 450,
    paddingBottom: 30,
    borderRadius: 50,
    textAlign: "center",
  },
  resultContainer: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  result: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    margin: 0,
    marginRight: 30,
  },
  secondNumber: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 30,
    textAlign: "right",
    margin: 0,
    marginRight: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
} as const;
