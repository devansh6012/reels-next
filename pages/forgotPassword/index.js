import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import insta from '../../Assests/Instagram.jpg'
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';

function Index() {

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { forgot, user } = useContext(AuthContext)

    const handleClick = async () => {
        try {
            setLoading(true)
            setError('')
            await forgot(email)
            console.log('Mail sent');
            router.push('/login')
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
    },[user])

    return (
        <div className='login-container'>
            <div className='carbg'>

            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} />
                    <TextField size='small' margin='dense' id="outlined-basic" fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {/* <TextField size='small' margin='dense' id="outlined-basic" fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/> */}

                    {
                        error != '' &&
                        <div style={{ color: 'red' }}>{error}</div>
                    }


                    <Button variant="contained" fullWidth style={{ marginTop: '0.5rem' }} onClick={handleClick} disabled={loading} >
                        Send Email
                    </Button>

                    {/* <div style={{ color: 'blue', marginTop: '0.5rem' }}>Forgot Password?</div> */}

                </div>

                <div className='bottom-card'>
                    Don&apos;t Have an Account? <span style={{ color: 'blue' }}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default Index