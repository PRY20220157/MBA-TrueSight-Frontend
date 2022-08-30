import {CompCoverPage} from "../../comps/comp_cover_page";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {useForm, useFormState} from 'react-hook-form'
import {useLocation, useNavigate} from "react-router";
import { Button, Stack, TableFooter, TablePagination, TextField, Typography } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { Box } from "@mui/material";

import './history.css'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const fechas =[new Date('2014-08-18T21:11:54'),new Date('2014-09-18T21:11:54'),new Date('2015-09-18T21:11:54'),new Date('2016-09-18T21:11:54'),new Date('2018-09-18T21:11:54')]
const  numero=[1,2,3,45,6,7,8,9,10,11]

function enterDetail(){




}



export const ViewHistory = props => {
     const navigate = useNavigate();
    
    const [FechaEntradas,SetFechas] = useState({

        fechadesde: new Date('2014-08-18T21:11:54'),
        fechahasta:new Date('2014-08-18T21:11:54')


    });

    const handleInputChange1=(data,event)=>{

        
        SetFechas({
                 ...FechaEntradas,
                 fechadesde: data

        })
        console.log(FechaEntradas)



    }
    const handleInputChange2=(data)=>{

        console.log(data);
        
        SetFechas({
                 ...FechaEntradas,
                 fechahasta: data

        })
        console.log(FechaEntradas)
            




    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
   






    return(<>


        <Grid>



            
        </Grid>
        <CompCoverPage>
           
            <Typography variant="h3" color={"white"}> Predicciones Realizadas</Typography>
             <Paper sx={{backgroundColor: "#D9D9D9"}}    elevation={24}    >

             <div className="filtros">
             <Typography variant="subtitle1" >  Filtros</Typography>
             </div>
            
             <form >
             &nbsp;&nbsp; &nbsp;&nbsp;
             
             <Grid container spacing={3}>

             <Grid item xs={8} alignItems="center" justifyContent="center">
            
             <LocalizationProvider dateAdapter={AdapterDateFns}>
            
                <Stack direction="row" spacing={5}>
                &nbsp;&nbsp; &nbsp;&nbsp;
       <DesktopDatePicker
      label="Desde"
      inputFormat="MM/dd/yyyy"
      value={FechaEntradas.fechadesde}
      name="fechadesde"
      onChange={handleInputChange1}
      renderInput={(params) => <TextField {...params} />}
      />
      
       <DesktopDatePicker
      label="Hasta"
      inputFormat="MM/dd/yyyy"
      value={FechaEntradas.fechahasta}
      name="fechahasta"
      onChange={handleInputChange2}
      renderInput={(params) => <TextField {...params} />}
         />
</Stack>
             </LocalizationProvider>


             </Grid>
            <Grid item xs={4}>

            <Button variant="contained" type="submit" size="large"> Filtrar</Button>

            </Grid >




             </Grid>
             
            
            
           
           
            
             

           



            
           
             </form>
             &nbsp;&nbsp;&nbsp;&nbsp;
             <TableContainer component={Paper} >
                <Table  >
                    <TableHead>
                              <TableRow >
                                <TableCell align="center" >
                                    
                                <Typography variant="h6" > Fecha</Typography>
                                </TableCell>
                                <TableCell align="center" >
                                <Typography variant="h6" > Acciones</Typography>
                                </TableCell>
                              </TableRow>
                    </TableHead>
                    <TableBody>

                      {numero.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((fecha)=>(
                        <TableRow
                        key={fecha}
                        tabIndex={-1}
                        
                        >
                       <TableCell align="center">{fecha}</TableCell>
                        <TableCell align="center">

   

                        <Button variant="contained" onClick={(e)=> navigate("/history/1")}>Ver Detalle</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="contained" color="error">Eliminar</Button>

  
  
                         </TableCell>
                       </TableRow>

                      ))}



                      
                    </TableBody>
                    

                  



                     


                </Table>



              </TableContainer>
              <TablePagination 
                             rowsPerPageOptions={[5, 10, 25]}
                             component="div"
                             count={numero.length}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             onPageChange={handleChangePage}
                             onRowsPerPageChange={handleChangeRowsPerPage}
                            
                            >

                    </TablePagination>
                    <Grid container justifyContent="flex-end">
                             <Button >
                             <Typography variant="h6" color={"#808080"}> Salir</Typography>
                              
                              </Button>
                      </Grid>


            



                
             </Paper>
              








        </CompCoverPage>
        







    </>);
}