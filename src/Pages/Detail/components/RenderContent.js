import { isEmpty } from "lodash";
import React from "react";
import RenderFooter from "./RenderFooter.js";

const RenderContent = (props) => {
  const { htr } = props || {};
  return (
    <>
      {!isEmpty(htr?.cumRapChieu) &&
        htr?.cumRapChieu?.map((cumRap, index) => {
          return (
            <div className="mt-5" key={index}>
              <div className="flex flex-row">
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={cumRap.hinhAnh}
                  alt=""
                />
                <div className="ml-2">
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      lineHeight: 1,
                    }}
                  >
                    {cumRap.tenCumRap}
                  </p>
                  <p style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                </div>
              </div>
              <RenderFooter cumRap={cumRap} />
            </div>
          );
        })}
    </>
  );
};

export default RenderContent;
