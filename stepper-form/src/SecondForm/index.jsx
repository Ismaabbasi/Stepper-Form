import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Grid,
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

const SecondForm = () => {
  const [disabled, setDisabled] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      selectCustomer: "",
      VIN: "",
      vehicleMake: "",
      vehicleModel: "",
      temporaryTag: "",
      testDriverDate: "",
      startTime: "",
      endTime: "",
      totalTime: "",
    },
    validate: {
      selectCustomer: (value) => (value !== "" ? null : "invalid"),
      VIN: (value) => (value !== "" ? null : "invalid"),
      vehicleMake: (value) => (value !== "" ? null : "invalid"),
      vehicleModel: (value) => (value !== "" ? null : "invalid"),
      temporaryTag: (value) => (value !== "" ? null : "invalid"),
      testDriverDate: (value) => (value !== "" ? null : "invalid"),
      startTime: (value) => (value !== "" ? null : "invalid"),
      lastTime: (value) => (value !== "" ? null : "invalid"),
      totalTime: (value) => (value !== "" ? null : "invalid"),
    },
  });
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.secondForm}>
        <Box className={classes.formTopText}>
          <Title order={2}>Schedule Test Driver</Title>
          <Text>
            Fill in the data for Test Driver. It will take a couple of minutes.
          </Text>
        </Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Box className={classes.vehicleDetails}>
            <Box className={classes.vehicleBox}>Vehicle Details</Box>
            <Grid>
              <Grid.Col md={6}>
                <Select
                  withAsterisk
                  label="Select Customer"
                  placeholder="Select Customer"
                  disabled={disabled}
                  {...form.getInputProps("selectCustomer")}
                  data={[
                    {
                      label: "Customer 1",
                      value: "Customer 1",
                      label: "Customer 2",
                      value: "Customer 2",
                      label: "Customer 3",
                      value: "Customer 3",
                    },
                  ]}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <Select
                  withAsterisk
                  disabled={disabled}
                  types="text"
                  label="Vehicle VIN/Stock Number"
                  placeholder="569092"
                  data={[
                    {
                      label: "",
                      value: "",
                      label: "",
                      value: "",
                      label: "",
                      value: "",
                    },
                  ]}
                  {...form.getInputProps("VIN")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Tag size={20} color={"gray"} />}
                  withAsterisk
                  type="text"
                  label="Vehicle Make"
                  placeholder="Jeep"
                  disabled={disabled}
                  {...form.getInputProps("vehicleMake")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Tag size={20} color={"gray"} />}
                  withAsterisk
                  type="text"
                  label="Vehicle Model"
                  disabled={disabled}
                  placeholder="Grand Cherokee"
                  {...form.getInputProps("vehicleModel")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Tag size={20} color={"gray"} />}
                  withAsterisk
                  type="text"
                  label="Temporary Tag# For Test Drive"
                  disabled={disabled}
                  placeholder="N/A"
                  {...form.getInputProps("temporaryTag")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  //   icon={<Calendar size={20} color={"gray"} />}
                  withAsterisk
                  type="date"
                  label="Test Driver Date"
                  disabled={disabled}
                  placeholder=""
                  {...form.getInputProps("testDriverDate")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  disabled={disabled}
                  label="Start Time"
                  ref={ref1}
                  icon={
                    <ActionIcon onClick={() => ref1.current.showPicker()}>
                      <Clock size={20} color={"gray"} />
                    </ActionIcon>
                  }
                  {...form.getInputProps("startTime")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  disabled={disabled}
                  label="End Time"
                  ref={ref2}
                  icon={
                    <ActionIcon onClick={() => ref2.current.showPicker()}>
                      <Clock size={20} color={"gray"} />
                    </ActionIcon>
                  }
                  {...form.getInputProps("lastTime")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TimeInput
                  withSeconds
                  label="Total Test Drive Time"
                  ref={ref3}
                  rightSection={
                    <ActionIcon onClick={() => ref3.current.showPicker()}>
                      <Clock size={20} color={"gray"} />
                    </ActionIcon>
                  }
                  {...form.getInputProps("total")}
                />
              </Grid.Col>
            </Grid>
          </Box>
          <Divider
            size={2}
            my="xl"
            label="Customer Identity"
            labelPosition="center"
          />
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default SecondForm;
