import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

//TODO: follow ref here: https://www.material-tailwind.com/docs/react/tabs

export const GeneralPaneComponent: IComponent = () => {
  const data = [
    {
      label: "Janitors",
      value: "janitors",
      children: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Collectors",
      value: "collectors",
      children: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div className="general-pane">
      <div className="employee">
        <Tabs value="html">
          <TabsHeader
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            {data.map(({ value, children }) => (
              <TabPanel key={value} value={value}>
                {children}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      <div className="mcp">
        MCP table here
        {/* TODO: follows refs: https://tailwindcss.com/docs/table-layout */}
        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
