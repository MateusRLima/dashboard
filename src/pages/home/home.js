import React, { useState } from "react";
import DashboardCard from "../../components/dashboard-card/dashboard-card";

import { DateBox } from "devextreme-react";
import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
} from "devextreme-react/data-grid";

import GaugeArea from "../../components/gauge-area/gauge-area";

import { dadosLinear } from "./data";

import "./home.scss";

export default function Home() {
  const [data, setData] = useState(new Date());

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>BMT</h2>
        <DateBox
          value={data}
          width={"20rem"}
          label={"Filtrar por data"}
          displayFormat="monthAndYear"
          calendarOptions={{
            maxZoomLevel: "year",
            minZoomLevel: "century",
          }}
        />
      </div>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className={"area-card"}>
            <DashboardCard
              titulo={"Valor total comprado"}
              dados={"R$ 1.200,25"}
              backgroundColor={"#28A745"}
            />
            <DashboardCard
              titulo={"Maior cotação ≠ Valor comprado"}
              dados={"R$ 1.200,25"}
              backgroundColor={"#FFB22B"}
            />
            <DashboardCard
              titulo={"Menor cotação ≠ Valor comprado"}
              dados={"R$ 1.200,25"}
              backgroundColor={"#FC4B6C"}
            />
            <DashboardCard
              titulo={"Cotação média ≠ Valor comprado"}
              dados={"R$ 1.200,25"}
              backgroundColor={"#9A50AF"}
            />
            <DashboardCard
              titulo={"Prazo médio de pagamento"}
              dados={"PMP 5.00"}
              backgroundColor={"#6E4397"}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <GaugeArea
              circularGaugeValue={95}
              circularGaugeTitle={"Pedidos"}
              circularGaugeQtd={40}
              circularGaugeTotalValue={20}
              circularGaugePercentualTitle={"Finalizados"}
              linearGaugeItems={dadosLinear}
            />
            <GaugeArea
              circularGaugeValue={50}
              circularGaugeTitle={"Pedidos"}
              circularGaugeQtd={40}
              circularGaugeTotalValue={20}
              circularGaugePercentualTitle={"Finalizados"}
              linearGaugeItems={dadosLinear}
            />
            <GaugeArea
              circularGaugeValue={30}
              circularGaugeTitle={"Pedidos"}
              circularGaugeQtd={40}
              circularGaugeTotalValue={20}
              circularGaugePercentualTitle={"Finalizados"}
              linearGaugeItems={dadosLinear}
            />
            <GaugeArea
              circularGaugeValue={85}
              circularGaugeTitle={"Pedidos"}
              circularGaugeQtd={40}
              circularGaugeTotalValue={20}
              circularGaugePercentualTitle={"Finalizados"}
              linearGaugeItems={dadosLinear}
            />
          </div>
          <h2>Requisições</h2>
          <DataGrid>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <Column caption={"Todas"} />
            <Column caption={"Abertas"} />
            <Column caption={"Cotação"} />
            <Column caption={"Compra"} />
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}
