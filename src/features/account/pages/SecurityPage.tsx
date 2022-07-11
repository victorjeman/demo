import { Col, Row } from 'antd'

import { Page } from 'common/components/Page/Page'

import { AccountNavigation } from 'features/account/components/AccountNavigation/AccountNavigation'
import { Security } from 'features/account/components/Security/Security'

export const SecurityPage = () => {
  return (
    <Page>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <AccountNavigation />
        </Col>
        <Col span={16}>
          <Security />
        </Col>
      </Row>
    </Page>
  )
}
