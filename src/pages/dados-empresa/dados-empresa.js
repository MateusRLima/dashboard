import React from "react";
import "./dados-empresa.scss";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import HeaderDataGrid from "../../components/header-datagrid/header-datagrid";
import { Button } from "devextreme-react";

const DadosEmpresaPage = () => {
  return (
    <React.Fragment>
      <h2 className={"content-block"}>Dados da Empresa</h2>
      <div className={"content-block dados-linha"}>
        <div
          className={"dx-card"}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            padding: "1rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <h2>Empresa</h2>
            <div style={{display: "flex"}}>
              <div style={{marginRight: "1.5rem"}}>
                <p>CNPJ</p>
                <span>
                  <strong>72.855.744/0001-05</strong>
                </span>
                <p>Razão Social</p>
                <span>
                  <strong>Empresa de Treinamento JP LTDA</strong>
                </span>
                <p>Nome Fantasia</p>
                <span>
                  <strong>Empresa de Treinamento JP</strong>
                </span>
                <p>Apelido</p>
                <span>
                  <strong>Empresa de Treinamento JP</strong>
                </span>
                <p>Telefone</p>
                <span>
                  <strong>(81) 9999-9999</strong>
                </span>
              </div>
              <div>
                <p>Inscrição Estadual</p>
                <span>
                  <strong>468434469</strong>
                </span>
                <p>Inscrição Municipal</p>
                <span>
                  <strong>2402010781</strong>
                </span>
                <p>Atualizado em</p>
                <span>
                  <strong>25/07/2021 17:41</strong>
                </span>
                <p>Criado em</p>
                <span>
                  <strong>25/07/2021 16:30</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="divider-v" />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Endereços</h2>
              <Button text="Novo Endereço" icon="add" />
            </div>
            <DataGrid width={450}>
              <Column caption={"Nome"} />
              <Column caption={"Endereço"} />
            </DataGrid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DadosEmpresaPage;
