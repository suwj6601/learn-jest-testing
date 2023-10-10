import { SpaceComponent } from "../../src/components/spaces/SpaceComponent";
import ReactDOM from "react-dom";
import React from "react";
import { fireEvent } from "@testing-library/react";

describe("Space component test suite", () => {
  let container: HTMLDivElement;

  const reverseSpaceMock = jest.fn();
  const cleanUpTests = () => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  };

  const setUpTests = (element: any) => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(element, container);
  };

  describe("tests with photo URL", () => {
    beforeEach(() => {
      setUpTests(
        <SpaceComponent
          location={"someLocation"}
          name={"someName"}
          reserveSpace={reverseSpaceMock}
          spaceId={"123"}
          photoUrl="some.url"
        />
      );
    });

    afterEach(() => {
      cleanUpTests();
    });

    test("show image correctly", () => {
      const image = container.querySelector("img");

      expect(image).not.toBeNull();
      expect(image?.src).toBe("http://localhost/some.url");
    });

    test("show label correctly", () => {
      const label = container.querySelectorAll("label");

      expect(label[0]).toHaveTextContent("someName");
      expect(label[1]).toHaveTextContent("123");
      expect(label[2]).toHaveTextContent("someLocation");
    });

    test("reserve spaces", () => {
      const button = container.querySelector("button");
      fireEvent.click(button!);
      expect(reverseSpaceMock).toBeCalledWith("123");
    });
  });

  describe("tests without photo URL", () => {});
});
