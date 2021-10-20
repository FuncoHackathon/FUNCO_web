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
          <input type="text" className="wriInput" />
          <span className="wriSpan">원</span>
        </div>

        <div className="fff">
          <h1 className="wriTitle">프로젝트의 마감일을 적어주세요</h1>
          <p className="wriDes">최소 7일부터 최대 100일까지 가능합니다</p>
          <div className="wriInputDiv">
            <div className="WWW">
              <input type="text" />
              <span className="wriSpan">년</span>
            </div>
            <div className="WWW">
              <input type="text" />
              <span className="wriSpan">월</span>
            </div>
            <div className="WWW">
              <input type="text" />
              <span className="wriSpan">일</span>
            </div>
            <span className="wriSpan">-D 99</span>
          </div>
        </div>

        <div className="fff">
          <h1 className="wriTitle">프로젝트 대표 이미지를 등록해주세요</h1>
          <p className="wriDes">
            홈페이지와 외부 공유를 했을 때 보여집니다. 프로젝트를 한 눈에 나타낼
            수 있는 이미지를 등록해주세요.
          </p>
          <div className="filebox">
            <input
              className="upload-name"
              value="첨부파일"
              placeholder="첨부파일"
              readOnly
            />
            <label for="file" className="fileSearch">
              파일찾기
            </label>
            <input type="file" id="file" />
          </div>
        </div>
        <div className="fff">
          <h1 className="wriTitle">프로젝트 스토리를 적어주세요</h1>
          <p className="wriDes">프로젝트를 잘 설명해주세요.</p>
          <textarea className="writeTextarea"></textarea>
          <span className="wriSpan">10 / 1000</span>
        </div>
        <button className="submitBut">제출하기</button>
        <button className="submitButBack">뒤로가기</button>
      </div>
    </div>
  );
};

export default WriteForm;
