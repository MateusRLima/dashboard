import React from "react";
import "./departamentos.scss";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import { Button, Form } from "devextreme-react";

import { useHistory } from "react-router-dom";

import HeaderDataGrid from "../../components/header-datagrid/header-datagrid";
import { ButtonItem, SimpleItem } from "devextreme-react/form";

const DepartamentosPage = () => {
  const history = useHistory();

  function novoDepartamento() {
    history.push("/nova-departamento");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Departamentos</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          {/* <HeaderDataGrid>
            <Button text="Novo" icon="add" onClick={novoDepartamento} />
            <Form>
              <SimpleItem editorType={"dxTextBox"} label={"Nome"} />
              <ButtonItem />
            </Form>
          </HeaderDataGrid> */}
          <DataGrid>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <Column caption={"Nome"} />
            <Column caption={"Gerentes"} />
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

export default DepartamentosPage;
