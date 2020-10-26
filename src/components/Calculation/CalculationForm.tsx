import React from "react";

import { Button } from "../UI/Buttons";
import { Input } from "../UI/Controls";
import HistoryService from "../../services/HistoryService";
import CalculationService from "../../services/CalculationService";
import { Result } from "../../models/Result";
import propTypes from "prop-types";
import Form from '../UI/Form';


type CalculationFormProps = {
  salary: string;
  setSalary: any;
  setResult: any;
  result: Result;
};

const CalculationForm = ({
  salary,
  setSalary,
  setResult,
  result,
}: CalculationFormProps) => {
  const processDiscount = (event: any) => {
    event.preventDefault();
    if (validate(salary)) {
      let total: Result = CalculationService.Calculate(Number(salary));
      HistoryService.Set(total);
      setResult(total);
    }
  };
  const clear = () => {
    setResult(null);
    setSalary(0);
  };
  const validate = (salary: string): boolean => {
    let isValid: boolean = true;
    let message: string = "";
    const income = Number(salary);
    try {
      if (isNaN(income)) {
        message = "Debe de introducir un salario válido";
        isValid = false;
      }
      if (income < 0 || income === 0) {
        message = "Debe de introducir un salario mayor a 0";
        isValid = false;
      }
    } catch (error) {
      message =
        "Hubo un error al calcular el descuento, intente de nuevo más tarde.";
      isValid = false;
    }

    if (!isValid) {
      alert(message);
    }
    return isValid;
  };

  return (
    <Form onSubmit={(e) => processDiscount(e)}>
      <h2>Ingrese su sueldo:</h2>
      <br />
      <Input
        type="number"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />
      <br />
      <Button marginTop="1" primary>
        Calcular
      </Button>
      {result && (
        <Button onClick={() => clear()} secondary>
          Limpiar
        </Button>
      )}
    </Form>
  );
};
// salary: string;
// setSalary: any;
// setResult: any;
// result: Result;
CalculationForm.propTypes = {
  salary: propTypes.string.isRequired,
  setSalary: propTypes.any.isRequired,
  setResult: propTypes.any.isRequired,
  result: propTypes.object.isRequired,
};

export default CalculationForm;
