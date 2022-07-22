import {InjectedConnector} from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [
    0,
    1,
    42,
    1337,
    4,
    80001
  ]
});
