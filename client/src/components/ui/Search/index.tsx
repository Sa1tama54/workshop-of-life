import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/BackspaceOutlined';

import { setSearchValue } from 'redux/filter/slice';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useDebounce } from 'common/hooks/useDebounce';

import styles from 'components/ui/Search/Search.module.scss';

const Search = ({ path }: { path?: string }) => {
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [debouncedValue, value, setValue] = useDebounce<string>('', 1000);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  React.useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [dispatch, debouncedValue]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className={`${styles.search} ${path ? styles.productsSearch : ''}`}>
        <span>
          <SearchIcon />
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="Поиск по услугам"
        />
        {value ? (
          <span onClick={onClickClear}>
            <ClearIcon />
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Search;
