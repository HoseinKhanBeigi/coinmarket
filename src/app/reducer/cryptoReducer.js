import { useReducer } from 'react';
import { numberFormat } from '../utils/numberFormat';
const initialState = {
  status: 'idle',
  error: null,
  data: [],
};

export const cryptoReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PENDING':
        return { ...initialState, status: 'pending' };
      case 'SUCCESS':
        return {
          ...initialState,
          status: 'success',
          data: action.payload
            ?.map((item, i) => {
              return {
                '#': i + 1,
                Name: {
                  type: 'NAME',
                  name: item.name,
                  id: item.id,
                  symbol: item.symbol,
                },
                Price: numberFormat(item.quote.USD.price),
                '1h%': {
                  type: 'PERCENTAGE',
                  num: item.quote.USD.percent_change_1h.toFixed(2),
                },
                '24h%': {
                  type: 'PERCENTAGE',
                  num: item.quote.USD.percent_change_24h.toFixed(2),
                },
                '7d%': {
                  type: 'PERCENTAGE',
                  num: item.quote.USD.percent_change_7d.toFixed(2),
                },
                MarketCap: numberFormat(item.quote.USD.market_cap, {
                  notation: 'compact',
                  compactDisplay: 'short',
                }),
                'Volume(24h)': numberFormat(item.quote.USD.volume_24h),
                CirculatingSupply: {
                  type: 'SUPPLY',
                  symbol: item.symbol,
                  totalSupply: numberFormat(item.total_supply, {
                    style: 'decimal',
                  }),
                },
                lastSevenDay: {
                  type: '7DAY',
                  id: item.id,
                },
              };
            })
            .map((item) => {
              return Object.values(item);
            }),
        };
      case 'FAIL':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  return {
    state,
    dispatch,
  };
};
