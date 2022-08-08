import { DataGrid } from "devextreme-react";
import {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import TabPanel, { Item } from "devextreme-react/tab-panel";

import React from "react";
import "./recebidos.scss";

const RecebidosPage = () => (
  <React.Fragment>
    <div className={"content-block"}>
      <TabPanel animationEnabled={true} swipeEnabled={true}>
        <Item title="Produtos à receber" icon="box">
          <div className={"dx-card responsive-paddings"}>
            <h2 className={"content-block"}>Produtos à receber</h2>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Produto"} />
              <Column caption={"Atributos"} />
              <Column caption={"Solicitante"} />
              <Column caption={"Empresa"} />
              <Column caption={"Inf. Requisição"} />
              <Column caption={"Quantidade"} />
              <Column caption={"Solicitado em"} />
            </DataGrid>
          </div>
        </Item>
        <Item title="Produtos recebidos" icon="check">
          <div className={"dx-card responsive-paddings"}>
            <h2 className={"content-block"}>Produtos recebidos</h2>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Produto"} />
              <Column caption={"Atributos"} />
              <Column caption={"Solicitante"} />
              <Column caption={"Empresa"} />
              <Column caption={"Inf. Requisição"} />
              <Column caption={"Quantidade"} />
              <Column caption={"Solicitado em"} />
            </DataGrid>
          </div>
        </Item>
      </TabPanel>
    </div>
  </React.Fragment>
);

export default RecebidosPage;
