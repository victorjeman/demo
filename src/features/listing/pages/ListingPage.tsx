import { Page } from 'common/components/Page/Page'

import { Houses } from 'features/listing/components/Houses/Houses'
import { HouseThumbnail } from 'features/listing/components/HouseThumbnail/HouseThumbnail'

export const ListingPage = () => {
  return (
    <Page>
      <Houses />
      <HouseThumbnail />
    </Page>
  )
}
