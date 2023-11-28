import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Box, Button, Stack, Typography } from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Register = () => {
  const [save, setSave] = useState(true)

  const handlesave = () => {
    let allInputs = document.getElementsByClassName("danger");
    if (save) {
      for (let input of allInputs) {
        if (input.value === "") {
          input.style.border = "1px solid red"
          console.log("hello")
          setSave(true)
        }
        else {
          setSave(false)
        }
      }
    }
  }

  return (
    <>
      <div style={{
        position: "absolute", right: "0", width: "80vw", height: "165vh"
      }}>
        <Container>
          <Box display={"flex"} gap={35} alignItems={"center"}>
            <Stack width="20rem">
              <Typography display={"flex"} alignItems={"center"} width={"auto"}>Buisness Description <span style={{ color: "red", fontSize: "30px", position: "relative", left: "10px", top: "8px" }}
              >*</span></Typography>
              <input type='text' className="danger" style={{ height: "7rem", width: "30rem" }}></input>
            </Stack>
            <Stack width="20rem">
              <Typography display={"flex"} alignItems={"center"} width={"auto"} marginTop={"8px"}>Corporate Philosphy</Typography>
              <input type='text' className="danger" style={{ height: "7rem", width: "30rem", marginTop: "16px" }}></input>
            </Stack>
          </Box>

          <Box marginTop={"70px"} >
            <Box display={"flex"} gap={28}>
              <Stack>
                <Typography display={"flex"}>Company name <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Industry</Typography>
                <input type='text'  style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Mail ID <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Phone number <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text className="danger"' style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Location</Typography>
                <input type='text'  style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Website<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Working Hours <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Establishment Date</Typography>
                <input type='text'  style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Initial Capital<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Representative <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Branch </Typography>
                <input type='text'  style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Number Of Employees<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Sales Revenue <span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Operation Profit </Typography>
                <input type='text'  style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Avrage Age Of Employees<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "170%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Stock<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Linkedin Link</Typography>
                <input type='text' style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Twitter Link<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
            <Box display={"flex"} gap={28} marginTop={"15px"}>
              <Stack>
                <Typography display={"flex"}>Facebook Link<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
              <Stack>
                <Typography>Instagram Link</Typography>
                <input type='text' style={{ width: "200%", height: "50px", position: "relative", top: "1px" }}></input>
              </Stack>
              <Stack>
                <Typography display={"flex"}>Youtube Link<span style={{ color: "red", fontSize: "25px", height: "0px" }}>*</span></Typography>
                <input type='text' className="danger" style={{ width: "200%", height: "50px" }}></input>
              </Stack>
            </Box>
          </Box>

          <Box marginTop={"50px"}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Foriegn owned</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Stack display={"flex"} flexDirection={"row"}>
                  <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio />} label="No" />
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>

          <Stack marginTop={"50px"} alignItems={"center"}>
            <Button variant="contained" sx={{ width: "14rem", bgcolor: "rgb(39, 24, 124)" }} onClick={handlesave}>save</Button>
          </Stack>

        </Container>
      </div>
    </>
  )
}

export default Register