import { hi } from "./hi.js"

import { describe, expect, test } from "bun:test"

describe("Hi!", () => {
  test("Hi, Alice!", () => {
    expect(hi("Alice")).toBe("Hi, Alice!")
  })
})
