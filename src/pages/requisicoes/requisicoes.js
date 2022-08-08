import React from "react";
import "./requisicoes.scss";

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

const RequisicoesPage = () => {
  const history = useHistory();

  function novaRequisicao() {
    history.push("/nova-requisicao");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Requisições</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <HeaderDataGrid>
            <Button text="Encaminhar para cotação" />
            <Button className="header-button" text="Agrupar" />
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
            <Column caption={"Título"} />
            <Column caption={"Solicitante"} />
            <Column caption={"Matriz/Filial"} />
            <Column caption={"Qtde. produtos"} />
            <Column caption={"Inf. Requisição"} />
            <Column caption={"Criado em"} />
            <Column caption={"Status"} />
            <Column caption={"Prazo"} />
            <Column caption={"Responsável"} />
            <Summary>
              <TotalItem column={"Código"} summaryType={"count"} />
            </Summary>
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequisicoesPage;
