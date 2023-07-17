import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  secondForm: {
    backgroundColor: "#ECECEC",
    borderRadius: "5px",
    minHeight: "100vh",
    padding: "20px",
  },
  formTopText: {
    textAlign: "center",
    padding: "20px",
  },
  vehicleDetails:{
    backgroundColor:"white",
    border:"1px solid gray",
    borderRadius:"5px",
    padding:"30px",
    position:"relative"
  },
  vehicleBox:{
position:"absolute",
backgroundColor:"white",
borderRadius:"5px",
width:"200px",
textAlign:"center",
border:"1px solid gray",
top:"-21px",
left:"20px",
padding:"10px",
textAlign:"center",
  },
}));
