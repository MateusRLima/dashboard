import React from "react";
import "./fornecedores.scss";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";

import { useHistory } from "react-router-dom";

import HeaderDataGrid from "../../components/header-datagrid/header-datagrid";

const FornecedoresPage = () => {
  const history = useHistory();

  function convidarFornecedor() {
    history.push("/convite");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Departamentos</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <HeaderDataGrid>
            <Button text="Convidar fornecedor" icon="add" onClick={convidarFornecedor} />
          </HeaderDataGrid>
          <DataGrid>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <Column caption={"CNPJ"} />
            <Column caption={"Razão social"} />
            <Column caption={"Nome fantasia"} />
            <Column caption={"Usuário responsável"} />
            <Column caption={"Cidade/Estado"} />
            <Column caption={"Status"} />
            <Column caption={"Criado em"} />
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

export default FornecedoresPage;
