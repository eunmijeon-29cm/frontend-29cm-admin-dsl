import yaml from "js-yaml";

export const AdminPage = () => {
  // 나중엔 실제 YAML fetch해서 파싱하도록 개선
  const yamlText = `
  meta:
    title: "정산 관리"
  table:
    columns:
      - name: id
        label: ID
      - name: name
        label: 이름
  `;

  const config = yaml.load(yamlText) as any;

  return (
    <div style={{ padding: 20 }}>
      <h1>{config.meta.title}</h1>
      <table border={1}>
        <thead>
          <tr>
            {config.table.columns.map((col: any) => (
              <th key={col.name}>{col.label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};
