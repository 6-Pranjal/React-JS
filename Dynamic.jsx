function Dynamic (){
 
  let age="21";
  let goal="Placement";

  let pop=()=>{
    return "Prranjal"
  }
  return(
    <p>Message : UserName is {pop()} --
    UserAge={age} -- UserGoal={goal}
    </p>
  );
}

export default Dynamic;