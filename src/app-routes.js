import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, FaturasPage, CategoriasPage, PedidosPage, ProdutosPage, AuditoriaPage, DepartamentosPage, RequisicoesPage, NovaRequisicaoPage, EmpresaPage, NovaEmpresaPage, MeusProdutosPage, NovoProdutoPage, CompraCategoriaPage, VolumePrecoPage, SubcategoriaAnoPage, ComprasOrcamentoPage, ComprasDepartamentoPage, AnaliticaFornecedorPage, EconomizometroPage, CotacoesPage, RaioxPage, RequisicoesPedidosPage, DadosEmpresaPage, FornecedoresPage, ConvitePage, RecebidosPage } from './pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/faturas',
    component: FaturasPage
  }, 
  {
    path: '/categorias',
    component: CategoriasPage
  }, 
  {
    path: '/pedidos',
    component: PedidosPage
  }, 
  {
    path: '/produtos',
    component: ProdutosPage
  }, 
  {
    path: '/auditoria',
    component: AuditoriaPage
  }, 
  {
    path: '/departamentos',
    component: DepartamentosPage
  }, 
  {
    path: '/requisicoes',
    component: RequisicoesPage
  }, 
  {
    path: '/nova-requisicao',
    component: NovaRequisicaoPage
  }, 
  {
    path: '/empresa',
    component: EmpresaPage
  }, 
  {
    path: '/nova-empresa',
    component: NovaEmpresaPage
  }, 
  {
    path: '/meus-produtos',
    component: MeusProdutosPage
  },
  {
    path: '/novo-produto',
    component: NovoProdutoPage
  },
  {
    path: '/compra-categoria',
    component: CompraCategoriaPage
  }, 
  {
    path: '/volume-preco',
    component: VolumePrecoPage
  }, 
  {
    path: '/empresa-grafico',
    component: SubcategoriaAnoPage
  }, 
  {
    path: '/compras-orcamento',
    component: ComprasOrcamentoPage
  }, 
  {
    path: '/compras-departamento',
    component: ComprasDepartamentoPage
  }, 
  {
    path: '/analitica-fornecedor',
    component: AnaliticaFornecedorPage
  }, 
  {
    path: '/economizometro',
    component: EconomizometroPage
  }, 
  {
    path: '/cotacoes',
    component: CotacoesPage
  }, 
  {
    path: '/raiox',
    component: RaioxPage
  }, 
  {
    path: '/requisicoes-pedidos',
    component: RequisicoesPedidosPage
  }, 
  {
    path: '/dados-empresa',
    component: DadosEmpresaPage
  }, 
  {
    path: '/fornecedores',
    component: FornecedoresPage
  }, 
  {
    path: '/convite',
    component: ConvitePage
  }, 
  {
    path: '/recebidos',
    component: RecebidosPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
