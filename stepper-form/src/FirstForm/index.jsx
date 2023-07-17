import {
  Box,
  Grid,
  Group,
  Text,
  TextInput,
  Title,
  Button,
  Select,
  Checkbox,
  Paper,
  Divider,
  Container,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Calendar, CurrencyDollar, Phone } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import React, { useRef, useState } from "react";
import { useStyles } from "./styles";
import InputMask from "react-input-mask";
import SignatureCanvas from "react-signature-canvas";
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const FirstForm = () => {
  let sigCanvas = useRef();
  const [addAddress, setAddAddress] = useState([
    { a: "", b: "", c: "", d: "" },
  ]);
  const [addEmployee, setAddEmployee] = useState([
    { a: "", b: "", c: "", d: "" },
  ]);
  const [isChecked, setIsChecked] = useState(false);
  const { classes } = useStyles();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      homePhoneNo: "",
      cellNo: "",
      ssn: "",
      dob: "",
      driverLicenseState: "",
      driverLicenseNumber: "",
      driverLicenseIssueDate: "",
      driverLicenseExpiryDate: "",
      housingType: "",
      monthlyRent: "",
      residentialYearsAtAddress: "",
      residentialMonthsAtAddress: "",
      previousAddress: [],
      employeeName: "",
      employeePosition: "",
      businessPhoneNumber: "",
      grossMonthlyRate: "",
      employeeYearsAtAddress: "",
      employeeMonthsAtAddress: "",
      vehicleRetailPrice: "",
      exteriorColor: "",
      interiorColor: "",
      downPayment: "",
      monthlyInstallement: "",
    },

    validate: {
      firstName: (value) =>
        /^[A-Za-z\s]{1,10}$/.test(value.trim()) ? null : "invalid name",
      middleName: (value) =>
        /^[A-Za-z\s]{1,10}$/.test(value.trim()) ? null : "invalid name",
      lastName: (value) =>
        /^[A-Za-z\s]{1,10}$/.test(value.trim()) ? null : "invalid name",
      state: (value) => (value !== "" ? null : "invalid"),
      city: (value) => (value !== "" ? null : "invalid"),
      zipCode: (value) =>
        value.length <= 5 && value.length >= 0 ? null : "invalid",
      homePhoneNo: (value) => (value !== "" ? null : "invalid"),
      cellNo: (value) => (value !== "" ? null : "invalid"),
      ssn: (value) => (value !== "" ? null : "invalid"),
      email: (value) =>
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim())
          ? null
          : "invalid",
      driverLicenseState: (value) => (value !== "" ? null : "invalid"),
      driverLicenseNumber: (value) => (value !== "" ? null : "invalid"),
      driverLicenseIssueDate: (value) => (value !== "" ? null : "invalid"),
      driverLicenseExpiryDate: (value) => (value !== "" ? null : "invalid"),
      housingType: (value) => (value !== "" ? null : "invalid"),
      monthlyRent: (value) => (value !== "" ? null : "invalid"),
      residentialYearsAtAddress: (value) =>
        value.length <= 50 ? null : "invalid",
      residentialMonthsAtAddress: (value) => (value !== "" ? null : "invalid"),
      employeeName: (value) => (value !== "" ? null : "invalid"),
      employeePosition: (value) => (value !== "" ? null : "invalid"),
      businessPhoneNumber: (value) => (value !== "" ? null : "invalid"),
      grossMonthlyRate: (value) => (value !== "" ? null : "invalid"),
      employeeYearsAtAddress: (value) => (value !== "" ? null : "invalid"),
      employeeMonthsAtAddress: (value) => (value !== "" ? null : "invalid"),
      vehicleRetailPrice: (value) => (value !== "" ? null : "invalid"),
      exteriorColor: (value) => (value !== "" ? null : "invalid"),
      interiorColor: (value) => (value !== "" ? null : "invalid"),
      downPayment: (value) => (value !== "" ? null : "invalid"),
      monthlyInstallement: (value) => (value !== "" ? null : "invalid"),
    },
  });
  //   const handleOpenPreviousAddress = (index) => {
  //     const previousAddress = form.values.previousAddress[index];
  //     if (previousAddress) {
  //       form.setValues({
  //         ...form.values,
  //         housingType: previousAddress.housingType,
  //         monthlyRentOrMortgage: previousAddress.monthlyRentOrMortgage,
  //         yearsAtCurrentAddress: previousAddress.yearsAtCurrentAddress,
  //         monthsAtCurrentAddress: previousAddress.monthsAtCurrentAddress,
  //       });
  //     }
  //   };
  const handleChecked = (event) => {
    setIsChecked(event.currentTarget.checked);
  };
  const saveSinature = () => {
    const signatureData = sigCanvas.current.getTrimmedCanvas();
    console.log("signatureData is:", signatureData);
  };

  return (
    <Box className={classes.firstForm}>
      <Box className={classes.formTopText}>
        <Title order={2}>Add Credit Application</Title>
        <Text>
          Fill in the data to add Data. It will take a couple of minutes.
        </Text>
      </Box>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box className={classes.customerInformation}>
          <Box className={classes.customerBox}>Customer Information</Box>
          <Grid>
            <Grid.Col md={12}>
              <TextInput
                withAsterisk
                label="First Name"
                placeholder="first name"
                {...form.getInputProps("firstName")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Middle Name"
                placeholder="middel name"
                {...form.getInputProps("middleName")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Last Name"
                placeholder="middel name"
                {...form.getInputProps("lastName")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Select
                withAsterisk
                label="State"
                placeholder="state"
                {...form.getInputProps("state")}
                data={states.map((state, index) => ({
                  value: state,
                  label: state,
                }))}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Select
                withAsterisk
                label="City"
                placeholder="city"
                data={[
                  { value: "", label: "" },
                  { value: "", label: "Manual" },
                  { value: "", label: "" },
                  { value: "", label: "" },
                  { value: "", label: "" },
                ]}
                {...form.getInputProps("city")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                type="number"
                label="Zip Code"
                placeholder="zip code"
                {...form.getInputProps("zipCode")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="youremail@gmail.com"
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                icon={<Phone size={20} color={"gray"} />}
                component={InputMask}
                mask="+ 99 9999 99999"
                withAsterisk
                label="Home Phone No"
                placeholder=" Home Phone Number"
                {...form.getInputProps("homePhoneNo")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                icon={<Phone size={20} color={"gray"} />}
                component={InputMask}
                mask="+ 99 9999 999999"
                withAsterisk
                label="Cell No"
                placeholder=" Cell No"
                {...form.getInputProps("cellNo")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                icon={<Phone size={20} color={"gray"} />}
                component={InputMask}
                mask="999-99-9999"
                withAsterisk
                label="SSN"
                placeholder="ssn"
                {...form.getInputProps("ssn")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DateInput
                withAsterisk
                label="Date Of Birth "
                placeholder="Pick Date "
                clearable
                {...form.getInputProps("dob")}
                //   {...<CloseButton/>}
              ></DateInput>
            </Grid.Col>

            {/* <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group> */}
          </Grid>
        </Box>
        {/* </form> */}
        <Box className={classes.licenseInformation}>
          <Box className={classes.licenseBox}>License Information</Box>
          <Grid>
            <Grid.Col md={6}>
              <Select
                withAsterisk
                label="Driver's License State"
                placeholder="Enter Driver's License State"
                {...form.getInputProps("driverLicenseState")}
                data={states.map((state, index) => ({
                  value: state,
                  label: state,
                }))}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                //   icon={<Phone size={20} color={"gray"} />}
                component={InputMask}
                mask="aa 999999 9999"
                withAsterisk
                label="Driver's License No"
                placeholder=" Enter Driver's License Number"
                {...form.getInputProps("driverLicenseNumber")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DateInput
                withAsterisk
                label="Driver's License Issue Date"
                placeholder=" Enter Driver's License Issue Date"
                clearable
                {...form.getInputProps("driverLicenseIssueDate")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DateInput
                withAsterisk
                label="Driver's License Expiry Date"
                placeholder=" Enter Driver's License Expiry Date"
                disabled={!form.values.driverLicenseIssueDate}
                {...form.getInputProps("driverLicenseExpiryDate")}
                clearable
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Box className={classes.residentialInformation}>
          <Box className={classes.residentialBox}>Residential Information</Box>
          {addAddress.map((_, ind) => (
            <Grid
              style={{
                borderTop: ind === 1 ? "2px solid gray" : "",
                marginTop: "20px",
              }}
            >
              <Grid.Col md={12}>
                {ind === 1 && (
                  <Title order={3} style={{ color: "gray" }}>
                    Previous Data
                  </Title>
                )}
              </Grid.Col>
              <Grid.Col md={6}>
                <Select
                  withAsterisk
                  label="Housing Type"
                  placeholder="Select Housing Type"
                  {...form.getInputProps("housingType")}
                  data={[
                    { value: "Rent", label: "Rent" },
                    { value: "Own", label: "Own" },
                    { value: "Other", label: "Other" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<CurrencyDollar size={20} color={"gray"} />}
                  withAsterisk
                  label="Monthly Rent/Mortgage"
                  placeholder=" Enter Monthly Rent"
                  clearable
                  {...form.getInputProps("monthlyRent")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Calendar ize={20} color={"gray"} />}
                  type="number"
                  withAsterisk
                  label="Years At Address"
                  placeholder=" Enter Years"
                  //   clearable
                  {...form.getInputProps("residentialYearsAtAddress")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Calendar ize={20} color={"gray"} />}
                  type="number"
                  withAsterisk
                  label="Month At Addres"
                  placeholder=" Enter Months"
                  {...form.getInputProps("residentialMonthAtAddress")}
                  clearable
                />
              </Grid.Col>
            </Grid>
          ))}
          <Group position="right" mt={20}>
            <Button
              onClick={() =>
                setAddAddress([...addAddress, { a: "", b: "", c: "", d: "" }])
              }
              disabled={addAddress.length === 2}
            >
              Add Another
            </Button>
          </Group>
        </Box>
        <Box className={classes.employmentInformation}>
          <Box className={classes.employmentBox}>Employee Information</Box>
          {addEmployee.map((_, ind) => (
            <Grid
              style={{
                borderTop: ind === 1 ? "2px solid gray" : "",
                marginTop: "20px",
              }}
            >
              <Grid.Col md={12}>
                {ind === 1 && (
                  <Title order={3} style={{ color: "gray" }}>
                    New Employee
                  </Title>
                )}
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  withAsterisk
                  label="Employee Name"
                  type="text"
                  placeholder="Enter Employeer Name"
                  {...form.getInputProps("employeeName")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  // icon={<CurrencyDollar size={20} color={"gray"} />}
                  withAsterisk
                  label="Your Title/Position"
                  placeholder=" Enter Position"
                  type="text"
                  // clearable
                  {...form.getInputProps("employeePosition")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Phone ize={20} color={"gray"} />}
                  component={InputMask}
                  mask="+ 99 999999 9999"
                  withAsterisk
                  label="Bussiness Phone Number"
                  placeholder=" Business Phone Number"
                  //   clearable
                  {...form.getInputProps("businessPhoneNumber")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Calendar ize={20} color={"gray"} />}
                  type="number"
                  withAsterisk
                  label="Gross Monthly Salary "
                  placeholder=" Enter monthly rate"
                  {...form.getInputProps("grossMonthlyRate")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Calendar ize={20} color={"gray"} />}
                  type="number"
                  withAsterisk
                  label="Years At Address"
                  placeholder=" Enter Years"
                  //   clearable
                  {...form.getInputProps("employeeYearsAtAddress")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  icon={<Calendar ize={20} color={"gray"} />}
                  type="number"
                  withAsterisk
                  label="Month At Addres"
                  placeholder=" Enter Months"
                  {...form.getInputProps("employeeMonthsAtAddress")}
                  clearable
                />
              </Grid.Col>
            </Grid>
          ))}
          <Group position="right" mt={20}>
            <Button
              onClick={() =>
                setAddEmployee([...addEmployee, { a: "", b: "", c: "", d: "" }])
              }
              disabled={addEmployee.length === 2}
            >
              Add Another
            </Button>
          </Group>
        </Box>
        <Box className={classes.vehicleRequested}>
          <Box className={classes.vehicleRequestedBox}>Vehicle Requested</Box>
          <Grid classNames={classes.vehicleRequestedDiv}>
            <Grid.Col md={6}>
              <Paper className={classes.vehicleInterested}>
                <Title order={4}>Vehicle Interested</Title>
                <hr></hr>
                <Grid>
                  <Grid.Col md={12}>
                    <TextInput
                      withAsterisk
                      label="Name"
                      placeholder="Enter Name"
                      disabled
                      {...form.getInputProps("")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Year"
                      placeholder="Enter Year"
                      disabled
                      {...form.getInputProps("")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="VIN"
                      placeholder="Enter VIN"
                      disabled
                      {...form.getInputProps("")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Make"
                      placeholder="Make"
                      disabled
                      {...form.getInputProps("")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Model"
                      placeholder="Model"
                      disabled
                      {...form.getInputProps("")}
                    />
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <TextInput
                      withAsterisk
                      type="number"
                      label="Vehicle Retail Price"
                      placeholder="Enter Price"
                      {...form.getInputProps("vehicleRetailPrice")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Exterior Color"
                      type="text"
                      placeholder="Vehicle Exterior Color"
                      {...form.getInputProps("exteriorColor")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Interior Color"
                      type="text"
                      placeholder="Vehicle Interior Color"
                      {...form.getInputProps("interiorColor")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Down Payment"
                      type="number"
                      placeholder="Enter Down Payment"
                      {...form.getInputProps("downPayment")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Monthly Installement"
                      type="number"
                      placeholder="Enter Monthly Installement"
                      {...form.getInputProps("monthlyInstallement")}
                    />
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
            <Grid.Col md={6}>
              <Paper className={classes.tradeIn}>
                <Checkbox onChange={handleChecked} />
                <Title order={4}>Trade IN</Title>
                <hr></hr>
                <Grid>
                  <Grid.Col md={12}>
                    {
                      <TextInput
                        withAsterisk
                        label="VIN"
                        placeholder="Enter VIN"
                        disabled={!isChecked}
                      />
                    }
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Make"
                      placeholder="Make"
                      disabled
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Model"
                      placeholder="Model"
                      disabled
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Year"
                      placeholder="Enter Year"
                      disabled
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      withAsterisk
                      label="Milage"
                      placeholder="Enter Vehicel Milage"
                      disabled={!isChecked}
                    />
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
          </Grid>
        </Box>
      </form>
      <Divider
        size={2}
        my="xl"
        label="Customer Identity"
        labelPosition="center"
      />
      <Container
        fluid
        size={1980}
        m={0}
        p={0}
        style={{
          overflow: "hidden",
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <SignatureCanvas
          penColor="green"
          ref={(ref) => {
            sigCanvas = ref;
          }}
          canvasProps={{ className: "sigCanvas", width: 1980, height: 204 }}
        />
      </Container>

      <Button
        onClick={() => {
          sigCanvas.clear();
        }}
      >
        Clear
      </Button>
      <Button onClick={saveSinature}>Trim</Button>
    </Box>
  );
};

export default FirstForm;
