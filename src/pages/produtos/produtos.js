import { TabPanel } from "devextreme-react";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import ProdutosReceber from "../../components/produtos/produtos-receber/produtos-receber"

import React from "react";
import "./produtos.scss";

const tabs = [{ text: "Produtos a receber", content: ProdutosReceber }, { text: "Produtos recebidos" }];

const ProdutosPage = () => (
  <React.Fragment>
    <h2 className={"content-block"}>Produtos</h2>
    <div className={"content-block"}>
      <div className={"dx-card responsive-paddings"}>
        {/* <TabPanel dataSource={tabs} animationEnabled={true} swipeEnabled={true} height={260} /> */}
        
        {/* <DataGrid>
          <FilterRow visible={true} />
          <FilterPanel visible={true} />
          <Column caption={"Produto"} />
          <Column caption={"Atributos"} />
          <Column caption={"Solicitante"} />
          <Column caption={"Empresa"} />
          <Column caption={"Inf. Requisição"} />
          <Column caption={"Quantidade"} />
          <Column caption={"Solicitado em"} />
          <Summary>
            <TotalItem column={"Código"} summaryType={"count"} />
          </Summary>
        </DataGrid> */}
      </div>
    </div>
  </React.Fragment>
);

export default ProdutosPage;
