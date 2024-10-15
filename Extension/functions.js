/**
 * @param {string} text
 */
export function buildUrl(text) {
  /** @type {string} */
  let urlBuilder;

  /** @type {string} */
  const splitText = text.split(" ");
  const firstWord = splitText[0];
  // const secondWord = splitText[1];

  const baseURL = "https://serviceportal.lluh.org";
  const _baseURLAlt = "https://lluh.service-now.com";

  switch (true) {
    case text.startsWith("INC") || text.startsWith("inc"):
      urlBuilder = `${baseURL}/nav_to.do?uri=incident.do?sys_id=${firstWord}`;
      break;
    case text.startsWith("RITM") || text.startsWith("ritm"):
      urlBuilder = `${baseURL}/nav_to.do?uri=sc_req_item.do?sys_id=${firstWord}`;
      break;
    case text.startsWith("CHG") || text.startsWith("chg"):
      urlBuilder = `${baseURL}/nav_to.do?uri=change_request.do?sys_id=${firstWord}`;
      break;
    case firstWord === "n":
      urlBuilder = `${baseURL}/now/nav/ui/classic/params/target/incident.do`;
      break;
    case firstWord === "h":
      urlBuilder = `${baseURL}/now/nav/ui/classic/params/target/home.do`;
      break;
    default:
      urlBuilder = `${baseURL}/now/nav/ui/classic/params/target/home.do`;
      break;
  }

  return urlBuilder;
}
