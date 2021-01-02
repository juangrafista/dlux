import React from 'react'
import styled from 'styled-components'

const Creditos = ({ creditos }) => {
  return (
    <>
      <CreditsContainer>
        {creditos.map((credito, index) => (
          <Table key={index}>
            {credito.value.rows.map((row, index) => (
              <tr key={index}>
                {index === 0
                  ? row.cells.map((cell, index) => <th key={index}>{cell}</th>)
                  : row.cells.map((cell, index) => <td key={index}>{cell}</td>)}
              </tr>
            ))}
          </Table>
        ))}
      </CreditsContainer>
    </>
  )
}

const CreditsContainer = styled.div`
  background-color: #0f0f0f;
  padding: 2rem 0rem 1rem 0rem;
  opacity: 90%;
`

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  margin-bottom: 0.5rem;

  td {
    padding: 0.3rem 0;
  }
  th {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 0.4rem;
  }
`

export default Creditos
