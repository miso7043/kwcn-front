// 메뉴 아이템 타입 정의
export interface MenuItem {
  nameKey: string;
  link: string | null;
  children?: MenuItem[];
}

// 메뉴 데이터 정의
export const menuData: MenuItem[] = [
  {
    nameKey: "common:navigation.home",
    link: "/"
  },
  {
    nameKey: "common:navigation.aboutUs",
    link: null,
    children: [
      { nameKey: "common:about.history", link: "/about/history" },
      { nameKey: "common:about.futurePlans", link: "/about/future" },
      // { nameKey: "common:about.finance", link: "/about/finance" },
      // { nameKey: "common:about.organization", link: "/about/organization" }
    ]
  },
  // { nameKey: "common:navigation.events", link: "/events" },
  // { nameKey: "common:navigation.media", link: "/media" },
  {
    nameKey: "common:navigation.information",
    link: null,
    children: [
      {
        nameKey: "common:information.jobAcademy",
        link: null,
        children: [
          { nameKey: "common:information.job1", link: "/info/jobacademy/job1" },
          { nameKey: "common:information.job2", link: "/info/jobacademy/job2" },
          { nameKey: "common:information.job3", link: "/info/jobacademy/job3" },
          { nameKey: "common:information.job4", link: "/info/jobacademy/job4" },
          { nameKey: "common:information.job5", link: "/info/jobacademy/job5" },
          { nameKey: "common:information.job6", link: "/info/jobacademy/job6" },
          { nameKey: "common:information.job7", link: "/info/jobacademy/job7" },
          { nameKey: "common:information.job8", link: "/info/jobacademy/job8" },
          { nameKey: "common:information.job9", link: "/info/jobacademy/job9" },
          { nameKey: "common:information.job10", link: "/info/jobacademy/job10" },
          { nameKey: "common:information.job11", link: "/info/jobacademy/job11" },
          { nameKey: "common:information.job12", link: "/info/jobacademy/job12" },
          { nameKey: "common:information.job13", link: "/info/jobacademy/job13" },
          { nameKey: "common:information.job14", link: "/info/jobacademy/job14" }
        ]
      },
      {
        nameKey: "common:information.coopHousing",
        link: "/info/coop-housing"
      },
      {
        nameKey: "common:information.tax",
        link: "/info/taxGuide"
      }
    ]
  },
  // {
  //   nameKey: "common:navigation.getInvolved",
  //   link: null,
  //   children: [
  //     { nameKey: "common:getInvolved.volunteer", link: "/getinvolved/volunteer" }
  //   ]
  // },
  // { nameKey: "common:navigation.memberLogin", link: "/login" },
  { nameKey: "common:navigation.donateNow", link: "/donate" }
];