import React from 'react';

const TimeCard = (props) => {
  return (
    <div
      style={{
        height: '122dp',
        border: '1px solid #E2E2EA',
        width: '100%',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: '20px',
        paddingTop: '20px',
        paddingRight: '24px',
        paddingBottom: '20px',
        paddingLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h1
        style={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '24px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          fontSize: 16,
          letterSpacing: '0.1px',
          color: '#171725',
        }}
      >
        Busy hours
      </h1>
      <span style={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:"center"}}>
        <h1 style={{fontSize: 20,}}>From</h1>
        <h1 style={{ marginLeft: '.5rem', color:"#3DD598",fontSize: 22, }} >{props.data.from} </h1>
        <h1 style={{ marginLeft: '.5rem', fontSize: 20, }} > - to </h1>
        <h1 style={{ marginLeft: '.5rem', color:"#3DD598", fontSize: 22,}} >{props.data.to}</h1>
        <div />
      </span>
    </div>
  );
};

export default TimeCard;
