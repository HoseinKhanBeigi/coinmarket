import '../../styles/table.scss';
import { Container } from '../container';
import { Paper } from '../paper';
import { switchCell } from '../switchCell';

const Table = ({ headers, rows, handleClick }) => {
  return (
    <Container>
      <Paper>
        <table>
          <colgroup>
            <col
              style={{ width: '50px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '250px', minWidth: 'auto', maxWidth: 'auto' }}
            />

            <col
              style={{ width: '184px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }}
            />
            <col
              style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }}
            />
          </colgroup>
          <thead>
            <tr>
              {headers.map((item, i) => (
                <th
                  className="stickyTop"
                  style={{ textAlign: (i === 1 || i === 2) && 'start' }}
                  key={i}
                >
                  <div className="itemHeader">
                    <div onClick={() => handleClick(item)}>
                      <p>{item}</p>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.status === 'success' &&
              rows.data?.map((cells, i) => {
                return (
                  <tr key={i}>
                    {cells.map((item, idx) => (
                      <td key={idx}>{switchCell(item)}</td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Paper>
    </Container>
  );
};

export default Table;
