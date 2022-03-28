export const SignupFormDetail = ({firstName, lastName}) => {
    
    return ([{
        fieldLabel:"Firstname",
        fieldName:"firstName", 
        fieldType:"text", 
        fieldValue:firstName
    }, {
        fieldLabel:"Lastname",
        fieldName:"lastName", 
        fieldType:"text", 
        fieldValue:lastName
    }]
    );
}