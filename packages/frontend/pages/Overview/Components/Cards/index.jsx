
import React from 'react';

const Card = (props) => {
        return (
            <div style={{
              height: "122dp",
              border: "1px solid #E2E2EA",
              width: '100%',
              marginRight: 40,
              borderRadius: '20px',
              paddingTop: "20px",
              paddingRight: "24px",
              paddingBottom: "20px",
              paddingLeft: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
                <h1 style={{
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                  letterSpacing: "0.1px",
                  color: "#171725"
                }}>{props.data.name}</h1>
                <h1 style={{
                  width: "33px",
                  height: "42px",
                  fontFamily: 'Poppins',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "42px",
                  letterSpacing: "0.116667px",
                  color: "#3DD598",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                }}>{props.data.number}</h1>
            </div>
        )
}

export default Card;