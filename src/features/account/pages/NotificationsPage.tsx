import { Col, Row } from 'antd'

import { Page } from 'common/components/Page/Page'

import { AccountNavigation } from 'features/account/components/AccountNavigation/AccountNavigation'
import { Notifications } from 'features/account/components/Notifications/Notifications'

export const NotificationsPage = () => {
  return (
    <Page>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <AccountNavigation />
        </Col>
        <Col span={16}>
          <Notifications />
        </Col>
      </Row>
    </Page>
  )
}
