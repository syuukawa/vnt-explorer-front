import React from 'react'
import { connect } from 'react-redux'

import DataProvider from 'containers/RPDataProviderNew'
import BriefInfo from 'components/home/BriefInfo'
import BlockTx from 'components/home/BlockTx'
import TxChart from 'components/home/TxChart'
import Margin from 'components/Margin'

import apis from 'utils/apis'
import { pollingInterval } from 'constants/config'

import styles from './Home.scss'

const mapStateToProps = ({ global: { language } }) => {
  return {
    language
  }
}

export default connect(mapStateToProps)(function Home() {
  return (
    <div className={styles.home}>
      <DataProvider
        options={{
          path: apis.stats,
          ns: 'stats',
          field: 'stats',
          polling: pollingInterval
        }}
        render={data => <BriefInfo context={data} />}
      />
      <Margin size="medium" />
      <BlockTx />
      <Margin size="medium" />
      <DataProvider
        options={{
          path: apis.txHistory,
          ns: 'transactions',
          field: 'txHistory'
        }}
        render={data => <TxChart context={data} />}
      />
    </div>
  )
})
