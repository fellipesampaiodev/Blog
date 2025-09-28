import { render } from "@testing-library/react";
import HomePage from "../page";

jest.mock("@/lib/artigos", () => ({
  getArtigos: jest.fn().mockResolvedValue([
    {
      slug: "artigo-1",
      titulo: "Primeiro Artigo",
      autor: "Autor Teste",
      data: "2025-09-28",
    },
  ]),
}));

describe("HomePage", () => {
  it("renders the artigos list", async () => {
    const { findByText } = render(await HomePage());
    expect(await findByText("Primeiro Artigo")).toBeInTheDocument();
    expect(await findByText("Autor Teste - 2025-09-28")).toBeInTheDocument();
  });
});