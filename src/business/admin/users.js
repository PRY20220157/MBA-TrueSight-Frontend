import React, {useEffect, useState} from "react";
import * as api_user from "api/api_user";
import {COLOR_SEC, COUNTRIES, UNIVERSITIES, USER_TYPES_NAMES} from "../../util/constants";
import {isStudent} from "../../util/util";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import {Button, Checkbox, Tooltip} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import {AdminPanelSettings, Hail, School} from "@mui/icons-material";
import {getDateTime} from "../../util/date";
import {deletePrediction, deleteUser} from "../../api/api_prediction";

export default function useUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [reload, setReload] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [idToDelete, setIdToDelete] = useState();

    useEffect(() => {
        if (reload)
            loadUsers()
    }, [reload]);
    const deleteUsr = async () => {
        setShowDialog(false)
        setLoading(true)
        await deleteUser(idToDelete).then(() => {
            setAlertMessage('Usuario eliminado exitosamente')
            setShowAlertSuccess(true)
            loadUsers().then(() => setShowAlertSuccess(false))
        })
    }
    const viewDetail = (event, cellValues) => {

    };
    const handleDelete = (event, cellValues) => {
        setIdToDelete(cellValues.row.id)
        setShowDialog(true)
    }
    const handleCloseDialog = () => {
        setShowDialog(false)
    }
    const renderUserType =(cellValues) => {
        switch (cellValues.row.userType){
            case USER_TYPES_NAMES[1]: return <><AdminPanelSettings sx={{color: COLOR_SEC}}/><>&nbsp;</>{cellValues.row.userType}</>
            case USER_TYPES_NAMES[2]: return <><School sx={{color: COLOR_SEC}}/><>&nbsp;</>{cellValues.row.userType}</>
            case USER_TYPES_NAMES[3]: return <><Hail sx={{color: COLOR_SEC}}/><>&nbsp;</>{cellValues.row.userType}</>
        }
    }
    const columns = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', color: COLOR_SEC, hide: true},
        {
            field: 'userType', headerName: 'TIPO', align: 'center', flex: 1, headerAlign: 'center',
            renderCell: (cellValues) => {
                return (<>{renderUserType(cellValues)}</>)
            }
        },
        {
            field: 'is_active', headerName: 'ACTIVO', align: 'center', flex: 0.5, headerAlign: 'center',
            renderCell: (cellValues) => {
                return (  <Checkbox disabled checked={cellValues.row.is_active} />)
            }
        },
        {field: 'firstName', headerName: 'NOMBRES', flex: 1, align: 'center', headerAlign: 'center'},
        {field: 'lastName', headerName: 'APELLIDOS', flex: 1, align: 'center', headerAlign: 'center'},
        {field: 'country', headerName: 'PAÍS', flex: 0.5, align: 'center', headerAlign: 'center'},
        {field: 'university', headerName: 'UNIVERSIDAD', flex: 2, align: 'center', headerAlign: 'center'},
        {field: 'email', headerName: 'CORREO', flex: 2, align: 'center', headerAlign: 'center'},
        {field: 'creationDate', headerName: 'FECHA DE CREACION', flex: 1, align: 'center', headerAlign: 'center'},
        {
            field: "ACCIONES", flex: 1,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            renderCell: (cellValues) => {
                return (
                    <>
                       {/* <Button sx={{color: COLOR_SEC}} onClick={(event) => {
                            viewDetail(event, cellValues);
                        }}>
                            <Tooltip title={"Ver Detalle"} placement="top">
                                <VisibilityIcon sx={{color: COLOR_SEC}}/>
                            </Tooltip>

                        </Button>*/}
                        <Button sx={{color: COLOR_SEC}} onClick={(event) => {
                            handleDelete(event, cellValues);
                        }}>
                            <Tooltip title={"Eliminar"} placement="top">
                                <DeleteIcon sx={{color: COLOR_SEC}}/>
                            </Tooltip>
                        </Button>
                    </>
                );
            }
        },
    ]
    useEffect(() => {
        loadUsers()
    }, []);


    const loadUsers = async () => {
        setLoading(true)
        let tmp = []
        await api_user.getUsers().then(res => {
            res.data.forEach(u => {
                    u.id = u.userId
                    u.userType = USER_TYPES_NAMES[u.userTypeId]
                api_user.getUserInfo(u.email).then(inf => {
                    if (inf[1].userInfo.length !== 0) {
                        u.creationDate = getDateTime(inf[1].userInfo[0].creationDate)
                        u.lastUpdateDate = inf[1].userInfo[0].lastUpdateDate
                        u.lastName = inf[1].userInfo[0].lastName
                        u.firstName = inf[1].userInfo[0].firstName
                        u.country = COUNTRIES[inf[1].userInfo[0].countryId]
                        u.university = UNIVERSITIES[inf[1].userInfo[0].universityId]
                    } else {
                        u.creationDate = ''
                        u.lastUpdateDate = ''
                        u.lastName = ''
                        u.firstName = ''
                        u.country = ''
                        u.university = ''
                    }

                })
                tmp.push(u)
            })
            setUsers(tmp)
            console.log(tmp)
        })
        setLoading(false)

    }

    return {
        users, columns,loading,handleCloseDialog,setReload,deleteUsr,showDialog,showAlertSuccess,alertMessage,setShowAlertSuccess
    }
}
