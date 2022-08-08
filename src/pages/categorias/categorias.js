import React from "react";
import "./categorias.scss";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

const CategoriasPage = () => (
  <React.Fragment>
    <h2 className={"content-block"}>Categorias</h2>
    <div className={"content-block"}>
      <div className={"dx-card responsive-paddings"}>
        <DataGrid>
          <FilterRow visible={true} />
          <FilterPanel visible={true} />
          <Column caption={"Código"} />
          <Column caption={"Nº da nota"} />
          <Column caption={"Pedido"} />
          <Column caption={"Requisição"} />
          <Column caption={"Matriz/Filial"} />
          <Column caption={"Fornecedor"} />
          <Column caption={"Valor total"} />
          <Column caption={"Status"} />
          <Column caption={"Criado em"} />
          <Summary>
            <TotalItem column={"Código"} summaryType={"count"} />
          </Summary>
        </DataGrid>
      </div>
    </div>
  </React.Fragment>
);

export default CategoriasPage;
