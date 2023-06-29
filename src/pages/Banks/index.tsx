import LoggedLayout from "../../components/LoggedLayout";
import { useState, useEffect } from "react";

import { Table } from "../../style/Users";

type TableItemType = {
  ispb: string;
  name: string;
  code: number;
};

export function Banks() {
  const [tableData, setTableData] = useState<TableItemType[]>();

  function handleGetBanks() {
    fetch("https://brasilapi.com.br/api/banks/v1")
      .then((response) => response.json())
      .then((data) => {
        const banks = data.slice(0, 5);
        setTableData(banks);
      })
      .catch((error) => {
        console.error("Ocorreu um erro na requisição:", error);
      });
  }

  useEffect(() => {
    handleGetBanks();
  }, []);

  return (
    <LoggedLayout>
      <Table>
        <thead>
          <tr>
            <th className="status">ispb</th>
            <th>Nome</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map(({ ...row }) => {
              return (
                <tr key={row.ispb}>
                  <td className="status">{row.ispb}</td>
                  <td className="userName">{row.name}</td>
                  <td className="userOccupation">{row.code === null ? "Não informado" :row.code}</td>
                  <td>
                    <button
                      className="accessButton"
                      type="button"
                      onClick={() => console.log("opa")}
                    >
                      Consultar
                    </button>
                  </td>
                  <td className="featureIcon">
                    <button
                      onClick={() => {
                        console.log("opa");
                      }}
                      className="editButton"
                    >
                      Editar
                    </button>
                  </td>
                  <td className="featureIcon">
                    <button
                      className="disableButton"
                      type="button"
                      onClick={() => {
                        console.log("opa");
                      }}
                    >
                      Desativar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </LoggedLayout>
  );
}
