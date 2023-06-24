import Table from '../../components/table';
import { getcrypto } from '../../actions';
import { useEffect, useRef, useState, useMemo } from 'react';
import { cryptoReducer } from '../../reducer/cryptoReducer';
import { Select } from '../../components/select';
import { InputText } from '../../components/TextInput';
import { ButtonComponent } from '../../components/button';
import { Paginate } from '../../components/paginate';
import '../../styles/headerFilter.scss';
import { useDay, usePopupLive } from '../../hooks';

const CryptocurrencyList = () => {
  const headers = useMemo(() => {
    return [
      '#',
      'Name',
      'Price',
      '1h%',
      '24h%',
      '7d%',
      'Market Cap',
      'Volume(24h)',
      'Circulating Supply',
      'last 7 day',
    ];
  }, []);

  const { state, dispatch } = cryptoReducer();
  const minRef = useRef();
  const maxRef = useRef();
  const selectRef = useRef();

  useEffect(() => {
    if (state.status === 'idle') getcrypto(dispatch);
  }, [dispatch, state.status]);

  const handleFilter = () => {
    const min = minRef.current.value;
    const max = maxRef.current.value;
    const targetMin = `${selectRef.current.value}_min`;
    const targetMax = `${selectRef.current.value}_max`;
    const query = {
      [targetMin]: min,
      [targetMax]: max,
    };
    for (const property in query) {
      if (!query[property]) {
        delete query[property];
      }
    }
    getcrypto(dispatch, query);
  };

  const handleSort = (item) => {
    let sort = '';
    switch (item) {
      case 'Name':
        sort = 'name';
        break;
      case 'Price':
        sort = 'price';
        break;
      case 'Circulating Supply':
        sort = 'circulating_supply';
        break;
      case 'Market Cap':
        sort = 'market_cap';
      default:
        break;
    }
    const query = {
      sort,
    };
    getcrypto(dispatch, query);
  };

  const { currentDay } = useDay();
  const { isOpen } = usePopupLive('2023-06-25', '2023-06-28');

  return (
    <>
      {currentDay}
      <div className="containerFilter">{isOpen && <div>popup</div>}</div>
    </>
  );
};

export default CryptocurrencyList;
