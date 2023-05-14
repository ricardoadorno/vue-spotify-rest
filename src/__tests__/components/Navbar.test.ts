import { mount } from "@vue/test-utils";
import Navbar from "../../components/Navbar.vue";
import { expect, it } from "vitest";
const wrapper = mount(Navbar);

it("renders the correct markup", () => {
  expect(wrapper.html()).toContain('<nav class="navbar">');
});

it("renders the correct markup", () => {
  expect(wrapper.exists()).toBe(true);
});
