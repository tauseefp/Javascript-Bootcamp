let user="admin";
switch (user) {
    case "admin":
         return console.log("you get the full aacesss");
        break;
        case "sub-admin":
            return console.log("gets acces to create /delete courses");
           break;
           case "testprep":
            return console.log("gets acess to create/delete tests");
           break;
           case "user":
            return console.log("gets acces to  consume the content");
           break;
         
    default:
        console.log("trial user");
        break;
}
