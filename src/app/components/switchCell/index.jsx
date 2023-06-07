const nameCell = (item) => {
  return (
    <div className="nameCell">
      <img
        loading="lazy"
        className="coinLogo"
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
      />
      <div className="name">
        <p
          style={{
            margin: '0px',
            marginInlineStart: '5px',
            lineHeight: '24px',
            color: 'rgb(34, 37, 49)',
            fontWeight: 'bold',
          }}
        >
          {item.name}
        </p>
        <p
          style={{
            margin: '0px',
            marginInlineStart: '5px',
            lineHeight: '24px',
            color: 'rgb(128, 138, 157)',
          }}
        >
          {item.symbol}
        </p>
      </div>
    </div>
  );
};

const percentageCell = (item) => {
  return item.num > 0 ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#16c784',
      }}
    >
      <span>{item.num}%</span>
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#ea3943',
      }}
    >
      <span> {item.num.replace('-', '')}%</span>
    </div>
  );
};

const supply = (item) => {
  return (
    <span align="right">
      {item.totalSupply}&nbsp;{item.symbol}
    </span>
  );
};

const last7Day = (item) => {
  return (
    <div className="nameCell">
      <img
        loading="lazy"
        src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${item.id}.svg`}
      />
    </div>
  );
};

export const switchCell = (item) => {
  switch (item.type) {
    case 'NAME':
      return nameCell(item);
    case 'PERCENTAGE':
      return percentageCell(item);
    case 'SUPPLY':
      return supply(item);
    case '7DAY':
      return last7Day(item);
    default:
      return <span style={{ color: '#000' }}>{item}</span>;
  }
};
