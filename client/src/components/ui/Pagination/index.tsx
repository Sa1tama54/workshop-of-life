import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Block = styled.div`
  width: 350px;
  margin: auto;
  color: #ac0000;
`;

export default function Paginations() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Block>
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </Block>
  );
}
