import React from "react";
import "./filiais.scss";

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

const EmpresaPage = () => {
  const history = useHistory();

  function novaEmpresa() {
    history.push("/nova-empresa");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Filiais</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <HeaderDataGrid>
            <Button
              text="Novo"
              icon="add"
              onClick={novaEmpresa}
            />
          </HeaderDataGrid>
          <DataGrid>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <Column caption={"CNPJ"} />
            <Column caption={"Razão social"} />
            <Column caption={"Usuário responsável"} />
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

export default EmpresaPage;
