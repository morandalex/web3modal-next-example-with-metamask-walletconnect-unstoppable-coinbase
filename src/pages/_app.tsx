import * as UAuthWeb3Modal from '@uauth/web3modal'
/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from "next/app";
import Head from "next/head";

import { Chakra } from "../lib/components/Chakra";
import Layout from "../lib/layout";

import providerOptions from '../web3/providerOptions'
import { Web3ModalProvider } from '../web3/Web3ModalContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
   
      <Layout>
        {
        
          <Web3ModalProvider
            cacheProvider={true}
            providerOptions={providerOptions}
            onNewWeb3Modal={UAuthWeb3Modal.registerWeb3Modal}
          >
            <Component {...pageProps} />
            
          </Web3ModalProvider>
          
        }
      </Layout>
    </Chakra>
  );
};

export default MyApp;
