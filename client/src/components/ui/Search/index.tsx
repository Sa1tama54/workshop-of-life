import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 600px;
  margin: 50px auto;
  height: 30px;
  position: relative;
`;

const SearchBlock = styled.input`
  background: #f1f1f1;
  width: 100%;
  height: 30px;
  padding: 0 40px;
  border: none;
  border-radius: 0 5px 5px 0;
  border-left: 7px solid #ac0000;
`;

const IconSearch = styled.span`
  position: absolute;
  top: 3px;
  left: 10px;
  color: #ac0000;
`;

const Search = () => {
  return (
    <>
      <MainBlock>
        <IconSearch>
          <SearchIcon />
        </IconSearch>
        <SearchBlock placeholder="Поиск по услугам" />
      </MainBlock>
    </>
  );
};

export default Search;
