import React from "react";
import "./novo-produto.scss";

import Form, { GroupItem, SimpleItem, ButtonItem } from "devextreme-react/form";

const NovoProdutoPage = () => {
  const criarOpcoes = {
    text: "Criar",
    icon: "arrowright",
  };

  const radioGroupOpcoes = {
    layout: "horizontal",
    items: [
      {
        text: "Produto",
      },
      {
        text: "Serviço",
      },
    ],
  };

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Novo produto</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form className={"form-empresa"}>
            <GroupItem caption={"Dados da empresa"} colCount={2}>
              <SimpleItem
                editorOptions={radioGroupOpcoes}
                editorType={"dxRadioGroup"}
                label={{ text: "Tipo de cadastro" }}
              />
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Categoria *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Títlo *" }}
              />
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "EAN" }}
              />
              <SimpleItem
                editorType={"dxTagBox"}
                label={{ text: "Unidades disponíveis para o produto" }}
              />
              <SimpleItem
                editorType={"dxTextArea"}
                label={{ text: "Descrição (opcional) *" }}
              />
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Unidade padrão*" }}
              />
              <SimpleItem editorType={"dxTextBox"} label={{ text: "NCM" }} />
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

export default NovoProdutoPage;
