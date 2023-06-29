import LoggedLayout from "../../components/LoggedLayout";
import { useState, useEffect } from "react";

import { Table } from "../../style/Users";

type TableItemType = {
  id: string;
  status: string;
  // status: "ATIVO" | "PENDENTE" | "DESATIVADO";
  name: string;
  age: number;
  occupation: string;
};

export function Users() {
  const [tableData, setTableData] = useState<TableItemType[]>();

  useEffect(() => {
    return setTableData([
      {
        id: "1",
        status: "Ativo",
        name: "Francisco Prata Cavalcante",
        age: 23,
        occupation: "Engenheiro",
      },
      {
        id: "2",
        status: "Ativo",
        name: "José Carlos Nobre",
        age: 18,
        occupation: "Programador",
      },
      {
        id: "3",
        status: "Ativo",
        name: "Lucas Nobre de Oliveira",
        age: 37,
        occupation: "Médico",
      },
    ]);
  }, []);

  return (
    <LoggedLayout>
      <Table>
        <thead>
          <tr>
            <th className="status">Status</th>
            <th>Nome</th>
            <th>Profissão</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map(({ ...row }) => {
              return (
                <tr key={row.id}>
                  <td className="status">{row.status}</td>
                  <td className="userName">{row.name}</td>
                  <td className="userOccupation">{row.occupation}</td>
                  <td className="userAge">{row.age} anos</td>
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
