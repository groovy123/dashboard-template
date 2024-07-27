import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  raceZyo: string,
  raceNo: string,
  kaime: string,
  toshi: number,
  kaisyu: number,

) {
  return { id, date, raceZyo, raceNo, kaime, toshi, kaisyu };
}

const rows = [
  createData(
    0,
    '2024/07/21',
    '福島',
    '11',
    '馬連BOX 3,5,7',
    900,
    0,
  ),
  createData(
    1,
    '2024/07/21',
    '小倉',
    '11',
    '単勝 10',
    10000,
    20000,
  ),
  createData(
    2, 
    '2024/07/21',
    '札幌',
    '11',
    '三連単F 1-2-3,4,5,6,7',
    5000,
    0,
  ),
  createData(
    3,
    '2024/07/21',
    '福島',
    '10',
    '馬連BOX 1,3,4',
    900,
    1340,
  ),
  createData(
    4,
    '2024/07/21',
    '小倉',
    '10',
    'ワイドBOX 4,5,6',
    900,
    0,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>直近の買い目</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>場</TableCell>
            <TableCell>レース</TableCell>
            <TableCell>買い目</TableCell>
            <TableCell align="right">投資</TableCell>
            <TableCell align="right">回収</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.raceZyo}</TableCell>
              <TableCell>{row.raceNo}</TableCell>
              <TableCell>{row.kaime}</TableCell>
              <TableCell align="right">{`${row.toshi}`}</TableCell>
              <TableCell align="right">{`${row.kaisyu}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        もっと見る
      </Link>
    </React.Fragment>
  );
}