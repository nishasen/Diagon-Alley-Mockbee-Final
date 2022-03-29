export const SignupFormDetail = ({firstName, lastName}) => {
    
    return ([{
        label:"Firstname",
        name:"firstName", 
        type:"text", 
        value:firstName
    }, {
        label:"Lastname",
        name:"lastName", 
        type:"text", 
        value:lastName
    }]
    );
}