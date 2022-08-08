import DashboardIcon from "./assets/icons/dashboard-icon.svg";
import TableIcon from "./assets/icons/table-icon.svg";

export const navigation = [
  {
    text: "BMT",
    path: "/home",
    icon: DashboardIcon,
    items: [
      {
        text: "Compras por categoria",
        path: "/compra-categoria",
      },
      {
        text: "Volume por faixa de preço",
        path: "/volume-preco",
      },
      {
        text: "Subcategoria por ano",
        path: "/empresa-grafico",
      },
      {
        text: "Compras x Orçamento",
        path: "/compras-orcamento",
      },
      {
        text: "Compras por departamento",
        path: "/compras-departamento",
      },
      {
        text: "Analítica Fornecedores",
        path: "/analitica-fornecedor",
      },
      {
        text: "Economizômetro",
        path: "/economizometro",
      },
      {
        text: "Analítica Cotações",
        path: "/cotacoes",
      },
      {
        text: "Raio-X Produtos",
        path: "/raiox",
      },
      {
        text: "Requisições X Pedidos",
        path: "/requisicoes-pedidos",
      },
    ],
  },
  {
    text: "Faturas",
    icon: TableIcon,
    path: "/faturas",
  },
  {
    text: "Orçamento",
    icon: "money",
  },
  {
    text: "Pedidos",
    path: "/pedidos",
    icon: "folder",
  },
  {
    text: "Cotações",
    icon: "percent",
  },
  {
    text: "Requisições",
    icon: "arrowright",
    items: [
      { text: "Lista", path: "/requisicoes" },
      {
        text: "Criar",
        path: "/nova-requisicao",
      },
      {
        text: "Fluxo de aprovação",
        // path: "/nova-requisicao",
      },
    ],
  },
  {
    text: "Auditoria",
    path: "/auditoria",
    icon: "group",
  },

  {
    text: "Produtos",
    icon: "product",
    items: [
      {
        text: "Meus Produtos",
        path: "/meus-produtos",
      },
      {
        text: "Criar",
        path: "/novo-produto",
      },
      {
        text: "Categorias",
        path: "/categorias",
      },
      {
        text: "Departamentos",
        path: "/departamentos",
      },
    ],
  },
  {
    text: "Recebidos",
    path: '/recebidos',
    icon: "box",
  },
  {
    text: "Contratos",
    // path: "/departamentos",
    icon: "textdocument",
  },
  {
    text: "Fornecedores",
    icon: "car",
    items: [
      {
        text: "Fornecedor",
        path: "/fornecedores",
      },
      {
        text: "Produtos",
        // path: "/departamentos",
      },
      {
        text: "Tabela de preço",
        // path: "/departamentos",
      },
      {
        text: "Acordo comercial",
        // path: "/departamentos",
      },
      {
        text: 'Convidar fornecedor',
        path: '/convite',
      }
    ],
  },
  {
    text: "Filiais",
    icon: "globe",
    items: [
      { text: "Lista", path: "/empresa" },
      { text: "Criar", path: "/nova-empresa" },
    ],
  },
  {
    text: "Configuração",
    icon: "preferences",
    items: [
      {
        text: "Segurança",
        // path: "/departamentos",
      },
      {
        text: "Geral",
        // path: "/departamentos",
      },
      {
        text: "Calendário",
        // path: "/departamentos",
      },
    ],
  },
];
