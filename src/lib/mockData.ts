export interface Asset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  insight: 'Bullish' | 'Bearish' | 'Neutral' | 'Overbought' | 'Oversold';
  category: string;
}

export const mockAssets: Asset[] = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 64230.5,
    change24h: 2.4,
    volume24h: 32450000000,
    marketCap: 1250000000000,
    insight: 'Bullish',
    category: 'Layer 1',
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3450.2,
    change24h: -1.2,
    volume24h: 15200000000,
    marketCap: 415000000000,
    insight: 'Neutral',
    category: 'Layer 1',
  },
  {
    id: '3',
    symbol: 'SOL',
    name: 'Solana',
    price: 145.8,
    change24h: 5.6,
    volume24h: 4100000000,
    marketCap: 65000000000,
    insight: 'Overbought',
    category: 'Layer 1',
  },
  {
    id: '4',
    symbol: 'LINK',
    name: 'Chainlink',
    price: 18.2,
    change24h: 0.5,
    volume24h: 800000000,
    marketCap: 10500000000,
    insight: 'Bullish',
    category: 'Oracle',
  },
  {
    id: '5',
    symbol: 'UNI',
    name: 'Uniswap',
    price: 7.5,
    change24h: -3.2,
    volume24h: 350000000,
    marketCap: 4500000000,
    insight: 'Bearish',
    category: 'DeFi',
  },
  {
    id: '6',
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.45,
    change24h: -0.8,
    volume24h: 450000000,
    marketCap: 16000000000,
    insight: 'Oversold',
    category: 'Layer 1',
  },
];

export const getAssetHistory = (symbol: string) => {
  // Generate some fake historical data for charts
  const history = [];
  let currentPrice = mockAssets.find((a) => a.symbol === symbol)?.price || 100;
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    history.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: currentPrice + (Math.random() * (currentPrice * 0.1) - (currentPrice * 0.05)),
    });
    currentPrice = history[history.length - 1].price;
  }
  return history;
};
