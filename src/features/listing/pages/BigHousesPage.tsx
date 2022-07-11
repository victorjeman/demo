import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'
import { Page } from 'common/components/Page/Page'

export const BigHousesPage = () => {
  return (
    <Page>
      <ExplainComponent name='BigHousesPage' images={2}>
        <p>Foloseste componente Houses cu parametru specific ca sa aduca toate latest houses</p>
      </ExplainComponent>
    </Page>
  )
}
