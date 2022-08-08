import React from "react";
import "./convite.scss";

import Form, { GroupItem, SimpleItem, ButtonItem } from "devextreme-react/form";
import { FileUploader } from "devextreme-react";

const ConviteFornecedorPage = () => {
  const convidarOpcoes = {
    text: "Convidar",
    icon: "arrowright",
  };
  const exemploOpcoes = {
    text: "Exemplo",
    icon: "download",
  };
  const importarOpcoes = {
    text: "Importar",
    icon: "upload",
  };

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Convidar fornecedor</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <h2>Convite em lote</h2>
          <div style={{display: "flex", alignItems: "flex-start"}}>
            <FileUploader
              selectButtonText="Selecione planilha"
              labelText=""
              accept="image/*"
              uploadMode="useForm"
              width={250}
            />
            <Form width={750}>
              <GroupItem colCount={2}>
                <GroupItem colCount={2}>
                  <ButtonItem
                    buttonOptions={exemploOpcoes}
                    horizontalAlignment={"right"}
                  />
                  <ButtonItem
                    buttonOptions={importarOpcoes}
                    horizontalAlignment={"right"}
                  />
                </GroupItem>
              </GroupItem>
            </Form>
          </div>
          <div className={"divider-h"} />
          <Form className={"form-empresa"}>
            <GroupItem colCount={2}>
              <SimpleItem editorType={"dxTextBox"} label={{ text: "CPF/CNPJ *" }} />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Nome do(a) vendedor(a) *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "E-mail *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Telefone *" }}
              />
            </GroupItem>
            <GroupItem>
              <ButtonItem
                buttonOptions={convidarOpcoes}
                horizontalAlignment={"right"}
              />
            </GroupItem>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConviteFornecedorPage;
