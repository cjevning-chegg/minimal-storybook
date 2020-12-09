import React from "react";
import styled from "styled-components";
import Tooltip from ".";
import { text } from "@storybook/addon-knobs";

const PositioningElement = styled.div`
  margin: 75px 225px 75px 300px;
`;

export const tooltip = () => {
  return (
    <PositioningElement>
      <Tooltip
        targetElement={
          <a href="#" onClick={(e) => e.preventDefault()}>
            Hover Over Me
          </a>
        }
      >
        <div
          dangerouslySetInnerHTML={{
            __html: text(
              "Content (as an HTML string)",
              `<div style="line-height:1.5;">Content for the tooltip goes here.</div>`
            ),
          }}
        />
      </Tooltip>
    </PositioningElement>
  );
};

tooltip.parameters = {
  knobs: {
    // story uses an HTML input knob so we disable HTML escaping
    escapeHTML: false,
  },
};
