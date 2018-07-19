import { Edition } from './Edition';
import { User } from './User';

export interface Current {
    is_logged_in: boolean;
    is_registration_open: boolean;
    is_teacher: boolean;
    is_contestant: boolean;
    last_edition_with_results: Edition;
    edition: Edition;
    user: User;
};