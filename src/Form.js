import React, { useState } from "react";

function Form(props)
{
    let [name, sName] = useState("");
    let [email, sEmail] = useState("");
    let [selected, sSelected] = useState(0);

    function setChecked(numb)
    {
        sSelected(numb);
    }

    return (
        <div>
            <br />Name <input type="text" id="name" onChange={(e)=>{sName(e.target.value)}} />
            <br />E-Mail <input type="text" id="email" onChange={(e)=>{sEmail(e.target.value)}} />

            <br /><input type="checkbox" id="opt0" onChange={(e)=>{setChecked(0)}} checked={selected == 0} />Front-End Dev
            <br /><input type="checkbox" id="opt1" onChange={(e)=>{setChecked(1)}} checked={selected == 1}  />React I
            <br /><input type="checkbox" id="opt2" onChange={(e)=>{setChecked(2)}} checked={selected == 2}  />Backend Dev

            <br /><button onClick={()=>{
                let role = "";
                switch (selected)
                {
                    case 0: role = "Front-End Dev"; break;
                    case 1: role = "React I"; break;
                    case 2: role = "Backend Dev"; break;
                    default: role = "broke";
                }
                props.pushdata({name:name, role:role, email:email});
                }}>Add Team Member</button>
        </div>
    );
}

export default Form;