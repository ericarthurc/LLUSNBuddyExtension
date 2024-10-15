import { assertEquals } from "jsr:@std/assert";
import { buildUrl } from "../Extension/functions.js";

Deno.test("test INC lookup", () => {
  const output = buildUrl("INC1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=incident.do?sys_id=INC1202834"
  );
});

Deno.test("test inc lookup", () => {
  const output = buildUrl("inc1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=incident.do?sys_id=inc1202834"
  );
});

Deno.test("test RITM lookup", () => {
  const output = buildUrl("RITM1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=sc_req_item.do?sys_id=RITM1202834"
  );
});

Deno.test("test ritm lookup", () => {
  const output = buildUrl("ritm1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=sc_req_item.do?sys_id=ritm1202834"
  );
});

Deno.test("test CHG lookup", () => {
  const output = buildUrl("CHG1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=change_request.do?sys_id=CHG1202834"
  );
});

Deno.test("test chg lookup", () => {
  const output = buildUrl("chg1202834");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/nav_to.do?uri=change_request.do?sys_id=chg1202834"
  );
});

Deno.test("test new INC", () => {
  const output = buildUrl("n 8n92v3y4089vny9");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/now/nav/ui/classic/params/target/incident.do"
  );
});

Deno.test("test home", () => {
  const output = buildUrl("h 987ds98fd");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/now/nav/ui/classic/params/target/home.do"
  );
});

Deno.test("test default catch random", () => {
  const output = buildUrl("bv7826y873");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/now/nav/ui/classic/params/target/home.do"
  );
});

Deno.test("test default catch empty", () => {
  const output = buildUrl("");
  assertEquals(
    output,
    "https://serviceportal.lluh.org/now/nav/ui/classic/params/target/home.do"
  );
});
