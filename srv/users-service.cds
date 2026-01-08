using { my.users as app} from '../src/data-model';

service UsersListService {
  entity Userslist as projection on app.Userslist;
}