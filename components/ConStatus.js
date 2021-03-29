

export default function  ConStatus({status}) {  
    return (
        <div>
            <h3>hft client connection status</h3>
            {(() => {
              switch (status) {
                case '0':
                  return  <div style ={{color: "red"}}>  {"offline - maintainence"} </div>;
                case '1':
                  return  <div style ={{color: "green"}}>  {"online - trading"} </div>;
                case '2':
                  return  <div style ={{color: "orange"}}>  {"online - testing"} </div>;
                default:
                  return null;
              }
            })()}
        </div>

    );
}

