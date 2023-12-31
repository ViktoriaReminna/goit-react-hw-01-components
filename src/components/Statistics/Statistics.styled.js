import styled from 'styled-components';
export const Statstics = styled.section`
  margin: 40px auto;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 500px;
  height: 200px;
  background-color: #fff;
  box-shadow: 1px 1px 8px 0px #000000;
  padding-top: 50px;
  border-radius: 8px;
`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #808080;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;
const getBackgroundColor = props => {
  switch (props.color) {
    case '.docx':
      return 'DarkTurquoise';
    case '.pdf':
      return 'DodgerBlue';
    case '.mp3':
      return 'Cyan';
    case '.psd':
      return 'Aquamarine';
    default:
      return 'black';
  }
};
export const Item = styled.li`
  text-align: center;
  width: 100%;
  padding: 25px;
  background-color: ${getBackgroundColor};
`;
