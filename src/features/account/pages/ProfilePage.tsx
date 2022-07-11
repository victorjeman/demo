import { Col, Row } from 'antd'

import { Page } from 'common/components/Page/Page'

import { Profile } from 'features/account/components/Profile/Profile'
import { AccountNavigation } from 'features/account/components/AccountNavigation/AccountNavigation'
import { AccountItem } from 'features/account/components/AccountItem/AccountItem'

export const ProfilePage = () => {
  return (
    <Page>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <AccountNavigation />
        </Col>
        <Col span={16}>
          <Profile />
          <AccountItem />
        </Col>
      </Row>
    </Page>
  )
}
