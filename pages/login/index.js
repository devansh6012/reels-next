import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import insta from '../../Assests/Instagram.jpg'
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Index() {

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { login, user } = useContext(AuthContext)

    const handleClick = async () => {
        try {
            setLoading(true)
            setError('')
            await login(email, password)
            console.log('Logged in');
        } catch (err) {
            console.log(err);
            setError(err.message)
            setTimeout(() => {
                setError('');
            }, 2000)
        }
        setLoading(false)
    }

    useEffect(() => {
        if(user){
            router.push('/')
        }
        else{
            console.log('Not logged in');
        }
    },[user])

    return (
        <div className='login-container'>
            <div className='carbg'>

            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} />
                    <TextField size='small' margin='dense' id="outlined-basic" fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField size='small' margin='dense' id="outlined-basic" fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    {
                        error != '' &&
                        <div style={{ color: 'red' }}>{error}</div>
                    }


                    <Button variant="contained" fullWidth style={{ marginTop: '0.5rem' }} onClick={handleClick} disabled={loading} >
                        Login
                    </Button>

                    <div style={{ color: 'blue', marginTop: '0.5rem', cursor:'pointer' }}><Link href='/forgotPassword'>Forgot Password?</Link></div>

                </div>

                <div className='bottom-card'>
                    Don&apos;t Have an Account? <Link href='/signup'><span style={{ color: 'blue', cursor:'pointer'  }}>Sign Up</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Index