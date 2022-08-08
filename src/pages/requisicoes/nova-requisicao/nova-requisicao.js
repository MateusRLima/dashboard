import Form, { GroupItem, SimpleItem, ButtonItem } from "devextreme-react/form";
import React from "react";
import "./nova-requisicao.scss";

const NovaRequisicaoPage = () => {
  const radioGroupOpcoes = {
    layout: "horizontal",
    items: [
      {
        text: "Sim",
      },
      {
        text: "Não",
      },
    ],
  };

  const textAreaOpcoes = {
    maxLength: 1000,
  };

  const checkBoxOpcoes = {
    text: "Requisição urgente",
    defaultValue: null,
  };

  const anexoOpcoes = {
    text: "Anexar",
    icon: "upload"
  };

  const encaminharOpcoes = {
    text: "Encaminhar",
    icon: "arrowright"
  }

  const adicionarOpcoes = {
    text: "Adicionar produto",
    icon: "add"
  }

  const convidarOpcoes = {
    text: "Convidar fornecedor",
    icon: "user"
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Criar requisição</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form>
            <GroupItem caption={"Área de requisição"}>
              <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Título da requisição (opcional)" }}
              />
              <SimpleItem
                editorType={"dxTextArea"}
                editorOptions={textAreaOpcoes}
                label={{ text: "Observação (opcional)" }}
              />
            </GroupItem>
            <GroupItem>
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Empresa solicitante *" }}
              />
              <SimpleItem
                editorType={"dxCheckBox"}
                editorOptions={checkBoxOpcoes}
              />
            </GroupItem>
            <div className="divider"></div>
            <GroupItem caption={"Área do produto"} colCount={3}>
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Produto *" }}
              />
              <SimpleItem
                editorType={"dxNumberBox"}
                label={{ text: "Quantidade *" }}
              />
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Unidade de compra *" }}
              />
            </GroupItem>
            {/* <GroupItem caption={"Atributos do produto"}>
              <SimpleItem
                editorType={"dxRadioGroup"}
                label={{ text: "Quantidade *" }}
              />
            </GroupItem> */}
            <GroupItem caption={"Área da entrega"} colCount={2}>
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Endereço da entrega *" }}
              />
              <SimpleItem
                editorType={"dxSelectBox"}
                label={{ text: "Endereço para emissão de nota fiscal *" }}
              />
              <SimpleItem
                editorType={"dxDateBox"}
                label={{ text: "Data desejada para recebimento do produto *" }}
              />
              <ButtonItem
                buttonOptions={anexoOpcoes}
                horizontalAlignment={"left"}
                verticalAlignment={"bottom"}
              ></ButtonItem>
              <SimpleItem
                editorOptions={radioGroupOpcoes}
                editorType={"dxRadioGroup"}
                label={{ text: "Tem preferência por fornecedor ?" }}
              />
              <SimpleItem
                editorOptions={radioGroupOpcoes}
                editorType={"dxTextArea"}
                label={{ text: "Observação (opcional)" }}
              />
            </GroupItem>
            <GroupItem colCount={3}>
              <ButtonItem
                buttonOptions={adicionarOpcoes}
                horizontalAlignment={"left"}
              />
              <ButtonItem
                buttonOptions={convidarOpcoes}
                horizontalAlignment={"center"}
              />
              <ButtonItem
                buttonOptions={encaminharOpcoes}
                horizontalAlignment={"right"}
              />
            </GroupItem>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NovaRequisicaoPage;
