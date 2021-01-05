import { urlFor } from './sanity'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const serializers = {
  types: {
    image: ({ node }) => {
      return (
        <div className='post-image'>
          <img src={urlFor(node.asset.url).auto('format').url()} />
        </div>
      )
    },
    video: ({ node }) => {
      const { url } = node
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            loop={true}
            controls={true}
          />
        </div>
      )
    },
    table: ({ node }) => {
      let array = node.rows
      let newArray = [...array]
      newArray.shift()
      return (
        <Table>
          <thead>
            <tr>
              {array[0].cells.map((cell) => (
                <th>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newArray.map((row) => (
              <tr>
                {row.cells.map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )
    },
  },
}

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;

  td {
    padding: 0.2rem 0;
  }
  th {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 0.4rem;
  }
`

export default serializers
