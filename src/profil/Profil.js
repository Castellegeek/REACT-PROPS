const Profil = ({fullName,bio,profession,handleName}) => {
    return (
        <>
        <div>
            <span>fullName : {fullName} </span> 
        </div>

        <div>
            <span> bio : {bio} </span> 
        </div>

        <div>
            <span>profession : {profession} </span> 
        </div>

        <div>
            <button onClick =  { () => handleName(fullName)} >Display a name</button>
        </div>
    
        </>
    );
}

export default Profil;