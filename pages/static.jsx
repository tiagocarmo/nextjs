import React from 'react';
import Home from '../src/components/templates/Home';
import CovidAPIClient from '../src/client/CovidAPIClient';

const Static = ({ covidData }) => {
  return (
    <Home dataTable={covidData}>
      <p>Abaixo segue um exemplo de implementação de <a href='https://pt-br.reactjs.org/docs/hooks-intro.html' target='blank' rel='noopener noreferrer'>React Hooks</a> com <a href='https://github.com/axios/axios' target='blank' rel='noopener noreferrer'>axios</a> utilizando a <a href='https://covid19-brazil-api.now.sh/' target='blank' rel='noopener noreferrer'>API Covid19 Brazil</a>.</p>
    </Home>
  );
};

export const getStaticProps = async () => {
  const covidData = await CovidAPIClient.getReportAllState();
  return {
    props: {
      covidData
    }
  };
  // return {
  //   props: {
  //     covidData: {
  //       data: [
  //         { uid: 35, uf: 'SP', state: 'São Paulo', cases: 804342, deaths: 30014, suspects: 5334, refuses: 596, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 29, uf: 'BA', state: 'Bahia', cases: 256727, deaths: 5397, suspects: 573, refuses: 36, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 33, uf: 'RJ', state: 'Rio de Janeiro', cases: 223631, deaths: 16065, suspects: 1254, refuses: 148, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 31, uf: 'MG', state: 'Minas Gerais', cases: 216557, deaths: 5335, suspects: 925, refuses: 104, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 23, uf: 'CE', state: 'Ceará', cases: 214953, deaths: 8409, suspects: 493, refuses: 89, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 15, uf: 'PA', state: 'Pará', cases: 199556, deaths: 6146, suspects: 43, refuses: 23, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 42, uf: 'SC', state: 'Santa Catarina', cases: 177777, deaths: 2260, suspects: 346, refuses: 47, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 53, uf: 'DF', state: 'Distrito Federal', cases: 162042, deaths: 2521, suspects: 327, refuses: 107, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 21, uf: 'MA', state: 'Maranhão', cases: 151615, deaths: 3446, suspects: 125, refuses: 13, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 52, uf: 'GO', state: 'Goiás', cases: 132506, deaths: 3094, suspects: 353, refuses: 55, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 41, uf: 'PR', state: 'Paraná', cases: 131906, deaths: 3290, suspects: 400, refuses: 119, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 43, uf: 'RS', state: 'Rio Grande do Sul', cases: 125813, deaths: 3435, suspects: 416, refuses: 330, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 26, uf: 'PE', state: 'Pernambuco', cases: 125539, deaths: 7593, suspects: 89, refuses: 23, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 13, uf: 'AM', state: 'Amazonas', cases: 120296, deaths: 3649, suspects: 18, refuses: 26, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 32, uf: 'ES', state: 'Espírito Santo', cases: 111261, deaths: 3158, suspects: 71, refuses: 21, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 25, uf: 'PB', state: 'Paraíba', cases: 105778, deaths: 2450, suspects: 85, refuses: 11, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 51, uf: 'MT', state: 'Mato Grosso', cases: 91346, deaths: 2751, suspects: 45, refuses: 8, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 27, uf: 'AL', state: 'Alagoas', cases: 78804, deaths: 1887, suspects: 43, refuses: 22, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 22, uf: 'PI', state: 'Piauí', cases: 77405, deaths: 1825, suspects: 12, refuses: 2, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 28, uf: 'SE', state: 'Sergipe', cases: 72528, deaths: 1857, suspects: 15, refuses: 11, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 24, uf: 'RN', state: 'Rio Grande do Norte', cases: 61748, deaths: 2256, suspects: 108, refuses: 22, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 11, uf: 'RO', state: 'Rondônia', cases: 55153, deaths: 1148, suspects: 61, refuses: 2, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 17, uf: 'TO', state: 'Tocantins', cases: 50694, deaths: 673, suspects: 13, refuses: 0, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 50, uf: 'MS', state: 'Mato Grosso do Sul', cases: 48937, deaths: 862, suspects: 93, refuses: 26, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 14, uf: 'RR', state: 'Roraima', cases: 43518, deaths: 587, suspects: 9, refuses: 0, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 16, uf: 'AP', state: 'Amapá', cases: 43193, deaths: 661, suspects: 15, refuses: 0, datetime: '2020-08-31T22:34:10.046Z' },
  //         { uid: 12, uf: 'AC', state: 'Acre', cases: 24647, deaths: 612, suspects: 12, refuses: 0, datetime: '2020-08-31T22:34:10.046Z' }
  //       ]
  //     }
  //   }
  // };
};

export default Static;
