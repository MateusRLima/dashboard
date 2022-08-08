import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import React from 'react';
import './auditoria.scss';

const AuditoriaPage = () => (
  <React.Fragment>
    <h2 className={'content-block'}>Auditoria</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
        <DataGrid>
          <FilterRow visible={true} />
          <FilterPanel visible={true} />
          <Column caption={"Descrição"} />
          <Column caption={"Executou a ação"} />
          <Column caption={"Sofreu a ação"} />
          <Column caption={"Criado em"} />
          <Summary>
            <TotalItem column={"Código"} summaryType={"count"} />
          </Summary>
        </DataGrid>
      </div>
    </div>
  </React.Fragment>
);

export default AuditoriaPage