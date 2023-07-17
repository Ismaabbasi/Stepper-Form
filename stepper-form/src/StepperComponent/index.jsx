import React, { useState } from "react";
import { useStyles } from "./styles";
import { Group, Text, Stepper, Button } from "@mantine/core";
import FirstForm from "../FirstForm";
import SecondForm from "../SecondForm";
import ThirdForm from "../ThirdForm";
const StepperComponent = () => {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        className={classes.stepperClass}
      >
        <Stepper.Step label="First step" description="Credit Information">
          <FirstForm />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Test Driver">
         <SecondForm/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Bank">
        <ThirdForm/>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="right" mt="xl">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
};
export default StepperComponent;
