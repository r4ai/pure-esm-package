import { hi } from "./hi.js"

import { describe, test, expect } from "bun:test"

describe("Hi!", () => {
  test("Hi, Alice!", () => {
    expect(hi("Alice")).toBe("Hi, Alice!")
  })
})
