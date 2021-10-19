import React from "react";
import "../styles/write.scss";

const WriteForm = () => {
  return (
    <div className="wfra">
      <div className="wriFra">
        <div className="fff">
          <h1 className="wriTitle">프로젝트 성공 조건 & 수수료 안내</h1>
          <p className="wriDes">
            프로젝트 종료일 기준 모금액이 목표금액의 100% 이상인 경우에만
            프로젝트가 성공하게 됩니다. 프로젝트가 성공한 경우, 크라우디는
            모금액에서 수수료를 제한 금액을 정산해드립니다.
          </p>
        </div>

        <div className="fff">
          <h1 className="wriTitle">프로젝트의 제목을 적어주세요</h1>
          <p className="wriDes">
            프로젝트의 핵심 내용을 담을 수 있고 간결한 제목을 정해주세요.
          </p>
          <input type="text" maxLength={40} className="wriInput" />
          <span className="wriSpan">0 / 40</span>
        </div>

        <div className="fff">
          <h1 className="wriTitle">목표 금액을 적어주세요</h1>
          <p className="wriDes">
            <span style={{ color: "#F00000" }}>최소 100,000원</span> 이상이어야
            합니다.
          </p>
          <input type="text" maxLength={40} className="wriInput" />
          <span className="wriSpan">원</span>
        </div>

        <div className="fff">
          <h1 className="wriTitle">목표 금액을 적어주세요</h1>
          <p className="wriDes">
            <span style={{ color: "#F00000" }}>최소 100,000원</span> 이상이어야
            합니다.
          </p>
          <input type="text" maxLength={40} className="wriInput" />
          <span className="wriSpan">원</span>
        </div>
      </div>
    </div>
  );
};

export default WriteForm;
