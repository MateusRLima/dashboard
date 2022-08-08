import React from "react";
import "./nova-empresa.scss";

import Form, { GroupItem, SimpleItem, ButtonItem } from "devextreme-react/form";

const NovaEmpresaPage = () => {
  const criarOpcoes = {
    text: "Criar",
    icon: "arrowright",
  };

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Nova Empresa</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form className={"form-empresa"}>
            <GroupItem caption={"Dados da empresa"}>
              <GroupItem colCount={2}>
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "CNPJ *" }}
                />
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "Telefone *" }}
                />
              </GroupItem>
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Razão social *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Nome fantasia *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Apelido" }}
              />
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Indicador de inscrição estadual" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Inscrição estadual" }}
              />
            </GroupItem>
            <GroupItem caption={"Endereço da empresa"}>
              <SimpleItem editorType={"dxTextBox"} label={{ text: "CEP *" }} />
              <GroupItem colCount={2}>
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "Rua/Avenida *" }}
                />
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "Número *" }}
                />
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "Bairro *" }}
                />
                <SimpleItem
                  editorType={"dxTextBox"}
                  label={{ text: "Complemento" }}
                />
                <SimpleItem
                  editorType={"dxSelectBox"}
                  label={{ text: "Estado *" }}
                />
                <SimpleItem
                  editorType={"dxSelectBox"}
                  label={{ text: "Cidade *" }}
                />
              </GroupItem>
            </GroupItem>
            <GroupItem caption={"Usuário responsável"}>
              <SimpleItem editorType={"dxSelectBox"} />
            </GroupItem>
            <GroupItem>
              <ButtonItem
                buttonOptions={criarOpcoes}
                horizontalAlignment={"right"}
              />
            </GroupItem>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NovaEmpresaPage;
