import styled from '@emotion/styled'
import '../styles/Spinner.css'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`
const Spinner = () => {
  return (
    <Container >
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </Container>
  )
}

export default Spinner