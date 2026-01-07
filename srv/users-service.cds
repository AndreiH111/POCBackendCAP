using { my.users } from '../db/data-model';

service UsersListService {
  entity Userslist  as projection on users.Userslist;
}