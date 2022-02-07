import styled from 'styled-components'

function Register() {
    return (
        <Wrapper>
            <form action="#">
                <div className="heading">
                    <h2>
                        Create an Account
                    </h2>
                </div>
                <div className="row">
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='last name' />
                </div>
                <div className="row">
                    <input type="text" placeholder='username' />
                    <input type="text" placeholder='email' />
                </div>
                <div className="row">
                    <input type="text" placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                </div>
                <input className='button' type="submit" placeholder='Submit' />
            </form>
        </Wrapper>
    )
}

export default Register

const Wrapper = styled.div`
    height: 100vh;
    background: url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) no-repeat;
    background-size: cover;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 876px){
        height: unset;
    }

    h2{
        margin-bottom: 20px;
        text-align: center;
        color: #000000c5;
        text-transform: uppercase;
    }

    form{
        display: flex;
        flex-direction: column;
        background-color: #fffffff8;
        padding: 40px;
    }

    input{
        padding: 10px 20px;
        margin: 20px;
        border: 1px solid #757575;
        background-color: transparent;
    }

    .button{
        background-color: teal;
        border: teal;
        color: white;
    }
`