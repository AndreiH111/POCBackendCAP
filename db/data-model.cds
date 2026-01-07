namespace my.users;

entity Userslist  {
  key id    : Integer;
      name  : String(100);
      email : String(255);
      role  : String(30);
      active: Boolean;
}
