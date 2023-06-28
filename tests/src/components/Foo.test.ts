/**
 * @vitest-environment happy-dom
 */

import { assert, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import { DropdownMenuRoot } from "radix-vue";

describe("Foo tests!", () => {
	it("should render", () => {
		const wrapper = mount(DropdownMenuRoot);
	});
});
