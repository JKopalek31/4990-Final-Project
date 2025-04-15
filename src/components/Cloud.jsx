import React from "react";

function Cloud() {
  return (
    <>
      {/* We can inject our styles right here in a <style> tag */}
      <style>{`
        .cloud {
          position: relative;
          width: 120px;
          height: 60px;
          border-radius: 60px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
          animation: cloudFloat 3s ease-in-out infinite alternate;
        }

        .cloud-lobe {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        /* Adjust the sizes and positions of each "puff" */
        .lobe1 {
          width: 80px;
          height: 80px;
          top: -30px;
          left: 20px;
        }
        .lobe2 {
          width: 100px;
          height: 100px;
          top: -40px;
          left: 80px;
        }
        .lobe3 {
          width: 60px;
          height: 60px;
          top: -80px;
          right: -65px;
        }
        .lobe4 {
          width: 80px;
          height: 80px;
          top: 6px;
          left: 150px;
        }

        /* Simple horizontal float animation */
        @keyframes cloudFloat {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(20px);
          }
        }
      `}</style>

      <div className="cloud">
        <div className="cloud-lobe lobe1"></div>
        <div className="cloud-lobe lobe2"></div>
        <div className="cloud-lobe lobe3"></div>
        <div className="cloud-lobe lobe4"></div>
      </div>
    </>
  );
}

export default Cloud;
