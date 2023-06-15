function getuserrole(name,role) 
{
    switch (role) 
        {
        case "admin":
            return`${name} is admin with access`
            break;
            case "sub-admin":
                return`${name} is sub-admin with access`
                break;
                case "testprep":
                    return`${name} to access  to create and delete`
                    break;
        default:
            return`${name} is atrial user`
            break;
    }
}

    console.log(getuserrole("tauseef","admin"));
      let getrole=getuserrole("samm","sub-admin");    
      console.log(getrole);
      



