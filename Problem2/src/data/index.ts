import BLUR from '../assets/BLUR.svg';
import BNEO from '../assets/BNEO.svg';
import BUSD from '../assets/BUSD.svg';
import USD from '../assets/USD.svg';
import ETH from '../assets/ETH.svg';
import GMX from '../assets/GMX.svg';
import STEVMOS from '../assets/STEVMOS.svg';
import LUNA from '../assets/LUNA.svg';
import RATOM from '../assets/RATOM.svg';
import STRD from '../assets/STRD.svg';
import EVMOS from '../assets/EVMOS.svg';

interface CurrencyData {
    currency: string;
    price: number;
    date: string;
    icon?: string;
}

export const currencyData: CurrencyData[] = [
    {
        currency: 'BLUR',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.20811525423728813,
        icon: BLUR,
    },
    {
        currency: 'bNEO',
        date: '2023-08-29T07:10:50.000Z',
        price: 7.1282679,
        icon: BNEO,
    },
    {
        currency: 'BUSD',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.999183113,
        icon: BUSD,
    },
    {
        currency: 'USD',
        date: '2023-08-29T07:10:30.000Z',
        price: 1,
        icon: USD,
    },
    {
        currency: 'ETH',
        date: '2023-08-29T07:10:52.000Z',
        price: 1645.9337373737374,
        icon: ETH,
    },
    {
        currency: 'GMX',
        date: '2023-08-29T07:10:40.000Z',
        price: 36.345114372881355,
        icon: GMX,
    },
    {
        currency: 'STEVMOS',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.07276706779661017,
        icon: STEVMOS,
    },
    {
        currency: 'LUNA',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.40955638983050846,
        icon: LUNA,
    },
    {
        currency: 'RATOM',
        date: '2023-08-29T07:10:40.000Z',
        price: 10.250918915254237,
        icon: RATOM,
    },
    {
        currency: 'STRD',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.7386553389830508,
        icon: STRD,
    },
    {
        currency: 'EVMOS',
        date: '2023-08-29T07:10:40.000Z',
        price: 0.06246181355932203,
        icon: EVMOS,
    },
];
