import React from "react";
import "./compra-card-grafico.scss";

import Sparkline, { Tooltip } from "devextreme-react/sparkline";


function CompraCardGrafico(props) {

  const { titulo, valor, sparklineDados, percentual } = props

  return (
    <div className="dx-card compra-card">
      <div className="compra-card-header">
        <div>
          <span
            id="valortotal"
          >
            505k
          </span>
        </div>
      </div>
      <span className="titulo">{titulo}</span>
      <div className="compra-card-valores">
        <span className="percentual">{percentual}</span>
        <span className="valor">{valor}</span>
      </div>
      <Sparkline
        dataSource={sparklineDados}
        showMinMax={true}
        className="sparkline"
        argumentField="month"
        valueField={"2011"}
        type="line"
        size={{ width: 115 }}
      >
        <Tooltip format="currency" />
      </Sparkline>
    </div>
  );
}

export default CompraCardGrafico;
