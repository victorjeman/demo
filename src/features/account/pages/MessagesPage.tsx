import { Col, Row } from 'antd'

import { Page } from 'common/components/Page/Page'

import { AccountNavigation } from 'features/account/components/AccountNavigation/AccountNavigation'
import { Messages } from 'features/account/components/Messages/Messages'

export const MessagesPage = () => {
  return (
    <Page>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <AccountNavigation />
        </Col>
        <Col span={16}>
          <Messages />
        </Col>
      </Row>
    </Page>
  )
}
