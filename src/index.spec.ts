import { describe, expect, it } from "vitest";
import { hello } from ".";

describe("hello", () => {
	it("should say hello to the provided name", () => {
		expect(hello("World")).toBe("Hello, World!");
		expect(hello("Typescript")).toBe("Hello, Typescript!");
	});
});
