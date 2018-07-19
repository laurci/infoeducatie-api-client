export interface Edition {
    id: number;
    year: number;
    name: string;
    camp_start_date: string;
    camp_end_date: string;
    motto: string;
    registration_start_date: string;
    registration_end_date: string;
    travel_data_deadline: string;
    published: boolean;
    created_at: string;
    updated_at: string;
    current: boolean;
    projects_forum_category: string;
    talks_count: number;
    talks_forum_category: string;
    show_results: boolean;
};