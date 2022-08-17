import React, { useEffect } from 'react';
import {Card,FormGroup, TextField, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserRegistr,
    getRecipients,
    userTokin
  } from '../../store/user';

export const SignUp = () => {
    const dispatch = useDispatch()
    const token = useSelector(userTokin)
    console.log (token)
    
    return (
        <>
        <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt:4 }}>
        <Typography sx={{fontWeight: 'medium'}}>РЕГИСТРАЦИЯ</Typography>
        <FormGroup>
        <TextField id="standard-basic" label="Эл. почта" variant="outlined" sx={{mt:2}}/>
        <TextField id="standard-basic" label="Пароль" variant="outlined" sx={{mt:2}}/>
        <TextField id="standard-basic" label="Подтвердить пароль" variant="outlined" sx={{mt:2}}/>
        <Link to='/login' style={{textDecoration: 'none'}}>g</Link>
        <Button variant="contained" sx={{mt:2}}
        onClick={() => {dispatch(getUserRegistr())
            console.log ('token - ', token)
        }}
        >СОЗДАТЬ АККАУНТ</Button>
        <Button variant="contained" sx={{mt:2}}
        onClick={() => dispatch(getRecipients(4, token))}
        >getRecipients</Button>
        </FormGroup>
        <Typography sx={{mt:2}}> Уже есть аккаунт? <Link to='/login'> Войти </Link></Typography>
        </Card>
        </>
    )
}

