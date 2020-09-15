import styled from 'styled-components';

export const Container = styled.div`
  div {
    margin-bottom: 16px;

    span {
      font-size: 1.5em;
      margin: 0.5em 0 0.75em;
      text-transform: uppercase;
    }
  }
`;

export const Wrapper = styled.div`
  table {
    border: 1px solid #ddd;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 1050px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ddd;
    }

    td {
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 200px;
      margin-left: 150px;
    }

    td:before {
      position: absolute;
      top: 12px;
      left: 6px;
      width: 200px;
      padding-right: 40px;
      white-space: nowrap;
      margin-left: -200px;
      text-transform: uppercase;
    }

    td:nth-of-type(1):before {
      content: 'Nome';
    }

    td:nth-of-type(2):before {
      content: 'Raça';
    }

    td:nth-of-type(3):before {
      content: 'Sub-raça';
    }

    td:nth-of-type(4):before {
      content: 'Sexo';
    }

    td:nth-of-type(5):before {
      content: 'Cor';
    }

    td:nth-of-type(6):before {
      content: 'Idade';
    }
  }
`;
