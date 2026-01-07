using my.users from '../db/data-model';

service UsersListService {
  entity Userslist  as projection on my.users.Userslist;
}