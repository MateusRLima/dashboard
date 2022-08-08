import React from "react";
import "./meus-produtos.scss";

import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import { Button, Tabs } from "devextreme-react";
import { useHistory } from "react-router-dom";

import HeaderDataGrid from "../../../components/header-datagrid/header-datagrid";

const MeusProdutosPage = () => {
  const history = useHistory();

  function novaRequisicao() {
    history.push("/novo-produto");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Meus produtos</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <HeaderDataGrid>
            <Button
              className="header-button"
              text="Novo"
              icon="add"
              onClick={novaRequisicao}
            />
          </HeaderDataGrid>
          <DataGrid>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <Column caption={"ERP"} />
            <Column caption={"EAN"} />
            <Column caption={"Tipo"} />
            <Column caption={"Título"} />
            <Column caption={"Categoria"} />
            <Column caption={"Valores de atributo"} />
            <Column caption={"Atualizado em"} />
            <Summary>
              <TotalItem column={"Código"} summaryType={"count"} />
            </Summary>
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MeusProdutosPage;
