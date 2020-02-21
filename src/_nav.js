export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info"
      }
    },
    {
      title: true,
      name: "Partners",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Add Partner",
      url: "/base/forms",
      icon: "icon-pencil"
    },
    {
      name: "View Partner",
      url: "/base/tables",
      icon: "icon-list"
    },
    {
      title: true,
      name: "General",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Birthdays",
      url: "/base/Collapses",
      icon: "icon-calendar"
    },
    {
      name: "Add Users",
      url: "/widgets",
      icon: "icon-calculator"
    },
    {
      name: "Charts",
      url: "/charts",
      icon: "icon-pie-chart"
    },
    {
      divider: true
    }
  ]
};
