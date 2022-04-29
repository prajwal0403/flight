import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_data } from '../Redux/FlightRedux/FlightActions';

export default function Home() {
    const  dispatch= useDispatch();
    const {data , isLoading,error}= useSelector((store)=>store.getData)

      const [input,setInput]=useState({
          start:"",
          end:""
      })
     useEffect(()=>{
         FetchData()
     },[])
       
    const getInfo= (e)=>{
        let {id,value}= e.target;
         setInput({...input, [id]:value})

    }
    const FetchData=()=>{
          dispatch(fetch_data(input.start, input.end))
    }
    console.log(data)
  return (
<>
<AppBar>
    <Toolbar>
        <Typography>Welcome to My  Flight </Typography>
    </Toolbar>
</AppBar>

<Box sx={{margin:"auto" , marginTop:"90px" , width:"60%" , display:"flex",justifyContent:"space-around"}}>
 <TextField id='start' label="From" variant='outlined' onChange={getInfo}/>
 <TextField  id="end" label="To" variant='outlined' onChange={getInfo}/>
 <Button variant='outlined' onClick={FetchData}>Serach</Button>
</Box>
<Box sx={{margin:"auto", marginTop:"40px", width:"80%" ,}}>
 {isLoading?<img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'/>:<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Airline Name</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Departure</TableCell>
            <TableCell align="right">Arrival</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length==0?<img src='https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif'  style={{marginLeft:"40px"}}/>:data.map((row ,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {index+1}
              </TableCell>
              <TableCell align="right">{row.airlineName}</TableCell>
              <TableCell align="right">{row.cost} ₹</TableCell>
              <TableCell align="right">{row.startTime} from {row.start_airport_id.location}</TableCell>
            
              <TableCell align="right">{row.endTime} at {row.end_airport_id.location}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
</Box>
</>
  )
}
