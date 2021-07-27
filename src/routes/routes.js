import currencyExchange from '../pages/currency-exchange';
import currencyConverter from '../pages/currency-converter';
import conversionHistory from '../pages/conversion-history';

const Routes = [
  {
    key: 1, path: '/currency-exchange', component: currencyExchange, exact: true,
  },
  {
    key: 2, path: '/currency-converter', component: currencyConverter, exact: true,
  },
  {
    key: 3, path: '/conversion-history', component: conversionHistory, exact: true,
  },
];

export default Routes;
