import { TalkUser } from './TalkUser';

export interface Talk {
    users: TalkUser[];
    comments_count: number;
    description: string;
    title: string;
    discourse_url: string;
};