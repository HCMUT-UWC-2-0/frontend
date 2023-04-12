import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Chip,
} from "@material-tailwind/react";
import React from "react";


//TODO: follow ref here: https://www.material-tailwind.com/docs/react/tabs

export const GeneralPaneComponent: IComponent = () => {
  const data = [
    {
      label:"Janitors",
      value: "janitors",
      id1:`1`,
      name1:`John`,
      dob1:`19/2/1973`,
      team1:`Janitor`,
      area1:`D.10`,
      status1:`Busy`,
      id2:`2`,
      name2:`Mark`,
      dob2:`19/2/1973`,
      team2:`Janitor`,
      area2:`D.10`,
      status2:`Free`,
      id3:`3`,
      name3:`Mark`,
      dob3:`19/2/1973`,
      team3:`Janitor`,
      area3:`D.10`,
      status3:`Free`,
      id4:`4`,
      name4:`Mark`,
      dob4:`19/2/1973`,
      team4:`Janitor`,
      area4:`D.10`,
      status4:`Busy`,
    },
    
    {
      label: "Collectors",
      value: "collectors",
      id1:`1`,
      name1:`Alex`,
      dob1:`19/2/1973`,
      team1:`Collector`,
      area1:`D.10`,
      status1:`Busy`,
      id2:`2`,
      name2:`Terry`,
      dob2:`19/2/1973`,
      team2:`Collector`,
      area2:`D.10`,
      status2:`Free`,
      id3:`3`,
      name3:`Mark`,
      dob3:`19/2/1973`,
      team3:`Collector`,
      area3:`D.10`,
      status3:`Free`,
      id4:`4`,
      name4:`Mark`,
      dob4:`19/2/1973`,
      team4:`Collector`,
      area4:`D.10`,
      status4:`Busy`,
    },
  ];
  return (
    <div className="general-pane">
     { <div className="employee">
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
            {data.map(({ value, id2, name2,dob2,team2,area2,status2, id1, name1,dob1,team1,area1,status1, id3, name3,dob3,team3,area3,status3, id4, name4,dob4,team4,area4,status4 }) => (
              <TabPanel key={value} value={value}>
                <table className="border-separate border-spacing-x-40 border-spacing-y-16 border border-slate-800">
          <thead>
            <div className="border border-black-200">
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Ngày sinh</th>
              <th>Team</th>
              <th>Khu vực</th>
              <th>Tình trạng</th>
            </tr>
            </div>
          </thead>
          <tbody>
          <div className="border border-black-200">
            <tr>
              <th>{id1}</th>
              <th>{name1}</th>
              <th>{dob1}</th>
              <th>{team1}</th>
              <th>{area1}</th>
              <th><Chip color="red" value={status1} /></th>
            </tr>
            </div>
            <div className="border border-black-200">
            <tr>
              <th>{id2}</th>
              <th>{name2}</th>
              <th>{dob2}</th>
              <th>{team2}</th>
              <th>{area2}</th>
              <th><Chip color="green" value={status2} /></th>
            </tr>
            </div>
            <div className="border border-black-200">
            <tr>
              <th>{id3}</th>
              <th>{name3}</th>
              <th>{dob3}</th>
              <th>{team3}</th>
              <th>{area3}</th>
              <th><Chip color="green" value={status3} /></th>
            </tr>
            </div>
            <div className="border border-black-200">
            <tr>
              <th>{id4}</th>
              <th>{name4}</th>
              <th>{dob4}</th>
              <th>{team4}</th>
              <th>{area4}</th>
              <th><Chip color="red" value={status4} /></th>
            </tr>
            </div>
          </tbody>
        </table>           
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div> }



      <div className="mcp">
        <b>MCPs</b>
        {/* TODO: follows refs: https://tailwindcss.com/docs/table-layout */}
        <table className="border-separate border-spacing-x-40 border-spacing-y-12 border border-slate-800">
          <thead>
            <div className="border  border-black-200 " >
            <tr>
              <th className=" px-2  whitespace-nowrap ">ID</th>
              <th className=" px-2  whitespace-nowrap ">Tên</th>
              <th className=" px-16  whitespace-nowrap ">Địa chỉ</th>
              <th className=" px-2 whitespace-nowrap ">Thời gian</th>
              <th className=" px-2  whitespace-nowrap ">Khu vực</th>
              <th className=" px-2  whitespace-nowrap ">Tình trạng</th>
            </tr>
            </div>
          </thead>
          <tbody>
          <div className="border border-black-200">
            <tr>  
              <th>1</th>
              <th className=" whitespace-nowrap ">D2,Bình Thạnh</th>
              <th className=" px-1 py-4 whitespace-nowrap ">Quận Bình Thạnh</th>
              <th>8h00:1/3/2022</th>
              <th className=" whitespace-nowrap ">Q2,Bình Thạnh</th>
              <th className=" whitespace-nowrap rounded-tl-lg "><Chip color="amber" value="Half" /></th>
            </tr>
            </div>
            <div className="border border-black-200">
            <tr>
              <th>2</th>
              <th>D2,Bình Thạnh</th>
              <th>Quận Bình Thạnh</th>
              <th>8h00:1/3/2022</th>
              <th>Q2,Bình Thạnh</th>
              <th><Chip color="red" value="Full" /></th>
            </tr>
            </div>
            <div className="border border-black-200">
            <tr>
              <th>3</th>
              <th>D2,Bình Thạnh</th>
              <th>Quận Bình Thạnh</th>
              <th>8h00:1/3/2022</th>
              <th>Q2,Bình Thạnh</th>
              <th><Chip color="green" value="Empty" /></th>
            </tr>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};


