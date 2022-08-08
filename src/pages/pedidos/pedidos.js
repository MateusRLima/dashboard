import { DataGrid } from 'devextreme-react';
import {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import React from 'react';
import './pedidos.scss';

const PedidosPage = () => (
  <React.Fragment>
    <h2 className={'content-block'}>Pedidos</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
      <DataGrid>
          <FilterRow visible={true} />
          <FilterPanel visible={true} />
          <Column caption={"Código"} />
          <Column caption={"Requisição"} />
          <Column caption={"Matriz/Filial"} />
          <Column caption={"Fornecedor"} />
          <Column caption={"Valor total"} />
          <Column caption={"Status"} />
          <Column caption={"Criado em"} />
          <Column caption={"Responsável"} />
          <Summary>
            <TotalItem column={"Código"} summaryType={"count"} />
          </Summary>
        </DataGrid>
      </div>
    </div>
  </React.Fragment>
);

export default PedidosPage