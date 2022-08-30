

import {useForm} from 'react-hook-form';
import { useState } from "react";

const { Paper, Box, Button, Typography, Stack, TextField, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Alert, Select, MenuItem, FormControl, InputLabel, TablePagination } = require("@mui/material");
const { CompCoverPage } = require("comps/comp_cover_page");



function createData(alumno, puntaje1, puntaje2, puntaje3, puntaje4,resultado) {
  return { alumno, puntaje1, puntaje2, puntaje3, puntaje4,resultado };
}

const rows =[ 

   createData('Alumno1',1,2,3,4,124),
   createData('Alumno2',51,6,7,81,55),
   createData('Alumno3',52,64,74,85,98),
   createData('Alumno4',5,6,7,83,106),
   createData('Alumno5',54,665,77,83,100),
]



function HistoryDate(props){

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  
const {register,reset,formState: { errors },handleSubmit}= useForm();
const onSubmit=(data)=>{
    console.log(data)
}
const onclear=()=>{
    reset();
}


  return(
   <>
   <CompCoverPage>
     <Paper sx={{backgroundColor: "#489e12",opacity: 0.8}}    elevation={24}>

        

     <Stack spacing={5}>
        <Paper >
        <form className="formhistorydate" onSubmit={handleSubmit(onSubmit)}>
             <div className="filtros">
             <Typography variant="subtitle1" >  Filtros</Typography>
             <Stack direction="row" spacing={5}>
                <TextField label="Alumno" variant="filled"  
                    
                    {...register('alumno',{


                        required:true,
                        maxLength:100
                      })}


                    ></TextField>
                  
                <TextField label="Puntaje 1" variant="filled"
                {...register('puntaje1',{


                    required:true,
                    max:100
                  })}
                
                
                ></TextField>
                <TextField label="Puntaje 2" variant="filled" 
                
                {...register('puntaje2',{


                    required:true,
                    max:100
                  })}
                ></TextField>
             </Stack>
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             <Stack  direction="row" spacing={5}>

             {errors.alumno?.type === 'required' && <Alert severity="error">Alumno es un Campo requerido</Alert>}
             {errors.alumno?.type === 'maxLength' && <Alert severity="error">Alumno es un debe ser mas corto</Alert>}
             {errors.puntaje1?.type === 'required' && <Alert severity="error">Puntaje 1 es un Campo requerido</Alert>}
             {errors.puntaje1?.type === 'max' && <Alert severity="error">Puntaje 1 es un debe ser mas bajo</Alert>}
             {errors.puntaje2?.type === 'required' && <Alert severity="error">Puntaje 2 es un Campo requerido</Alert>}
             {errors.puntaje2?.type === 'max' && <Alert severity="error">Puntaje 2 es un debe ser mas bajo</Alert>}

             </Stack>
             &nbsp;&nbsp;
             &nbsp;&nbsp;

             <Stack direction="row" spacing={8}>

               <FormControl sx={{width: 300}}>
               <InputLabel id="demo-simple-select-label">Recomendable</InputLabel>
               <Select label="Recomendable" variant="filled"
                {...register('Recomendable')}
               
                
                >


              <MenuItem value={"SI"}>Si</MenuItem>
              <MenuItem value={"NO"}>NO</MenuItem>
               
                </Select>




               </FormControl>

               




                <TextField label="Puntaje 3" variant="filled"
                  {...register('puntaje3',{


                    required:true,
                    max:100
                  })}
                ></TextField>
                <TextField label="Puntaje 4" variant="filled"
                  {...register('puntaje4',{


                    required:true,
                    max:100
                  })}
                
                ></TextField>
             </Stack>
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             <Stack  direction="row" spacing={5}>

             
             {errors.puntaje3?.type === 'required' && <Alert severity="error">Puntaje 3 es un Campo requerido</Alert>}
             {errors.puntaje3?.type === 'max' && <Alert severity="error">Puntaje 3 es un debe ser mas bajo</Alert>}
             {errors.puntaje4?.type === 'required' && <Alert severity="error">Puntaje 4 es un Campo requerido</Alert>}
             {errors.puntaje4?.type === 'max' && <Alert severity="error">Puntaje 4 es un debe ser mas bajo</Alert>}

             </Stack>
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             </div>
             <Grid container justifyContent="flex-end">

                        <Stack direction="row" spacing={5}>
                        <Button variant="contained">
                             <Typography variant="h6" color={"black"} onClick={onclear}> Limpiar</Typography>
                              
                              </Button >

                              <Button variant="contained" type="submit">
                             <Typography variant="h6" color={"black"}> Filtrar</Typography>
                              
                              </Button>
                              &nbsp;&nbsp;
                        </Stack>

                             
            </Grid>


        </form>
        </Paper>

        <div>
        <TableContainer component={Paper}>
         <Table>
         <TableHead>
            <TableRow sx={{background:"grey"}}>
            <TableCell align="center" >                      
            <Typography variant="h6" > Alumno</Typography>
            </TableCell>
            <TableCell align="center">                      
            <Typography variant="h6" > Puntaje 1</Typography>
            </TableCell>
            <TableCell align="center">                      
            <Typography variant="h6" > Puntaje 2</Typography>
            </TableCell>
            <TableCell align="center">                      
            <Typography variant="h6" > Puntaje 3</Typography>
            </TableCell>
            <TableCell align="center">                      
            <Typography variant="h6" > Puntaje 4</Typography>
            </TableCell>
            <TableCell align="center">                      
            <Typography variant="h6" > Resultado</Typography>
            </TableCell>

            </TableRow>
         </TableHead>
         <TableBody>
             {rows.slice().map((row)=>(

                <TableRow
                key={row}
                tabIndex={-1}
                >
                   <TableCell align="center">{row.alumno}</TableCell>
                   <TableCell align="center">{row.puntaje1}</TableCell>
                   <TableCell align="center">{row.puntaje2}</TableCell>
                   <TableCell align="center">{row.puntaje3}</TableCell>
                   <TableCell align="center">{row.puntaje4}</TableCell>
                   <TableCell align="center">{row.resultado}</TableCell>


                </TableRow>





             ))





             }





         </TableBody>



         </Table>



            
        </TableContainer>
        <TablePagination sx={{background:"grey"}}
                             rowsPerPageOptions={[5, 10, 25]}
                             component="div"
                             count={rows.length}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             onPageChange={handleChangePage}
                             onRowsPerPageChange={handleChangeRowsPerPage}
                            
                            >

                    </TablePagination>



        </div>
       



        <Grid container justifyContent="flex-end">

<Stack direction="row" spacing={5}>
<Button variant="contained">
     <Typography variant="h6" color={"black"}> Estadisticas</Typography>
      
      </Button >

      <Button variant="contained">
     <Typography variant="h6" color={"black"}> Salir</Typography>
      
      </Button>
      &nbsp;&nbsp;
</Stack>

     
        </Grid>

     </Stack>
       




     </Paper>

   </CompCoverPage>
   
   
   
   </>
  );









}
export default HistoryDate