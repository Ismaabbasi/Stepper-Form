import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { useRef } from "react";
import { useStyles } from "./styles";
import { useForm } from "@mantine/form";
import ReactInputMask from "react-input-mask";
import { Calendar, Clock, Disabled, Phone, Tag } from "tabler-icons-react";
import { TimeInput } from "@mantine/dates";

const ThirdForm = () => {
  const [disabled, setDisabled] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      Customer: "",
      customerCreditScore: "",
      Tier: "",
      vehicleCostPrice: "",
      vehicleRetailPrice: "",
      expectedAddOns: "",
      vehicleWithPriceOns: "",
      selectBank: "",
      amountFinanced: "",
      downPayment: "",
      installmentDuration: "",
      monthlyInstallment: "",
    },
    validate: {
      Customer: (value) => (value !== "" ? null : "invalid"),
      customerCreditScore: (value) => (value !== "" ? null : "invalid"),
      Tier: (value) => (value !== "" ? null : "invalid"),
      vehicleCostPrice: (value) => (value !== "" ? null : "invalid"),
      vehicleRetailPrice: (value) => (value !== "" ? null : "invalid"),
      expectedAddOns: (value) => (value !== "" ? null : "invalid"),
      vehicleWithPriceOns: (value) => (value !== "" ? null : "invalid"),
      selectBank: (value) => (value !== "" ? null : "invalid"),
      amountFinanced: (value) => (value !== "" ? null : "invalid"),
      downPayment: (value) => (value !== "" ? null : "invalid"),
      installmentDuration: (value) => (value !== "" ? null : "invalid"),
      monthlyInstallment: (value) => (value !== "" ? null : "invalid"),
    },
  });
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.thirdForm}>
        <Box className={classes.formTopText}>
          <Title order={2}>Add Financing Bank</Title>
        </Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Box className={classes.addFinancingBank}>
            {/* <Box className={classes.vehicleBox}>Vehicle Details</Box> */}
            <Grid>
              <Grid.Col md={12}>
                <TextInput
                  withAsterisk
                  label="Customer"
                  placeholder="Select Customer"
                  disabled={disabled}
                  {...form.getInputProps("Customer")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  withAsterisk
                  disabled={disabled}
                  label="Customer Credit Score"
                  placeholder="Enter Customer Credit Score"
                  {...form.getInputProps("customerCreditScore")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  withAsterisk
                  type="number"
                  label="Tier"
                  placeholder="Enetr Credit Score"
                  disabled={disabled}
                  {...form.getInputProps("Tier")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  withAsterisk
                  type="number"
                  label="Vehicle Cost Price"
                  disabled={disabled}
                  placeholder="Grand Cherokee"
                  {...form.getInputProps("vehicleCostPrice")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  withAsterisk
                  type="number"
                  label="Vehicle Retail Price"
                  disabled={disabled}
                  placeholder=""
                  {...form.getInputProps("vehicleRetailPrice")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  //   icon={<Calendar size={20} color={"gray"} />}
                  withAsterisk
                  type="number"
                  label="Expected Add Ons"
                  description="(6% Tax + Registration + Title + Lien + GAP + Warranty + dealer processing)"
                  disabled={disabled}
                  placeholder=""
                  {...form.getInputProps("expectedAddOns")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  disabled={disabled}
                  type="number"
                  label="Vehicle Price With Add Ons"
                  description="Vehicle Retail Price + Add Ons"
                  placeholder=""
                  {...form.getInputProps("vehicleWithPriceOns")}
                />
              </Grid.Col>
              <Grid.Col md={12}>
                <TimeInput
                  type="text"
                  disabled={disabled}
                  label="Select Bank"
                  placeholder="Type Bank"
                  {...form.getInputProps("selectBank")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  withAsterisk
                  type="number"
                  label="Amount Financed"
                  placeholder="Enter Amount"
                  {...form.getInputProps("amountFinanced")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  withAsterisk
                  type="number"
                  label="Down Payment"
                  placeholder="Down Payment"
                  {...form.getInputProps("downPayment")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  withAsterisk
                  type="number"
                  label="Instalment Duration "
                  placeholder="Down Payment"
                  {...form.getInputProps("installmentDuration")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  withAsterisk
                  type="number"
                  label="Monthly Instalment "
                  placeholder="Monthly Installment"
                  {...form.getInputProps("monthlyInstallment")}
                />
              </Grid.Col>
            </Grid>
          </Box>
          <Group position="right" mt={10}>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
};

export default ThirdForm;
