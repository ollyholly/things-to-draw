import styled, { keyframes } from 'styled-components';
import {Box} from '@mui/material';

const BlobAnimation = () => {

  return (
    <>
    <Box
        component="div"
        sx={{
          overflow: 'hidden', 
          // position: 'relative'
          }} >
      <Blob/>
      <Blob2/>
      <Blob3/>
      </Box>
    </>
  );
};

const move = keyframes`
  from { 
    transform: translate(-20%, -30%) rotate(-90deg); 
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%; 
    }

  to { 
    transform: translate(120%, 160%) rotate(10deg); 
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%; 
    }
`;

const move2 = keyframes`
  from { 
    transform: translate(-10%, 30%) rotate(-60deg); 
    border-radius: 51% 49% 58% 42% / 34% 78% 22% 66%; 
  }

  to { 
    transform: translate(90%, 120%) rotate(-120deg); 
    border-radius: 22% 78% 73% 27% / 67% 31% 69% 33% ; 
    }
`;

const move3 = keyframes`
  from { 
    transform: translate(400%, -30%) rotate(-90deg); 
    border-radius: 51% 49% 58% 42% / 34% 78% 22% 66%; 
  }

  to { 
    transform: translate(100%, 270%) rotate(-150deg); 
    border-radius: 22% 78% 73% 27% / 67% 31% 69% 33% ; 
    }
`;

const Blob = styled.div`
position: absolute;
  width: 40%;
  height: 60%;
  background: linear-gradient(180deg, rgba(47, 184, 255, 0.42) 31.77%, #9eecd9 100%);
  mix-blend-mode: color-dodge;
  animation: ${move} 25s infinite alternate;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  filter: blur(30px);
`;

// :hover {

//   filter: blur(60px);
//   box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6), inset 100px 100px 0 0px #fa709a,
//     inset 200px 200px 0 0px #784ba0, inset 300px 300px 0 0px #2b86c5;
// }

const Blob2 = styled(Blob)`

  background: linear-gradient(180deg, rgba(186, 117, 255, 0.49) 26.56%, #3913b8 100%);
  animation: ${move2} 30s infinite alternate;
  filter: blur(30px);

`;

const Blob3 = styled(Blob)`
  width: 20%;
  height: 30%;
  background: linear-gradient(
    196deg,
    rgba(198, 48, 231, 1) 0%,
    rgba(255, 135, 222, 1) 30%,
    rgba(255, 240, 140, 1) 100%
  );
  animation: ${move3} 40s infinite alternate;
  filter: blur(30px);
`;

export default BlobAnimation;
