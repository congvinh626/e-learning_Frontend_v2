export interface infoLesson {
    id: number;
    title: string;
    slug: string;
    description: string;
    link: string;
    course_id: number;
    files: FileItem[];
}

export interface FileItem {
    id: number;
    name: string;
    path: string;
}