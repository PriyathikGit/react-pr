import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router-dom"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';




const Container = () => {
    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate()
    const handleChange = () => {
        navigate("/register")
    }
    const handleOpen = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
        setOpen(true);
    };

    const handleClose = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        setOpen(false);
    };


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setShowError(false);
    };

    const handleSave = () => {
        if (!selectedOption) {
            setShowError(true)
            return
        }
        else{
            alert('thank you for submission')
        }
        setSelectedOption(null)
        setShowError(false)
    }

    return (
        <>
            <Stack direction="row" spacing={2} sx={{ width: "75vw", backgroundColor: "cyan", marginLeft: "280px", padding: "8px", borderRadius: "10px", bgcolor: "rgb(215, 208, 255)", alignItems: "center", marginTop: "50px", justifyContent: "space-between" }}>
                <Stack direction={"row"} alignItems={"center"} spacing={5}>
                    <div style={{ height: "30px", width: "3px", background: "rgb(39, 24, 126)", marginLeft: "4px" }}></div>
                    <Typography sx={{ color: "rgb(39, 24, 126)" }}>Corporate information</Typography>
                </Stack>
                <BorderColorIcon onClick={handleChange} sx={{ cursor: "pointer" }} />
            </Stack>
            <Box sx={{ flexDirection: "row", display: "flex" }}>
                <Stack direction="row" spacing={2} sx={{ width: "40vw", backgroundColor: "cyan", marginLeft: "280px", padding: "10px", borderRadius: "10px", bgcolor: "rgb(215, 208, 255)", alignItems: "center", marginTop: "30px", justifyContent: "space-between" }}>
                    <Stack direction={"row"} alignItems={"center"} spacing={5}>
                        <div style={{ height: "30px", width: "4px", background: "rgb(39, 24, 126)", marginLeft: "4px" }}></div>
                        <Typography sx={{ color: "rgb(39, 24, 126)" }}>Allowances</Typography>
                    </Stack>
                    <BorderColorIcon onClick={handleOpen} sx={{ cursor: "pointer" }} />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ width: "35vw", backgroundColor: "cyan", marginLeft: "50px", padding: "10px", borderRadius: "10px", bgcolor: "rgb(215, 208, 255)", alignItems: "center", marginTop: "30px", justifyContent: "space-between", marginRight: "20px" }}>
                    <Stack direction={"row"} alignItems={"center"} spacing={5}>
                        <div style={{ height: "30px", width: "4px", background: "rgb(39, 24, 126)", marginLeft: "4px" }}></div>
                        <Typography sx={{ color: "rgb(39, 24, 126)" }}>Others</Typography>
                    </Stack>
                    <BorderColorIcon onClick={handleChange} sx={{ cursor: "pointer" }} />
                </Stack>
            </Box>

            <Box>
                <Box position={"absolute"} right={0}>
                    <Stack direction="row" sx={{ width: "37vw", marginRight: "30px", marginTop: "3px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"50px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Retention Rate Of New Graduate Hires</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>Over 50%</Typography>
                    </Stack>
                </Box>
                <Box position={"absolute"} right={0} top={240}>
                    <Stack direction="row" sx={{ width: "38vw", marginRight: "30px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"50px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Work Style ( Overseas Bases )</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>yes</Typography>
                    </Stack>
                </Box>
                <Box position={"absolute"} right={0} top={300}>
                    <Stack direction="row" sx={{ width: "39vw", marginRight: "30px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"80px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Working Environment</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>Not Working</Typography>
                    </Stack>
                </Box>
            </Box>

            <Stack direction="row" position={"absolute"} right={0} top={320} spacing={2} sx={{ width: "35vw", backgroundColor: "cyan", marginLeft: "50px", padding: "10px", borderRadius: "10px", bgcolor: "rgb(215, 208, 255)", alignItems: "center", marginTop: "50px", justifyContent: "space-between", marginRight: "20px" }}>
                <Stack direction={"row"} alignItems={"center"} spacing={5}>
                    <div style={{ height: "30px", width: "4px", background: "rgb(39, 24, 126)", marginLeft: "4px" }}></div>
                    <Typography sx={{ color: "rgb(39, 24, 126)" }}>Holidays</Typography>
                </Stack>
                <BorderColorIcon onClick={handleChange} sx={{ cursor: "pointer" }} />
            </Stack>

            <Box position={"absolute"} right={0} top={420}>
                <Box>
                    <Stack direction="row" sx={{ width: "41vw", marginRight: "30px", marginTop: "3px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"50px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Summer Holidays</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>Yes</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction="row" sx={{ width: "40vw", marginRight: "30px", marginTop: "3px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"50px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Golden Weeks</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>Yes</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction="row" sx={{ width: "40vw", marginRight: "30px", marginTop: "3px", height: "55px", alignItems: "center", justifyContent: "space-around" }} >
                        <Typography fontFamily={"Roboto,sans-serif"} bgcolor={"rgb(247, 247, 247)"} paddingRight={"50px"}
                            height={"55px"} borderRight={"1px solid white"} alignItems={"center"} display={"flex"}>Other Holidays</Typography>
                        <Typography paddingRight={"65px"} height={"55px"} width={"30px"} display={"flex"} alignItems={"center"}>Yes</Typography>
                    </Stack>
                </Box>
            </Box>

            <Box height={"80vh"} width={"60vw"} overflow={"scroll"} alignItems={"center"} marginRight={22} bottom={"40px"} position={"absolute"} right={0} sx={{ bgcolor: "white", overflowX: "hidden", display: "none", boxShadow:'10px 10px 18px' }} id="modal">
                <Stack display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography margin={"12px 32px"} fontSize={22} fontWeight={"bold"}>Allowances</Typography>
                    <CloseIcon sx={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClose} />
                </Stack>

                {/* stack container */}

                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Salary System Based On Meritocracy</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>120 Or More Annual Holidays</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Generous Welfare Benifits</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Enhanced Education And Training</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Support System For Acquriring Qualification</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Reduced Working Hours System</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Maternity Care Leave System</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Company Housing / Rent Subsidy</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Family Allowance</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Employee Stock Ownership</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Side Job Available</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Mentor System</Typography>
                    <Stack display={"flex"} flexDirection={"coloumn"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                        {showError && (
                            <div style={{ color: 'red' }} className="danger">
                                This is required
                            </div>
                        )}
                    </Stack>
                </Stack>
                <Stack display={"flex"} marginTop={2} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <div style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}>*</div>
                    <Typography fontSize={19}>Career Consulting</Typography>
                    <Stack display={"flex"} flexDirection={"row"} marginRight={"0 10px"} ><FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <Stack display={"flex"} flexDirection={"row"}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" 
                                    onChange={handleOptionChange} />
                                <FormControlLabel value="no" control={<Radio />} label="No" 
                                    onChange={handleOptionChange} />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    </Stack>
                </Stack>

                {/* buttton */}

                <Stack marginTop={"50px"} alignItems={"center"} marginBottom={5}>
                    <Button variant="contained" onClick={handleSave} sx={{ width: "14rem", bgcolor: "rgb(39, 24, 124)" }} >save</Button>
                </Stack>

            </Box>
        </>



    );
}

export default Container