import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const colorMap = {
  good: '#2ecc71',
  neutral: '#3498db',
  bad: '#e74c3c',
};

export const ButtonsList = styled.ul`
margin: 0;
padding: 0;
display: flex;
gap: 20px;
list-style: none;
padding-bottom: 30px;
animation: ${fadeIn} 1s ease-in-out;
`;


export const Button = styled.button`
text-transform: capitalize;
font-size: 16px;
font-weight: 700;
width: 100px;
padding: 5px 15px;
animation: ${fadeIn} 1s ease-in-out, ${pulse} 1.5s infinite;
border: none;
background-color: ${({ type }) => colorMap[type] || '#3498db'};
color: white;
cursor: pointer;
border-radius: 5px;
transition: background-color 0.3s ease;

&:hover {
  background-color: ${({ type }) =>
    colorMap[type] ? colorMap[type] : '#2980b9'};
}
`;