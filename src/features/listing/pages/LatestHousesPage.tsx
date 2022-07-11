import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'
import { Page } from 'common/components/Page/Page'

export const LatestHousesPage = () => {
  return (
    <Page>
      <ExplainComponent name='LatestHousesPage' images={1}>
        <p>Foloseste componente Houses cu parametru specific ca sa aduca toate latest houses</p>
      </ExplainComponent>
    </Page>
  )
}
